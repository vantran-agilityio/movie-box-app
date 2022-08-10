// Constants
import { MOVIE_URL } from '@constants/api';

// Helpers
import { get } from '@helpers/index';

// Models
import { Movie } from '@models/Movie';

const getMovies = async (): Promise<Movie[]> => {
  return await get(`${MOVIE_URL}?sortBy=id&order=desc`);
};

const getMovieById = async (id: string): Promise<Movie> => {
  return await get(`${MOVIE_URL}/${id}`);
};

const searchMoviesByName = async (name: string): Promise<Movie[]> => {
  return await get(`${MOVIE_URL}?name=${name}`);
};

export { getMovies, getMovieById, searchMoviesByName };
