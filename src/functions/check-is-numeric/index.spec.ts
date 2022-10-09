import { checkIsNumeric } from '.';

describe('checkIsNumeric', () => {
  it('should return true when a string passed contains numbers', () => {
    const stringParams = '123';

    expect(checkIsNumeric(stringParams)).toEqual(true);
  });

  it('should return false when a string passed not contains numbers', () => {
    const stringParams = 'asasasas';

    expect(checkIsNumeric(stringParams)).toEqual(false);
  });
});
