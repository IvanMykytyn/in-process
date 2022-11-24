import { FC, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Step, StepLabel, Stepper } from '@mui/material';
import moment, { Moment } from 'moment';
import 'moment-timezone';

import css from './BookingForm.module.scss';
import './BookingForm.styles.scss';
import cn from 'classnames';

import { FormFirstStep } from './BookingFormSteps/FormFirstStep';
import { FormThirdStep } from './BookingFormSteps/FormThirdStep';
import { FormSecondStep } from './BookingFormSteps/FormSecondStep';

import { IBookingOneTime, IBookingRecurring, PatternType } from 'models';
import { getNextDay } from 'utils';
import { useAppDispatch, useAppSelector } from 'hooks';
import { bookingActions, selectRooms } from 'store';

export interface ValuesType {
  name: string;
  description: string;
  users: string[];
  startTime: Moment;
  endTime: Moment;
  startDate: Moment;
  pattern: PatternType;
  endDate: Moment;
  roomId: number;
  isRecurring: boolean;
}
export interface ErrorsType {
  [key: string]: string;
}
const steps = [
  'Enter Information about this Meeting',
  'Select Date and Time',
  'Select Room',
];

const BookingFormPage: FC = () => {
  const [params, _] = useSearchParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const paramsDate = params.get('date');
  const isValidParamsDate = !!paramsDate && moment(paramsDate).isValid();
  const defaultParamsDate = isValidParamsDate ? moment(paramsDate) : moment();
  const { rooms } = useAppSelector(selectRooms);

  const initialValues: ValuesType = {
    name: '',
    description: '',
    users: [],
    pattern: {
      kind: 'EVERY_N_DAYS',
      days: 1,
    },
    startTime: moment('2023-08-18T00:00:00'),
    endTime: moment('2023-08-18T00:00:00'),
    startDate: defaultParamsDate,
    endDate: getNextDay(defaultParamsDate.clone()),
    roomId: (parseInt(params.get('roomId') ?? '') || rooms[0]?.id) ?? 2,
    isRecurring: false,
  };

  const [errors, setErrors] = useState<ErrorsType>({});

  const [activeStep, setActiveStep] = useState<number>(0);
  const [values, setValues] = useState<ValuesType>(initialValues);

  const handleBack = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
  };

  const handleBookingFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (Object.keys(errors).length === 0) {
        if (!values.isRecurring) {
          // TODO change redirect
          const booking = getOneTimeBooking(values);
          await dispatch(bookingActions.oneTimePost({ booking }));
          navigate(-1);
        } else {
          const booking = getRecurringBooking(values);
          await dispatch(bookingActions.recPost({ booking }));
          navigate(-1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={css.booking} onSubmit={handleBookingFormSubmit}>
      <div className={'stepper'}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label} className={cn({ isActive: activeStep <= index })}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div className={css['stepper-form']}>
        {buildStep(activeStep)({
          activeStep,
          handleBack,
          handleNext,
          values,
          setValues,
          errors,
          setErrors,
        })}
      </div>
    </form>
  );
};

export { BookingFormPage };

export interface BuildStepProps {
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
  values: ValuesType;
  setValues: React.Dispatch<React.SetStateAction<ValuesType>>;
  errors: ErrorsType;
  setErrors: React.Dispatch<React.SetStateAction<ErrorsType>>;
}
const buildStep = (activeStep: number) => {
  return ({ ...props }: BuildStepProps) => {
    switch (activeStep) {
      case 0:
        return <FormFirstStep {...props} />;
      case 1:
        return <FormSecondStep {...props} />;
      case 2:
        return <FormThirdStep {...props} />;

      default:
        break;
    }
  };
};

const getOneTimeBooking = (values: ValuesType): IBookingOneTime => {
  const { name, description, roomId, users } = values;

  const date = values.startDate.add(2, 'hours').toISOString(false).slice(0, 10);
  const startTime = values.startTime.add(1, 'hours').toISOString().slice(10);
  const endTime = values.endTime.add(1, 'hours').toISOString().slice(10);

  const start = date + startTime;
  const end = date + endTime;

  return {
    start,
    end,
    name,
    description,
    roomId: roomId.toString(),
    users,
  };
};

const getRecurringBooking = (values: ValuesType): IBookingRecurring => {
  const { name, description, roomId, users, pattern } = values;

  const since = values.startDate.add(2, 'hours').toISOString();
  const until = values.endDate.add(2, 'hours').toISOString();
  const start = values.startTime.add(-2, 'hours').format('HH:mm');
  const end = values.endTime.add(-2, 'hours').format('HH:mm');

  return {
    since,
    until,
    start,
    end,
    name,
    pattern,
    description,
    roomId: roomId.toString(),
    users,
  };
};
