// Constants
import { ACCOUNT_URL } from '@constants/api';

// Helpers
import { get } from '@helpers/index';
import { Account } from '@models/Account';

const getAccounts = async (): Promise<Account[]> => {
  return await get(ACCOUNT_URL);
};

export { getAccounts };
