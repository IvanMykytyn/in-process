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

export { truncate, colorFromString, getInitials };
