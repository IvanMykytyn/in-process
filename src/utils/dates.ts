import moment, { Moment } from 'moment';
import 'moment/min/locales';
moment.locale();

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
