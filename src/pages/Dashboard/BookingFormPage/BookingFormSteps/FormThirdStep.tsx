import { FC, useCallback, useMemo } from "react";
import { BuildStepProps } from "../BookingFormPage";
import css from "../BookingForm.module.scss";
import "../BookingForm.styles.scss";
import cn from "classnames";

import { users as usersIcon } from "assets/images/icons";
import { Button } from "components/Button/Button";
import { BookingRoom } from "./BookingRoom";
import { staff } from "utils/tools/staff";
import { useAppSelector } from "hooks";
import { selectBooking } from "store";

const FormThirdStep: FC<BuildStepProps> = ({
  handleBack,
  handleCancelEdit,
  values,
  setValues,
  isEditing,
}) => {
  const { rooms } = useAppSelector((state) => state.rooms);
  const { isLoading } = useAppSelector(selectBooking);

  const handleChangeRoom = useCallback((id: number) => {
    setValues({ ...values, roomId: id });
  }, [setValues, values]);

  const bookingRooms = useMemo(() => {
    return rooms.map((room) => {
      const { id, name, floor, maxCapacity, equipments, roomImg } = room;
      return { id, name, floor, maxCapacity, equipments, roomImg };
    });
  }, [rooms]);

  const currentBookingRoom = useMemo(() => {
    return rooms.find((room) => room.id === values.roomId);
  }, [rooms, values.roomId]);

  const { description, name, floor, maxCapacity, equipments, roomImg } =
    currentBookingRoom || {};

  return (
    <div className={cn(css["third-step-form"])}>
      <div className={css["booking-room__left-side"]}>
        <div className={css.booking__image}>
          <img className={css["booking-img"]} src={roomImg} alt='room' />
          <div className={css["booking-room__capacity"]}>
            <img src={usersIcon} alt={"users-icon"} />
            <p>{maxCapacity} capacity</p>
          </div>
        </div>
        <div className={css.booking__info}>
          <h3 className={css["booking__room-name"]}>{name}</h3>
          <div>
            <p className={css.booking__description}>{description}</p>
          </div>
          <h4 className={css.booking__floor}>
            <span>{floor}</span>
            {(floor === 1 ? "st" : "nd") + " floor"}
          </h4>
          <ul className={cn(css.container__equipment)}>
            {staff.map((tool) => {
              if(equipments && equipments?.findIndex(inst => inst.id === tool.id) > -1){
                return  <img
                  key={tool.id}
                  src={tool.img}
                  alt={tool.alt}
                  title={tool.alt}
                  width={20}
                  height={20}
                />
              }
              return null
              }
            )}

          </ul>
        </div>
      </div>
      <div className={css["booking-room__right-side"]}>
        <div className={css["rooms-picker-wrapper"]}>
          <div className={css["rooms-picker"]}>
            {bookingRooms.map((room) => (
              <BookingRoom
                {...room}
                key={room.id}
                handleChange={handleChangeRoom}
                isActive={values.roomId === room.id}
              />
            ))}
          </div>
        </div>
        <div
          className={cn(
            { "third-step-editing-buttons": isEditing },
            css.buttons
          )}
        >
          {isEditing && (
            <Button
              type={"button"}
              onClick={handleCancelEdit}
              variant='cancel-edit'
            >
              Cancel Editing
            </Button>
          )}
          <Button type={"button"} disabled={isLoading} onClick={handleBack}>
            Back
          </Button>
          <Button type={"submit"} disabled={isLoading}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export { FormThirdStep };
