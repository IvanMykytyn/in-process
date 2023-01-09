import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Step, StepLabel, Stepper } from "@mui/material";
import { Moment } from "moment";
import "moment-timezone";

import css from "./BookingForm.module.scss";
import "./BookingForm.styles.scss";
import cn from "classnames";

import { FormFirstStep } from "./BookingFormSteps/FormFirstStep";
import { FormThirdStep } from "./BookingFormSteps/FormThirdStep";
import { FormSecondStep } from "./BookingFormSteps/FormSecondStep";

import { IBookingOneTime, IBookingRecurring, PatternType } from "models";
import { getNextDay, getValidDateFromString, PAGE_SIDEBAR_LIMIT } from "utils";
import { useAppDispatch, useAppSelector } from "hooks";
import {
  bookingActions,
  getAllOwnBookings,
  resetIsSuccess,
  selectBooking,
  selectRooms,
} from "store";
import { userService } from "services";
import { getDateFromParams } from "./BookingFormSteps/helpers";

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
  "Enter Information about this Meeting",
  "Select Date and Time",
  "Select Room",
];

const BookingFormPage: FC = () => {
  const [params, _] = useSearchParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { rooms } = useAppSelector(selectRooms);
  const { isSuccess, isEditing, editingBookingId, page } =
    useAppSelector(selectBooking);

  const defaultStartDate = useMemo(
    () => getValidDateFromString(params.get("date") ?? ""),
    [params]
  );

  const defaultStartTime = useMemo(
    () => getDateFromParams(params, defaultStartDate, isEditing),
    [params, defaultStartDate, isEditing]
  );

  const defaultEndDate = useMemo(
    () => getValidDateFromString(params.get("end") ?? ""),
    [params]
  );

  const defaultEndTime = useMemo(
    () => getDateFromParams(params, defaultEndDate, isEditing, 60),
    [params, defaultEndDate, isEditing]
  );

  const [allUsers, setAllUsers] = useState<
    Array<{ email: string; id: string }>
  >([]);

  const paramUsers = params.get("users");

  const initialValues: ValuesType = {
    name: params.get("name") ?? "",
    description: params.get("description") ?? "",
    users: !!paramUsers
      ? allUsers
          .filter((user) => paramUsers.split(",").includes(user.email))
          .map((user) => user.id)
      : [],
    pattern: {
      kind: "EVERY_N_DAYS",
      days: 1,
    },
    startTime: defaultStartTime,
    endTime: defaultEndTime,
    startDate: defaultStartTime.clone(),
    endDate: getNextDay(defaultStartTime.clone()),
    roomId: (parseInt(params.get("roomId") ?? "") || rooms[0]?.id) ?? 2,
    isRecurring: false,
  };

  const [errors, setErrors] = useState<ErrorsType>({});

  const [activeStep, setActiveStep] = useState<number>(0);
  const [values, setValues] = useState<ValuesType>(initialValues);

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
  }, []);

  const handleNext = useCallback(() => {
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
  }, []);

  const handleCancelEdit = useCallback(() => {
    dispatch(bookingActions.resetEditingId());
    navigate(-1);
  }, [dispatch, navigate]);

  const handleBookingFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (Object.keys(errors).length === 0) {
        if (isEditing) {
          const booking = getOneTimeBooking(values);
          await dispatch(
            bookingActions.oneTimePut({
              ...booking,
              usersIds: booking.users,
              id: editingBookingId,
            })
          );
        } else if (!values.isRecurring) {
          const booking = getOneTimeBooking(values);
          await dispatch(bookingActions.oneTimePost({ booking }));
        } else {
          const booking = getRecurringBooking(values);
          await dispatch(bookingActions.recPost({ booking }));
        }

        await dispatch(getAllOwnBookings({ page, limit: PAGE_SIDEBAR_LIMIT, showSkeleton: true }));
      }
    } catch (error) {
      // console.log(error);
    }
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

  useEffect(() => {
    if (isSuccess) {
      navigate(-1);
      dispatch(resetIsSuccess());
    }
  }, [dispatch, navigate, isSuccess]);

  const buildFormStepComponent = useMemo(
    () => buildStep(activeStep),
    [activeStep]
  );

  const formStepComponent = useCallback(
    () =>
      buildFormStepComponent({
        activeStep,
        handleBack,
        handleNext,
        handleCancelEdit,
        values,
        setValues,
        errors,
        setErrors,
        isEditing,
        allUsers,
      }),
    [
      activeStep,
      allUsers,
      buildFormStepComponent,
      errors,
      handleBack,
      handleCancelEdit,
      handleNext,
      isEditing,
      values,
    ]
  );

  return (
    <form className={css.booking} onSubmit={handleBookingFormSubmit}>
      <div className={"stepper"}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label} className={cn({ isActive: activeStep <= index })}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div className={css["stepper-form"]}>{formStepComponent()}</div>
    </form>
  );
};

export { BookingFormPage };

export interface BuildStepProps {
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
  handleCancelEdit: () => void;
  values: ValuesType;
  setValues: React.Dispatch<React.SetStateAction<ValuesType>>;
  errors: ErrorsType;
  setErrors: React.Dispatch<React.SetStateAction<ErrorsType>>;
  isEditing: boolean;
  allUsers: Array<{ email: string; id: string }>;
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
        return <FormFirstStep {...props} />;
    }
  };
};

const getOneTimeBooking = (values: ValuesType): IBookingOneTime => {
  const { name, description, roomId, users } = values;

  let dateMoment = values.startDate.clone();
  let startTimeMoment = values.startTime.clone();
  let endTimeMoment = values.endTime.clone();

  dateMoment = dateMoment.add(2, "hours");

  const date = dateMoment.toISOString(false).slice(0, 10);

  const startTime = startTimeMoment.toISOString().slice(10);
  const endTime = endTimeMoment.toISOString().slice(10);

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

  const since = values.startDate.clone().add(2, "hours").toISOString();
  const until = values.endDate.clone().add(2, "hours").toISOString();
  const start = values.startTime.clone().add(-2, "hours").format("HH:mm");
  const end = values.endTime.clone().add(-2, "hours").format("HH:mm");

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
