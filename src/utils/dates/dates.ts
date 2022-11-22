import moment, {Moment} from 'moment';
import 'moment-timezone';
import 'moment/locale/en-gb';
moment.locale('en-gb');

export const getDate = (date: Moment) => {
  const year = date.year();
  const month = date.format('MMMM');
  const day = date.date();
  const hour = date.hour();
  const minutes = date.minutes();

  return { month, day, year, hour, minutes };
};

export const getPreviousDay = (currentDate: Moment) => {
  return currentDate.add(-1, 'days');
};

export const getNextDay = (currentDate: Moment) => {
  return currentDate.add(1, 'days');
};

export const getDiffInMinutes = (startDate: Moment, endDate: Moment): number => {
  return endDate.diff(startDate, 'minutes');
};

export const getTimeFromDate = (currentDate: Moment): string => {
  const format = 'HH:mm';
  return currentDate.format(format);
};

export const getFullDateRange = (start: Moment, end: Moment) => {
  return `${start.format('LLLL')} - ${getTimeFromDate(end)}`;
};
