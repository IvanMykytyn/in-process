import React, { FC, useCallback, useMemo, useState } from 'react';
import moment, { Moment } from 'moment';

import { SelectChangeEvent } from '@mui/material';

import css from '../BookingForm.module.scss';
import '../BookingForm.styles.scss';
import cn from 'classnames';

import { BuildStepProps, ErrorsType, ValuesType } from '../BookingFormPage';
import {
  Input,
  DatePicker,
  TimePicker,
  Checkbox,
  Select,
  DaysPicker,
  Button,
} from 'components';

import {
  DaysOfEveryNWeeksType,
  EveryNDayType,
  PatternType,
  XDayOfEveryNMonthType,
} from 'models';

import { getDiffInMinutes } from 'utils';

const selectRepeatingRange = ['day', 'week', 'month', 'year'];

const FormSecondStep: FC<BuildStepProps> = ({
  handleBack,
  handleNext,
  values,
  setValues,
  errors,
  setErrors,
}) => {

  const { currDays, currGeneralCount, currSelect } = useMemo(
    () => getDefaultPatternValues(values.pattern),
    [values.pattern]
  );

  const [select, setSelect] = useState<string>(currSelect);
  const [days, setDays] = useState<number[]>(currDays);
  const [generalCount, setGeneralCount] = useState<number>(currGeneralCount);

  const handleDateChange = (inputName: string) => {
    return (newValue: Moment | null) => {
      setValues({
        ...values,
        [inputName]: newValue,
      });
      delete errors[inputName];
    };
  };

  const handleToggle = () => {
    setValues((prevValues) => ({
      ...prevValues,
      isRecurring: !prevValues.isRecurring,
    }));
    delete errors['generalCount'];
    delete errors['endDate'];
  };

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setGeneralCount(value);
    delete errors['generalCount'];
  };

  const handleRangeChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);
  };

  const handleNextStage = () => {
    let pattern: PatternType = values.pattern;

    let isValid = false;
    let errorsObj = isValidSecondStep(values, values.isRecurring);

    if (values.isRecurring) {
      switch (select) {
        case 'day':
          pattern = {
            kind: 'EVERY_N_DAYS',
            days: generalCount,
          };
          errorsObj = { ...errorsObj, ...isValidSelectDay(pattern) };

          break;
        case 'week':
          pattern = {
            kind: 'DAYS_OF_EVERY_N_WEEKS',
            days: days,
            weeks: generalCount,
          };
          errorsObj = { ...errorsObj, ...isValidSelectWeek(pattern) };

          break;
        case 'month':
          pattern = {
            kind: 'X_DAY_OF_EVERY_N_MONTH',
            days: values.startDate?.date() || 0,
            month: generalCount,
          };

          errorsObj = { ...errorsObj, ...isValidSelectMonth(pattern) };
          break;
        case 'year':
          pattern = {
            kind: 'X_DAY_OF_EVERY_N_MONTH',
            days: values.startDate?.date() || 0,
            month: generalCount * 12,
          };

          errorsObj = { ...errorsObj, ...isValidSelectMonth(pattern) };
          break;
      }
    }

    if (Object.keys(errorsObj).length === 0) {
      isValid = true;
    } else {
      setErrors((prev) => ({ ...prev, ...errorsObj }));
    }

    if (isValid) {
      setValues({ ...values, pattern });
      handleNext();
    }
  };

  return (
    <>
      <div className={cn(css['step-form'], css['second-step-form'])}>
        <div className={css['second-step-form__left-side']}>
          <div className={css['date-picker-fields']}>
            <label data-label={'Select a date'} className={css.booking__label}>
              <DatePicker
                date={values.startDate}
                handleChange={handleDateChange('startDate')}
                error={!!errors?.startDate}
                errorText={errors.startDate}
              />
            </label>
            <label data-label={'Start Time'} className={css.booking__label}>
              <TimePicker
                time={values.startTime}
                handleChange={handleDateChange('startTime')}
                error={!!errors?.startTime}
                errorText={errors.startTime}
              />
            </label>
            <label data-label={'End Time'} className={css.booking__label}>
              <TimePicker
                time={values.endTime}
                handleChange={handleDateChange('endTime')}
                error={!!errors?.endTime}
                errorText={errors.endTime}
              />
            </label>
          </div>

          <div className={css['form-checkbox']}>
            <Checkbox circled checked={values.isRecurring} onChange={handleToggle} />
            <p role={'button'} onClick={handleToggle}>
              Recurring Booking
            </p>
          </div>
        </div>
        <div
          className={cn(css['second-step-form__right-side'], {
            [css['recurring-booking']]: values.isRecurring,
          })}
        >
          <div
            data-label={'Repeat every: '}
            className={cn(css['repeat-range'], css.booking__label)}
          >
            <div className={'second-step-form__count-input'}>
              <Input
                fullWidth
                type={'number'}
                inputProps={{ min: 1, max: 150 }}
                value={generalCount}
                onChange={handleCountChange}
                error={!!errors?.generalCount}
              />
            </div>
            <Select
              value={select}
              handleChange={handleRangeChange}
              options={selectRepeatingRange}
              count={generalCount}
            />
            {!!errors?.generalCount && (
              <span className={css['repeat-range__error']}>
                {errors?.generalCount}
              </span>
            )}
          </div>

          {select === 'week' && <DaysPicker values={days} setValues={setDays} />}
          <label
            data-label={'Ends on '}
            className={`${css.booking__label} ${css['label__end-date']}`}
          >
            <DatePicker
              date={values.endDate}
              handleChange={handleDateChange('endDate')}
              error={!!errors?.endDate}
              errorText={errors.endDate}
            />
          </label>
        </div>
      </div>
      <div className={css.buttons}>
        <Button type={'button'} onClick={handleBack}>
          Back
        </Button>
        <Button type={'button'} onClick={handleNextStage}>
          Next
        </Button>
      </div>
    </>
  );
};

