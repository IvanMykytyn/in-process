import React, { FC } from "react";
import { AutocompleteRenderInputParams, TextField } from "@mui/material";
import { BuildStepProps, ErrorsType, ValuesType } from "../BookingFormPage";

import css from "../BookingForm.module.scss";
import "../BookingForm.styles.scss";
import cn from "classnames";

import { Input } from "components/Input/Input";
import { MultipleSelectWithBadges } from "components/MultipleSelectWithBadges/MultipleSelectWithBadges";
import { Button } from "components/Button/Button";
import { useSearchParams } from "react-router-dom";

const FormFirstStep: FC<BuildStepProps> = ({
  handleNext,
  handleCancelEdit,
  values,
  setValues,
  errors,
  setErrors,
  isEditing,
  allUsers,
}) => {
  const [params, _] = useSearchParams();

  const paramUsers = params.get("users");
  const defaultUsers = !!paramUsers ? paramUsers.split(',') : []

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    delete errors[e.target.name];
  };

  const handleMembersChange = (e: React.SyntheticEvent, members: string[]) => {
    setValues({
      ...values,
      users: allUsers
        .filter((user) => members.includes(user.email))
        .map((user) => user.id),
    });
    delete errors["users"];
  };

  const handleNextStage = () => {
    let isValid = false;
    let errorsObj = isValidFirstStep(values);

    if (Object.keys(errorsObj).length === 0) {
      isValid = true;
    } else {
      setErrors((prev) => ({ ...prev, ...errorsObj }));
    }

    if (isValid) {
      handleNext();
    }
  };

  return (
    <>
      <div className={cn(css["step-form"], css["first-step-form"])}>
        <label
          data-label={"Title of the Meeting"}
          className={cn(css.booking__label)}
        >
          <Input
            type={"text"}
            label={"Title"}
            value={values.name}
            name={"name"}
            onChange={handleInputChange}
            fullWidth={true}
            error={!!errors?.name}
            errorText={errors.name}
          />
        </label>
        <label
          data-label={"Description of the Meeting"}
          className={cn(css.booking__label, "booking__label--description")}
        >
          <Input
            multiline
            minRows={4}
            maxRows={8}
            type={"text"}
            label={"Meeting Description"}
            name={"description"}
            value={values.description}
            onChange={handleInputChange}
            fullWidth={true}
            error={!!errors?.description}
            errorText={errors.description}
          />
        </label>
        <label
          data-label={"Select Members"}
          className={cn(css.booking__label, css["booking__label--select"])}
        >
          <MultipleSelectWithBadges
            options={allUsers.map((user) => user.email)}
            handleChange={handleMembersChange}
            label={"Select Members"}
            inputError={!!errors?.users}
            inputTextError={errors.users}
            defaultValue={defaultUsers}
            renderInput={(params: AutocompleteRenderInputParams) => (
              <TextField {...params} />
            )}
          />
        </label>
      </div>
      <div className={css.buttons}>
        {isEditing && (
          <Button
            type={"button"}
            onClick={handleCancelEdit}
            variant="cancel-edit"
          >
            Cancel Editing
          </Button>
        )}
        <Button type={"submit"} onClick={handleNextStage}>
          Next
        </Button>
      </div>
    </>
  );
};

export { FormFirstStep };

const isValidFirstStep = (values: ValuesType) => {
  let errors: ErrorsType = {};
  if (!values.name) {
    errors.name = "This Field is required";
  }else if(values.name.length > 200){
    errors.name = "The maximum length is 200 characters"
  }

  if(values.description.length > 200){
    errors.description = "The maximum length is 1500 characters"
  }

  

  return errors;
};
