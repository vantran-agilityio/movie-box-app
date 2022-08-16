const BASE_URL =
  process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE ||
  process.env.NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE;

const ACCOUNT_URL = `${BASE_URL}/api/account`;
const MOVIE_URL = `${BASE_URL}/api/movie`;

export { ACCOUNT_URL, MOVIE_URL };
