import { Account } from '@models/Account';
import { Movie } from '@models/Movie';

type AccountResponse = { message: string; users?: Account[] };
type MoviesResponse = { message: string; movies?: Movie[] };
type MovieResponse = { message: string; movie?: Movie };

export type { AccountResponse, MoviesResponse, MovieResponse };
