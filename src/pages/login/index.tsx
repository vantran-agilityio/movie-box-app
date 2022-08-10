/* eslint-disable react-hooks/exhaustive-deps */
// Libraries
import { lazy, Suspense, useCallback, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

// Components
import LoadingIndicator from '@components/LoadingIndicator';
const Form = lazy(() => import('@components/Form'));
const Text = lazy(() => import('@components/Text'));

// Constants
import { ROUTES, ERROR_MESSAGES } from '@constants/index';

// Models
import { Account } from '@models/Account';

// Services
import { getAccounts } from '@services/account.service';

// Helpers
import { setCurrentUser } from '@helpers/index';

// Components
import SEO from '@components/SEO';
import Image from 'next/image';

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

      router.push(ROUTES.MOVIES);

      return;
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  }, []);

  return (
    <Suspense fallback={<LoadingIndicator />}>
      <SEO
        description="Login to the site"
        siteTitle="Login page"
        title="Login to the site"
      />
      <div className="h-screen">
        <div className="w-full h-screen z-0 absolute">
          <Image
            src="/images/background.jpg"
            layout="fill"
            alt="login background"
          />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center z-10">
          <div className="rounded p-4 bg-gray-400">
            <Text
              content="USER NAME: DE130099"
              className="p-1 text-white-100 font-bold"
            />
            <Text
              content="PASSWORD: 123"
              className="p-1 text-white-100 font-bold"
            />
          </div>
          <Text
            content={errorMessage}
            className="text-sm text-red-100 text-start h-4 pt-1"
          />
          <Form className="w-1/3" onSubmit={handleSubmit} />
        </div>
      </div>
    </Suspense>
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
