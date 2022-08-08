import { USER_KEY } from '@constants/index';
import { Account } from '@models/Account';

const setCurrentUser = (account: Account) => {
  localStorage.setItem(USER_KEY, JSON.stringify(account));
};

const getCurrentUser = (): Account | null => {
  const currentAccount = window.localStorage.getItem(USER_KEY);
  return currentAccount ? JSON.parse(currentAccount) : null;
};

export { setCurrentUser, getCurrentUser };
