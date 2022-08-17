// Libraries
import type { AppProps } from 'next/app';

// Styles
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

// Components
import ErrorBoundary from '@components/ErrorBoundary';

// Layout
import Layout from './layout.page';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ErrorBoundary>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ErrorBoundary>
);

export default MyApp;
