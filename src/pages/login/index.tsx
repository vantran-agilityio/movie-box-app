/* eslint-disable react-hooks/exhaustive-deps */
// Libraries
import { useCallback, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

// Components
import Form from '@components/Form';
import Text from '@components/Text';

// Contants
import { ERROR_MESSAGES } from '@constants/messages';

// Models
import { Account } from '@models/Account';

// Services
import { getAccounts } from '@services/account.service';

// Helpers
import { setCurrentUser } from '@helpers/index';

// Components
import SEO from '@components/SEO';

interface LoginProps {
  listAccount?: Account[];
  errorMessage?: string;
}

const Login: NextPage<LoginProps> = ({
  listAccount = [],
  errorMessage: message = ''
}) => {
  const [errorMessage, setErrorMessage] = useState(message);
  const router = useRouter();

  const handleSubmit = useCallback(async (account: Account) => {
    try {
      if (!!errorMessage) {
        throw new Error(errorMessage);
      }

      const userFound = listAccount.findIndex(
        (accountDb: Account) =>
          accountDb.username === account.username &&
          accountDb.password === account.password
      );

      if (userFound === -1) {
        throw new Error(ERROR_MESSAGES.NO_ACCOUNT_FOUND);
      }

      // set user before redirect
      setCurrentUser(account);

      router.push('/');

      return;
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  }, []);

  return (
    <>
      <SEO
        description="Login to the site"
        siteTitle="Login page"
        title="Login to the site"
      />
      <div className="h-screen bg-login bg-center bg-cover bg-no-repeat">
        <div className="h-full flex flex-col items-center justify-center">
          <Text
            content={errorMessage}
            className="text-sm text-red-100 text-start h-4 pt-1"
          />
          <Form className="w-1/3" onSubmit={handleSubmit} />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    const response: Account[] = await getAccounts();

    if (!response) {
      throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
    }

    return {
      props: { listAccount: response }
    };
  } catch (error) {
    if (error instanceof Error) {
      return { props: { errorMessage: error.message } };
    }

    return { props: {} };
  }
}

export default Login;
