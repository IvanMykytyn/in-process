import moment from 'moment';

const truncate = (str: string, maxlength: number): string => {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;
};

const colorFromString = (str: string, transparency: string = 'bf'): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).slice(-2);
  }

  return color + transparency;
};

const getInitials = (firstName: string, lastName?: string): string => {
  if (firstName && lastName) {
    return `${Array.from(firstName)[0]}${Array.from(lastName)[0]}`.toUpperCase();
  }
  if (firstName) {
    return Array.from(firstName)[0].toUpperCase();
  }
  return '';
};

const getFullName = (firstName: string, lastName: string) => {
  return `${firstName ?? ''} ${lastName ?? ''}`;
};

const getUrlId = (path: string, replacePart: string) => {
  return path.replace(replacePart, '');
};

const formatErrorDate = (message: string): string => {
  // Overlapping on dates 2022-11-24 15:25:00+00,2022-11-24 18:35:00+00
  const dates = message.replace('Overlapping on dates ', '').split(',');
  const formattedDates = dates.map((date) => {
    return moment(date).format('llll');
  });
  return 'Overlapping on dates ' + formattedDates.join(', ');
};

export {
  truncate,
  colorFromString,
  getInitials,
  getFullName,
  getUrlId,
  formatErrorDate,
};
