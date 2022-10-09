// eslint-disable-next-line @typescript-eslint/ban-types
export const checkObjectIsEmpty = (object: object) => {
  return Object.keys(object).length === 0;
};
