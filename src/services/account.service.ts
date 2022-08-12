// Constants
import { ACCOUNT_URL } from '@constants/api';

// Types
import { AccountResponse } from '@common-types/apiResponse';

// Helpers
import { get } from '@helpers/index';

const getAccounts = async (): Promise<AccountResponse> => {
  return await get(ACCOUNT_URL);
};

export { getAccounts };
