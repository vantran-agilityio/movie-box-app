import SEO from '@components/SEO';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <SEO description="Movie Box" siteTitle="Movie Box" title="Movie Box" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
