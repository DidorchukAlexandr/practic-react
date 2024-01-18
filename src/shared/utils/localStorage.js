export const getInitialValue = (key, initialValue) => {
  const resalt = JSON.parse(localStorage.getItem(key));
  return resalt || initialValue;
};
