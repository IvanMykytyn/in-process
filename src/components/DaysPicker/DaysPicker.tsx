import { FC } from 'react';
import css from './days-picker.module.scss';
import cn from 'classnames';

interface DaysPickerProps {
  values: number[];
  setValues: React.Dispatch<React.SetStateAction<number[]>>;
}
const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const DaysPicker: FC<DaysPickerProps> = ({ values, setValues, ...rest }) => {
  const handleToggleDay = (day: number) => {
    setValues((values) => {
      const dayIndex = values.indexOf(day);
      if (dayIndex < 0) {
        return [...values, day];
      }
      return values.filter((value) => value !== day);
    });
  };

  console.log(values);

  return (
    <div className={css['days-picker']}>
      {days.map((day, currentDayIndex) => {
        const isActive = values.includes(currentDayIndex);
        return (
          <div
            className={cn(css.day, {
              [css.activeDay]: isActive,
            })}
            onClick={() => handleToggleDay(currentDayIndex)}
          >
            {day}
          </div>
        );
      })}
    </div>
  );
};

export { DaysPicker };
