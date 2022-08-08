// Constants
import { ERROR_MESSAGES } from '@constants/messages';

// Types
import { INIT_ERRORS, ValidateError } from '@common-types/form';

// Model
import { Account } from '@models/Account';

export const validateAccount = ({ username, password }: Account) => {
  const errors: ValidateError = { ...INIT_ERRORS };

  if (!username) {
    errors.username = ERROR_MESSAGES.USERNAME_REQUIRED;
  }
  if (!password) {
    errors.pwd = ERROR_MESSAGES.PASSWORD_REQUIRED;
  }
  return errors;
};
