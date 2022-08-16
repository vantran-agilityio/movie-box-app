/* eslint-disable react-hooks/exhaustive-deps */
// Libraries
import { lazy, Suspense, useCallback, useState } from 'react';
import type { NextPage, GetStaticProps, GetStaticPropsResult } from 'next';
import { useRouter } from 'next/router';

// Helpers
import Image from 'next/future/image';

// Components
import LoadingIndicator from '@components/LoadingIndicator';
const Form = lazy(() => import('@components/Form'));
const Text = lazy(() => import('@components/Text'));

// Constants
import { ROUTES, ERROR_MESSAGES, RESPONSE_MESSAGES } from '@constants/index';

// Models
import { Account } from '@models/Account';

// Services
import { getAccounts } from '@services/account.service';

// Components
import SEO from '@components/SEO';

// Types
import { AccountResponse } from '@common-types/apiResponse';
import { internalLoader } from '@helpers/image';

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

      const userMatched = listAccount.findIndex(
        (accountDb: Account) =>
          accountDb.username === account.username &&
          accountDb.password === account.password
      );

      if (userMatched === -1) {
        throw new Error(ERROR_MESSAGES.NO_ACCOUNT_FOUND);
      }

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
      <main className="h-screen">
        <div className="w-full h-screen z-0 absolute overflow-hidden">
          <Image
            loader={internalLoader}
            src="/images/background.jpg"
            width={1440}
            height={475}
            style={{ width: '100%', height: 'auto' }}
            placeholder="blur"
            blurDataURL="/images/blur.jpg"
            alt="login background"
            sizes="100vw"
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
      </main>
    </Suspense>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<LoginProps>
> => {
  try {
    const { users, message }: AccountResponse = await getAccounts();

    if (message === RESPONSE_MESSAGES[200]) {
      return {
        props: { listAccount: users }
      };
    }

    throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
  } catch (error) {
    if (error instanceof Error) {
      return { props: { errorMessage: error.message } };
    }

    return { props: {} };
  }
};

export default Login;
