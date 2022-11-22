import React, { FC, useState } from 'react';

import { AutocompleteRenderInputParams } from '@mui/material';

import { Input, MultipleSelectWithBadges } from 'components';
import { SectionLayout } from './SectionLayout';
import { SectionButtons } from './SectionButtons';

import { addUsers, selectUser} from 'store';
import {useAppDispatch, useAppSelector } from '../../../hooks';
import { validateAddUserEmail, validateArrayOfEmails } from 'utils';

// styles
import cn from 'classnames';
import scss from './settings.module.scss';

const UsersManagementSection: FC = () => {
  const { isLoading, error: serverError } = useAppSelector(selectUser);
  const [userEmails, setUserEmails] = useState<Array<string>>([]);
  const [error, setError] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = validateArrayOfEmails.validate(userEmails);

      if (!!error) {
        setError(error?.message ?? '');
        return;
      }

      await dispatch(addUsers(userEmails));
      if (!serverError) clearField();
    } catch (err) {
      console.log(err);
    }
  };

  const clearField = (): void => {
    setUserEmails([]);
    setError('');
  };

  const handleSelectedChange = (_: React.SyntheticEvent, values: string[]) => {
    const { error } = validateAddUserEmail.validate(values.at(-1));
    setError(error?.message ?? '');

    if (!!error) values.pop();
    setUserEmails(values);
  };

  return (
    <SectionLayout headerText={'Users Management'} onSubmit={handleSubmit}>
      <div className={cn(scss['section-input'], scss['section-multiple-input'])}>
        <p className={scss['section-input__label']}>Add Users:</p>
        <div className={scss['section-input__multiple']}>
          <MultipleSelectWithBadges
            freeSolo
            expandSize
            options={[]}
            value={userEmails}
            inputError={!!error}
            inputTextError={error}
            handleChange={handleSelectedChange}
            renderInput={(params: AutocompleteRenderInputParams) => (
              <Input {...params} />
            )}
          />
        </div>
      </div>

      <SectionButtons isLoading={isLoading} handleCancel={clearField} />
    </SectionLayout>
  );
};

export { UsersManagementSection };
