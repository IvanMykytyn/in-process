import { FC, useCallback, useState } from "react";

import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

import { SectionLayout } from "./SectionLayout";
import { SectionInput } from "./SectionInput";
import { SectionButtons } from "./SectionButtons";

import { deleteAvatar, getMe, selectUser, setAvatar, updateMe } from "store";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { UserInterface, UserFields } from "models";
import { getFullName, validateName } from "utils";

// styles
import scss from "./settings.module.scss";

// icons
import { close, edit, exit, user as avatar } from "assets/images/icons";
import { DeletePopover } from "components";

const PersonalInfoValidator = Joi.object({
  firstName: validateName,
  lastName: validateName,
});

const PersonalInformationSection: FC = () => {
  const { user } = useAppSelector(selectUser);
  const { firstName, lastName, email, avatar_url } =
    user || ({} as UserInterface);

  const fullName = getFullName(firstName, lastName);
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { firstName, lastName },
    resolver: joiResolver(PersonalInfoValidator),
    mode: "onSubmit",
  });

  const submit = async ({ firstName, lastName }: UserFields) => {
    try {
      await dispatch(updateMe({ firstName, lastName }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleCancel = () => {
    reset();
  };

  const AvatarDeleteOpenPopover = () => {
    setIsOpen(true);
  };
  const handleSubmitDelete = () => {
    dispatch(deleteAvatar());
    dispatch(getMe());
  };
  const handleCancelDelete = () => {
    setIsOpen(false);
  };

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      try {
        const formData = new FormData();
        formData.append("file", acceptedFiles[0]);
        await dispatch(setAvatar(formData));
        await dispatch(getMe());
      } catch (error) {}
    },
    [dispatch]
  );

  const onError = useCallback((err: Error) => {
    console.log(err);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [".jpeg", ".png"],
    },
    onDrop,
    onError,
  });

  return (
    <SectionLayout headerText={"Personal Information"}>
      <form
        className={scss["settings__section-body"]}
        onSubmit={handleSubmit(submit)}
      >
        <div className={scss["section-avatar"]}>
          <div className={scss["section-avatar__wrapper"]}>
            <img
              src={avatar_url ?? avatar}
              className={scss["section-avatar__img"]}
              alt="avatar"
            />
            <div
              className={scss["avatar-delete"]}
              onClick={AvatarDeleteOpenPopover}
            >
              <img src={close} alt="delete" />
            </div>
            <div {...getRootProps({ className: scss["avatar-edit"] })}>
              <input {...getInputProps()} />
              <img src={edit} alt="edit" />
            </div>

            <div className={scss["avatar-delete-popover"]}>
              <DeletePopover
                isOpen={isOpen}
                handleCancel={handleCancelDelete}
                handleConfirm={handleSubmitDelete}
              />
            </div>
          </div>
          <div className={scss["section__user-details"]}>
            <h3>{fullName ?? ""}</h3>
            <p>{email ?? ""}</p>
          </div>
        </div>

        <SectionInput
          defaultValue={firstName}
          label={"First Name"}
          type={"text"}
          {...register("firstName")}
          error={!!errors.firstName}
          errorText={errors.firstName?.message}
        />

        <SectionInput
          defaultValue={lastName}
          label={"Last Name"}
          type={"text"}
          {...register("lastName")}
          error={!!errors.lastName}
          errorText={errors.lastName?.message}
        />

        <SectionButtons handleCancel={handleCancel} />
      </form>
    </SectionLayout>
  );
};

export { PersonalInformationSection };
