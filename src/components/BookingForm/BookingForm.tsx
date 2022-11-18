import { FC, useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import css from './BookingForm.module.scss';
import './BookingForm.styles.scss';
import cn from 'classnames';

import {
  Badge,
  Button,
  Input,
  MultipleSelectWithBadges,
  TimePicker,
  DatePicker,
} from 'components';
import {
  AutocompleteRenderInputParams,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from '@mui/material';
import { getUsersRequest } from 'services';
import moment, { Moment } from 'moment';
import { BookingFormContent } from './BookingFormContent';

const BookingForm: FC = () => {
  const navigate = useNavigate();
  //   const { roomId, date } = useParams();

  const [users, setUsers] = useState<string[]>([]);

  const getUsers = useCallback(async () => {
    const response = await getUsersRequest();
    const usersData = response.data.map((user) => user.email);
    setUsers(usersData);
  }, [setUsers]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const getNavigate = () => {
    navigate(-1);
  };

  const { register, handleSubmit, reset } = useForm();

  const [members, setMembers] = useState<Array<string>>([]);

  const submit = async (event: any) => {
    try {
      event = await { ...event, members };
      console.log(event);
      reset();
    } catch (err) {
      console.log(err);
    }
  };
  console.log({ ...register('startTime', { required: true }) });
  const steps = [
    'Enter Information about this Meeting',
    'Select Date and Time',
    'Select Room',
  ];

  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className={css.booking}>
      <div className={'stepper'}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label} className={cn({ isActive: activeStep <= index })}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <BookingFormContent activeStep={activeStep} setActiveStep={setActiveStep} />
    </div>
  );
};

export { BookingForm };
