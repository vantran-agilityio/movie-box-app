// Libraries
import type { AppProps } from 'next/app';

// Styles
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

// Components
import Layout from '@components/Layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LoadingIndicator from '@components/LoadingIndicator';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [pageLoading, setPageLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return (
    <>
      {pageLoading ? (
        <LoadingIndicator />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
export default MyApp;
