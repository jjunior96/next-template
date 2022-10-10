import { getStorageItem, setStorageItem, APP_KEY } from '.';

beforeEach(() => {
  window.localStorage.clear();
});

describe('getStorageItem()', () => {
  it('should return the item from localStorage', () => {
    window.localStorage.setItem(
      `${APP_KEY}_cartItems`,
      JSON.stringify(['1', '2'])
    );

    expect(getStorageItem('cartItems')).toStrictEqual(['1', '2']);
  });
});

describe('setStorageItem()', () => {
  it('should add the item to localStorage', () => {
    setStorageItem('cartItems', ['1', '2']);

    expect(window.localStorage.getItem(`${APP_KEY}_cartItems`)).toStrictEqual(
      JSON.stringify(['1', '2'])
    );
  });
});
