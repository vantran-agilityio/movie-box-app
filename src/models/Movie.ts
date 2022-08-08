import { Genres } from '@common-types/movieGenreTypes';

export interface Movie {
  readonly id: string;
  name: string;
  genres: Genres[];
  image: string;
  rating: number;
  releaseYear: number;
}
