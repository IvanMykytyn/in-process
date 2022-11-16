export const setToLocalStorage = (nameOfItem: string, item: unknown): void => {
  localStorage.setItem(nameOfItem, JSON.stringify(item));
};

export const getFromLocalStorage = (nameOfItem: string): any => {
  const dataFromStorage = localStorage.getItem(nameOfItem);

  return dataFromStorage ? JSON.parse(dataFromStorage) : null;
};

export const removeFromLocalStorage = (nameOfItem: string): void => {
  localStorage.removeItem(nameOfItem);
};
