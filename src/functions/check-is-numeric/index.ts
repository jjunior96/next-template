/**
 *
 * @param value string
 * @returns boolean
 */
export const checkIsNumeric = (value: string): boolean => {
  return /^-?\d+$/.test(value);
};
