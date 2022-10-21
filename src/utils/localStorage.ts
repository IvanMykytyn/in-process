import { User } from 'models';

export const addUserToLocalStorage = (userData: User): void => {
  localStorage.setItem('user', JSON.stringify(userData));
};

export const removeUserFromLocalStorage = (): void => {
  localStorage.removeItem('user');
};

export const getUserFromLocalStorage = (): User => {
  const userFromLocalStorage = localStorage.getItem('user');
  return userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;
};
