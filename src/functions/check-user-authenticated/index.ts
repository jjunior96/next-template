import { getStorageItem } from 'utils';

export const checkUserAuthenticated = () => {
  const userToken = getStorageItem(process.env.NEXT_PUBLIC_USER_TOKEN);

  return !!userToken;
};
