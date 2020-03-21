export const saveItem = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const clearStorage = () => {
  localStorage.clear();
};
