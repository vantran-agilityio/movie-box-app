const BASE_URL = process.env.NEXT_PUBLIC_SECRET_KEY;

const ACCOUNT_URL = `${BASE_URL}/api/account`;
const MOVIE_URL = `${BASE_URL}/api/movie`;

export { ACCOUNT_URL, MOVIE_URL };
