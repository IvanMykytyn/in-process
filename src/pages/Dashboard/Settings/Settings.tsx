import { FC, useState } from "react";

import { PersonalInformationSection } from "./PersonalInformationSection";
import { ChangePasswordSection } from "./ChangePasswordSection";

import { getMe, selectTheme, selectUser, setNewTheme } from "store";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { UserInterface } from "models";

// styles
import scss from "./settings.module.scss";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { sun, moon } from "../../../assets/images/icons";

import { UsersManagementSection } from "./UsersManagementSection";
import { Checkbox } from "components";
import { adminService } from "services";

const Settings: FC = () => {
  const { user } = useAppSelector(selectUser);
  const { role, isHidden } = user || ({} as UserInterface);

  const { mode } = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const [isFetching, setIsFetching] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    dispatch(setNewTheme(newMode));
  };

  const handleIsHiddenToggle = async () => {
    try {
      setIsFetching(true);
      await adminService.switchHiddenStatus();
      await dispatch(getMe());

    } catch (error) {
    } finally {
        setIsFetching(false)
    }
  };

  return (
    <div className={scss.settings}>
      <div className={scss.settings__top}>
        <h1 className={scss["settings__header"]}>Account Settings</h1>
        <div className={scss["toggle__container"]}>
          {role === "admin" && (
            <div className={scss["toggle-hidden"]}>
              <p>Hide Me For Others</p>
              <div>
                <Checkbox
                  circled
                  disabled={isFetching}
                  checked={isHidden}
                  onChange={handleIsHiddenToggle}
                />
              </div>
            </div>
          )}
          {/* <button
            className={scss.settings__theme}
            onClick={toggleTheme}
            disabled={true}
          >
            <img
              src={mode === "light" ? sun : moon}
              alt="change theme"
              height={15}
              width={15}
            />
          </button> */}
        </div>
      </div>
      <PersonalInformationSection />
      <ChangePasswordSection />
      {/* <GeneralSettingsSection /> */}
      {role === "admin" && <UsersManagementSection />}
    </div>
  );
};

export { Settings };
