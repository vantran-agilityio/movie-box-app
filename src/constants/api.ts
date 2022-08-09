const BASE_URL = process.env.NEXT_PUBLIC_SECRET_KEY;

const ACCOUNT_URL = `${BASE_URL}/users`;
const MOVIE_URL = `${BASE_URL}/movies`;

export { ACCOUNT_URL, MOVIE_URL };
