import React, { FC, useState, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import css from './BookingForm.module.scss';
import './BookingForm.styles.scss';
import cn from 'classnames';
import { Input } from 'components/Input/Input';
import { MultipleSelectWithBadges } from 'components/MultipleSelectWithBadges/MultipleSelectWithBadges';
import {
  AutocompleteRenderInputParams,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { getUsersRequest } from 'services';
import { DatePicker } from 'components/DatePicker/DatePicker';
import { TimePicker } from 'components/TimePicker/TimePicker';
import moment, { Moment } from 'moment';
import { Toggle } from 'components/Toggle/Toggle';
import { Checkbox } from 'components/Checkbox/Checkbox';
import { MainCalendar } from 'components/MainCalendar/MainCalendar';
import { users as usersIcon } from 'assets/images/icons';
import { Select } from 'components/Select/Select';
import { DaysPicker } from 'components/DaysPicker/DaysPicker';
import { Button } from 'components/Button/Button';
import { BookingRoom } from './BookingRoom';
import { staff } from 'utils/tools/staff';
import { useAppDispatch, useAppSelector } from 'hooks';
import { roomActions } from 'store/slices/room.slice';

type BookingFormContentProps = {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

const BookingFormContent: FC<BookingFormContentProps> = ({
  activeStep,
  setActiveStep,
}) => {
  const { register, handleSubmit, reset } = useForm();

  const { rooms } = useAppSelector((state) => state.rooms);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(roomActions.getAllRooms({ officeId: 2 }));
  }, []);

  const [users, setUsers] = useState<string[]>([]);
  const [members, setMembers] = useState<Array<string>>([]);

  const getUsers = useCallback(async () => {
    const response = await getUsersRequest();
    const usersData = response.data.map((user) => user.email);
    setUsers(usersData);
  }, [setUsers]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const [startTime, setStartTime] = useState<Moment | null>(
    moment(new Date('2023-08-22T00:00:00'))
  );
  const [date, setDate] = useState<Moment | null>(
    moment(new Date('2023-08-18T00:00:00'))
  );
  const [endDate, setEndDate] = useState<Moment | null>(
    moment(new Date('2023-08-22T00:00:00'))
  );
  const [endTime, setEndTime] = useState<Moment | null>(
    moment(new Date('2023-08-18T00:00:00'))
  );

  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled((prevValue) => !prevValue);
  };

  const handleChange = (newValue: Moment | null) => {
    setStartTime(newValue);
  };

  const handleChangeRoom = (id: number) => {
    setCurrentBookingRoomId(id);
  };

  const handleEndTimeChange = (newValue: Moment | null) => {
    setEndTime(newValue);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
  };

  const selectRepeatingRange = ['day', 'week', 'month', 'year'];
  const [select, setSelect] = useState<string>(selectRepeatingRange[1]);
  const [days, setDays] = useState<number[]>([2, 4]);

  const handleSelectChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);
  };

  const bookingRooms = rooms.map((room) => {
    const { id, name, floor, maxCapacity, equipments } = room;
    return { id, name, floor, maxCapacity, equipments };
  });

  console.log(rooms);
  
  const [currentBookingRoomId, setCurrentBookingRoomId] = useState<number>(2);

  const currentBookingRoom = rooms.find((room) => room.id === currentBookingRoomId);

  const { id, description, name, floor, maxCapacity, equipments } =
    currentBookingRoom || {};

  if (activeStep === 0) {
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
              {...register('title', { required: true })}
              fullWidth={true}
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
              {...register('description', { required: true })}
              fullWidth={true}
            />
          </label>
          <label className={cn(css.booking__label, css['booking__label--select'])}>
            <MultipleSelectWithBadges
              options={users}
              setSelectedOptions={setMembers}
              renderInput={(params: AutocompleteRenderInputParams) => (
                <TextField {...params} />
              )}
            />
          </label>
        </div>
        <div className={css.buttons}>
          <Button type={'button'} onClick={handleBack}>
            Back
          </Button>
          <Button type={'button'} onClick={handleNext}>
            Next
          </Button>
        </div>
      </>
    );
  }

  if (activeStep === 1) {
    return (
      <>
        <div className={cn(css['step-form'], css['second-step-form'])}>
          <div className={css['second-step-form__left-side']}>
            <div className={css['date-picker-fields']}>
              <label data-label={'Select a date'} className={css.booking__label}>
                <DatePicker date={date} setDate={setDate} />
              </label>
              <label data-label={'Start Time'} className={css.booking__label}>
                <TimePicker time={startTime} handleChange={handleChange} />
              </label>
              <label data-label={'End Time'} className={css.booking__label}>
                <TimePicker time={endTime} handleChange={handleEndTimeChange} />
              </label>
            </div>

            <div className={css['form-checkbox']}>
              <Checkbox circled checked={toggled} onChange={handleToggle} />
              <p role={'button'} onClick={handleToggle}>
                Recurring Booking
              </p>
            </div>
          </div>
          <div
            className={cn(css['second-step-form__right-side'], {
              [css['recurring-booking']]: toggled,
            })}
          >
            <div
              data-label={'Repeat every: '}
              className={cn(css['repeat-range'], css.booking__label)}
            >
              <div className={'second-step-form__count-input'}>
                <Input type={'number'} inputProps={{ min: 1, max: 31 }} fullWidth />
              </div>
              <Select
                value={select}
                handleChange={handleSelectChange}
                options={selectRepeatingRange}
              />
            </div>
            {select === 'week' && <DaysPicker values={days} setValues={setDays} />}
            <label
              data-label={'Ends on '}
              className={`${css.booking__label} ${css['label__end-date']}`}
            >
              <DatePicker date={endDate} setDate={setEndDate} />
            </label>
          </div>
        </div>
        <div className={css.buttons}>
          <Button type={'button'} onClick={handleBack}>
            Back
          </Button>
          <Button type={'button'} onClick={handleNext}>
            Next
          </Button>
        </div>
      </>
    );
  }
  if (activeStep === 2) {
    return (
      <div className={cn(css['third-step-form'])}>
        <div className={css.booking__wrap}>
          <div className={css.booking__image}>
            <img
              className={css['booking-img']}
              src={
                'https://images.squarespace-cdn.com/content/v1/540f5515e4b06c4e8629c108/1600932097980-NHBGP5WD2F7YIK8ZFHRA/conference-room-boardroom-business-setup.jpg?format=2500w'
              }
              alt="room"
            />
            <div className={css['booking-room__capacity']}>
              <img src={usersIcon} alt={'users-icon'} />
              <p>{maxCapacity} capacity</p>
            </div>
          </div>
          <div className={css.booking__info}>
            <h3 className={css['booking__room-name']}>{name}</h3>
            <div>
              <p className={css.booking__description}>{description}</p>
            </div>
            <h4 className={css.booking__floor}>
              <span>{floor}</span>
              {(floor === 1 ? 'st' : 'nd') + ' floor'}
            </h4>
            <ul className={cn(css.container__equipment)}>
              {staff.map((tool) =>
                equipments?.map((inst) =>
                  inst.id === tool.id ? (
                    <li key={tool.id}>
                      {<img src={tool.img} alt={tool.alt} width={20} height={20} />}
                    </li>
                  ) : (
                    <></>
                  )
                )
              )}
            </ul>
          </div>
        </div>
        <div className={css['booking-room__right-side']}>
          <div className={css['rooms-picker-wrapper']}>
            <div className={css['rooms-picker']}>
              {bookingRooms.map((room) => {
                return (
                  <BookingRoom
                    key={room.id}
                    {...room}
                    handleChange={handleChangeRoom}
                    isActive={currentBookingRoomId === room.id}
                  />
                );
              })}
            </div>
          </div>
          <div className={css.buttons}>
            <Button type={'button'} onClick={handleBack}>
              Back
            </Button>
            <Button type={'button'} onClick={handleNext}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

export { BookingFormContent };
