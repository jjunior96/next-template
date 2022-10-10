import { checkObjectIsEmpty } from '.';

describe('checkObjectIsEmpty', () => {
  it('should return true when object is empty', () => {
    const object = {};

    expect(checkObjectIsEmpty(object)).toEqual(true);
  });

  it('should return false when object is not empty', () => {
    const object = {
      name: 'name'
    };

    expect(checkObjectIsEmpty(object)).toEqual(false);
  });
});
