import React, { FC, useCallback, useEffect, useState } from "react";

import { AutocompleteRenderInputParams } from "@mui/material";

import { DeletePopover, Input, MultipleSelectWithBadges } from "components";
import { SectionLayout } from "./SectionLayout";
import { SectionButtons } from "./SectionButtons";

import { addUsers, deleteUser, selectUser } from "store";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { validateArrayOfEmails, validateEmail } from "utils";

// styles
import cn from "classnames";
import scss from "./settings.module.scss";
import { userService } from "services";
import DropdownSingleSelect from "components/DropdownSingleSelect/DropdownSingleSelect";

const UsersManagementSection: FC = () => {
  const { error: serverError } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const [allUsers, setAllUsers] = useState<
    Array<{ email: string; id: string }>
  >([]);
  const [userEmails, setUserEmails] = useState<Array<string>>([]);
  const [userToDelete, setUserToDelete] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [errorDelete, setErrorDelete] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCancelDelete = () => {
    setIsOpen(false);
  };

  const getUsers = useCallback(async () => {
    const response = await userService.getUsersRequest();
    const usersData = response.data.map((user) => {
      const { email, id } = user;
      return {
        email,
        id,
      };
    });
    setAllUsers(usersData);
  }, [setAllUsers]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleSubmitAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = validateArrayOfEmails.validate(userEmails);
      if (error && inputValue) {
        setError("Press Enter to submit this email.");
      } else if (error) {
        setError(error?.message || "");
      } else {
        await dispatch(addUsers(userEmails));
        await getUsers();
        if (!serverError) clearField();
      }
    } catch (err) {
      if (!serverError) clearField();
      // console.log(err);
    }
  };

  const handleDeleteClick = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!userToDelete){
      setErrorDelete("Field cannot be empty");
      return;
    }
    setIsOpen(true);
  };

  const handleSubmitDelete = async () => {
    try {
      if(!userToDelete){
        return;
      }

      const currIdOfDeleteUser = allUsers.find(
        (user) => user.email === userToDelete
      )?.id;

      await dispatch(deleteUser({ id: currIdOfDeleteUser ?? "" }));
      if (!serverError) {
        await getUsers();
        await clearDeleteField();
      }
    } catch (err) {
      // console.log(err);
    } finally {
      setIsOpen(false);
    }
  };

  const clearField = (): void => {
    setUserEmails([]);
    setError("");
    setInputValue("");
  };

  const clearDeleteField = (): void => {
    setUserToDelete(null);
    setErrorDelete("")
  };

  const handleSelectedChange = (_: React.SyntheticEvent, values: string[]) => {
    const { error } = validateEmail.validate(values.at(-1));
    setError(error?.message ?? "");

    if (!!error) values.pop();
    setUserEmails(values);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!!error) {
      setError("");
    }
    setInputValue(e?.target.value);
  };

  return (
    <SectionLayout headerText={"Users Management"}>
      <form onSubmit={handleSubmitAdd}>
        <div
          className={cn(scss["section-input"], scss["section-multiple-input"])}
        >
          <p className={scss["section-input__label"]}>Add Users:</p>
          <div className={scss["section-input__multiple"]}>
            <MultipleSelectWithBadges
              freeSolo
              expandSize
              options={[]}
              value={userEmails}
              inputError={!!error}
              inputTextError={error}
              handleChange={handleSelectedChange}
              inputValue={inputValue}
              handleInputChange={handleInputChange}
              renderInput={(params: AutocompleteRenderInputParams) => (
                <Input {...params} />
              )}
            />
          </div>
        </div>

        <SectionButtons handleCancel={clearField} resetBtnType="button" />
      </form>
      <form onSubmit={handleDeleteClick}>
        <div
          className={cn(scss["section-input"], scss["section-single-input"])}
        >
          <p className={scss["section-input__label"]}>Delete Users:</p>
          <div className={scss["section-input__delete"]}>
            <DropdownSingleSelect
              value={userToDelete}
              handleChange={(_, value) => {
                setErrorDelete("")
                return setUserToDelete(value ?? "");
              }}
              options={allUsers.map((user) => user.email)}
              inputError={!!errorDelete}
              inputTextError={errorDelete}
            />
          </div>
          <div className={scss["section-input-delete"]}>
            <DeletePopover
              isOpen={isOpen}
              handleCancel={handleCancelDelete}
              handleConfirm={handleSubmitDelete}
            />
          </div>
        </div>
        <SectionButtons submitText={"Delete"} handleCancel={clearDeleteField} />
      </form>
    </SectionLayout>
  );
};

export { UsersManagementSection };
