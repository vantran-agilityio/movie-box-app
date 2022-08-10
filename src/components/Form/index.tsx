// Libraries
import { FC, FormEvent, useCallback, useEffect, useRef, useState } from 'react';

// Types
import { INIT_ERRORS, ValidateError } from '@common-types/form';
import { TextFieldTypes } from '@common-types/textfield';

// Components
import Button from '@components/Button';
import TextField from '@components/TextField';

// Helpers
import { areEqual } from '@helpers/areEqual';
import { validateAccount } from '@helpers/validate';

// Models
import { Account } from '@models/Account';

interface FormProps {
  className?: string;
  onSubmit: (account: Account) => void;
}

const Form: FC<FormProps> = ({ className, onSubmit }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [account, setAccount] = useState<Account>({
    username: '',
    password: ''
  });
  const [formErrors, setFormErrors] = useState<ValidateError>(INIT_ERRORS);

  const usernameRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);

  // Check formErrors and Submit
  useEffect(() => {
    isSubmit &&
      areEqual<ValidateError>(INIT_ERRORS, formErrors) &&
      onSubmit(account);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const username = usernameRef.current?.value || '';
    const password = pwdRef.current?.value || '';

    const currentAccount: Account = { username, password };

    // validate form
    setFormErrors(validateAccount(currentAccount));

    setAccount(currentAccount);
    setIsSubmit(true);
  }, []);
  return (
    <form
      className={`text-center${className && ` ${className}`}`}
      onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)}
    >
      <fieldset>
        <TextField
          className="px-2 py-3"
          placeholder="Enter your username..."
          name="username"
          type={TextFieldTypes.text}
          label="Username:"
          key="name"
          errorMessage={formErrors.username}
          ref={usernameRef}
        />
        <TextField
          className="px-2 py-3"
          placeholder="Enter your password..."
          name="password"
          type={TextFieldTypes.password}
          label="Password:"
          key="pwd"
          errorMessage={formErrors.pwd}
          ref={pwdRef}
        />
      </fieldset>
      <Button className="my-0 mx-auto">Sign in</Button>
    </form>
  );
};

export default Form;