export { FormSecondStep };

const isValidSecondStep = (values: ValuesType, isRecurring: boolean) => {
  let errors: ErrorsType = {};

  if (!values.startDate) {
    errors.startDate = 'This Field is required';
  } else if (!values.startDate.isValid()) {
    errors.startDate = 'Invalid date format';
  } else if (
    !(values.startDate.isAfter() || values.startDate.isSame(moment(), 'day'))
  ) {
    errors.startDate = 'The date cannot be less than today';
  }

  if (isRecurring) {
    if (!values.endDate) {
      errors.endDate = 'This Field is required';
    } else if (!values.endDate.isValid()) {
      errors.endDate = 'Invalid date format';
    } else if (getDiffInMinutes(values.startDate, values.endDate) <= 0) {
      errors.endDate = 'The end date cannot be less than start date';
    }
  }
  if (!values.startTime) {
    errors.startTime = 'This Field is required';
  } else if (!values.startTime.isValid()) {
    errors.startTime = 'Invalid time format';
  }

  if (!values.endTime) {
    errors.endTime = 'This Field is required';
  } else if (!values.endTime.isValid()) {
    errors.endTime = 'Invalid time format';
  } else if (getDiffInMinutes(values.startTime, values.endTime) <= 0) {
    errors.endTime = 'The end time cannot be less than start time';
  } else if (getDiffInMinutes(values.startTime, values.endTime) < 15) {
    errors.endTime = 'Minimum Duration is 15 minutes';
  }

  return errors;
};

const isValidSelectDay = (pattern: EveryNDayType) => {
  let errors: ErrorsType = {};
  if (pattern.days < 0) {
    errors.generalCount = 'Value must be greater than 0';
  } else if (pattern.days > 365) {
    errors.generalCount = 'Value must be less than 365';
  }
  return errors;
};

const isValidSelectWeek = (pattern: DaysOfEveryNWeeksType) => {
  let errors: ErrorsType = {};
  if (pattern.weeks < 0) {
    errors.generalCount = 'Value must be greater than 0';
  } else if (pattern.weeks > 60) {
    errors.generalCount = 'Value must be less than 60';
  }
  return errors;
};

const isValidSelectMonth = (pattern: XDayOfEveryNMonthType) => {
  let errors: ErrorsType = {};
  if (pattern.days < 0) {
    errors.generalCount = 'Value must be greater than 0';
  } else if (pattern.month > 80) {
    errors.generalCount = 'Value must be less than 80';
  }
  return errors;
};

const getDefaultPatternValues = (pattern: PatternType) => {

  let currDays = [moment().day()];
  let currSelect = selectRepeatingRange[1];
  let currGeneralCount = 1;

  if (pattern.kind === 'DAYS_OF_EVERY_N_WEEKS') {
    currSelect = selectRepeatingRange[1];
    currDays = pattern.days;
    currGeneralCount = pattern.weeks;
  } else if (pattern.kind === 'EVERY_N_DAYS') {
    currSelect = selectRepeatingRange[0];
    currGeneralCount = pattern.days;
  } else if (pattern.kind === 'X_DAY_OF_EVERY_N_MONTH') {
    if (pattern.month % 12 === 0) {
      currSelect = selectRepeatingRange[3];
      currGeneralCount = pattern.month / 12;
    } else {
      currSelect = selectRepeatingRange[2];
      currGeneralCount = pattern.month;
    }
  }

  return {
    currDays,
    currSelect,
    currGeneralCount,
  };
};
