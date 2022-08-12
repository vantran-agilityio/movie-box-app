// Constants
import { MOVIE_URL } from '@constants/api';

// Types
import { MovieResponse, MoviesResponse } from '@common-types/apiResponse';

// Helpers
import { get } from '@helpers/index';

const getMovies = async (): Promise<MoviesResponse> => {
  return await get(MOVIE_URL);
};

const getMovieById = async (id: string): Promise<MovieResponse> => {
  return await get(`${MOVIE_URL}/${id}`);
};

const searchMoviesByName = async (name: string): Promise<MoviesResponse> => {
  return await get(`${MOVIE_URL}?name=${name}`);
};

export { getMovies, getMovieById, searchMoviesByName };
