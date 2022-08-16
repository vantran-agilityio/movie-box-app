import { ImageLoader } from 'next/image';

export const externalLoader: ImageLoader = ({ src, width }) => {
  return `${src}=w${width}`;
};

export const internalLoader: ImageLoader = ({ src, width, quality }) => {
  return `${
    process.env.NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE || ''
  }${src}?w=${width}&q=${quality || 75}`;
};
