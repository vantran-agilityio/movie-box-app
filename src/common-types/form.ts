export type ValidateError = {
  username: string;
  pwd: string;
};

export const INIT_ERRORS: ValidateError = {
  username: '',
  pwd: ''
};
