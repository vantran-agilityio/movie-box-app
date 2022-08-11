// Libraries
import Head from 'next/head';
import { FC } from 'react';

interface SEOProps {
  title: string;
  description: string;
  siteTitle: string;
}

const SEO: FC<SEOProps> = ({ title, description, siteTitle }) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/icons/logo.svg" />
    <meta name="description" content={description} />
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content={siteTitle} />
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
  </Head>
);

export default SEO;
