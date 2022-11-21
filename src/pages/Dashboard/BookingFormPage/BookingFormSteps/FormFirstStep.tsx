import React, { FC, useState, useCallback, useEffect } from 'react';
import { BuildStepProps, ErrorsType, ValuesType } from '../BookingFormPage';
import css from '../BookingForm.module.scss';
import '../BookingForm.styles.scss';
import cn from 'classnames';
import { Input } from 'components/Input/Input';
import { MultipleSelectWithBadges } from 'components/MultipleSelectWithBadges/MultipleSelectWithBadges';
import { AutocompleteRenderInputParams, TextField } from '@mui/material';
import { Button } from 'components/Button/Button';
import { userService } from 'services';

const FormFirstStep: FC<BuildStepProps> = ({
  handleNext,
  values,
  setValues,
  errors,
  setErrors,
}) => {
  const [allUsers, setAllUsers] = useState<Array<{ email: string; id: string }>>([]);

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
    delete errors['users'];
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
      <div className={cn(css['step-form'], css['first-step-form'])}>
        <label
          data-label={'Title of the Meeting'}
          className={cn(css.booking__label)}
        >
          <Input
            type={'text'}
            label={'Title'}
            value={values.name}
            name={'name'}
            onChange={handleInputChange}
            fullWidth={true}
            error={!!errors?.name}
            errorText={errors.name}
          />
        </label>
        <label
          data-label={'Description of the Meeting'}
          className={cn(css.booking__label, 'booking__label--description')}
        >
          <Input
            multiline
            minRows={4}
            maxRows={8}
            type={'text'}
            label={'Meeting Description'}
            name={'description'}
            value={values.description}
            onChange={handleInputChange}
            fullWidth={true}
            error={!!errors?.description}
            errorText={errors.description}
          />
        </label>
        <label
          data-label={'Select Members'}
          className={cn(css.booking__label, css['booking__label--select'])}
        >
          <MultipleSelectWithBadges
            options={allUsers.map((user) => user.email)}
            handleChange={handleMembersChange}
            label={'Select Members'}
            inputError={!!errors?.users}
            inputTextError={errors.users}
            renderInput={(params: AutocompleteRenderInputParams) => (
              <TextField {...params} />
            )}
          />
        </label>
      </div>
      <div className={css.buttons}>
        <Button type={'button'} onClick={handleNextStage}>
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
    errors.name = 'This Field is required';
  }

  return errors;
};
