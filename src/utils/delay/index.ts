export const delay = (milliseconds: number, fn: () => void) => {
  setTimeout(() => {
    fn();
  }, milliseconds);
};
