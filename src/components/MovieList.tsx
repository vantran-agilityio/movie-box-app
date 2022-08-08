import { areEqual } from '@helpers/areEqual';
import { Movie } from '@models/Movie';
import { FC, memo } from 'react';
import Card from './Card';

interface MovieListProps {
  movies: Movie[];
}

const MovieList: FC<MovieListProps> = ({ movies }) => (
  <>
    {movies.map((movie: Movie) => (
      <Card key={movie.id} movie={movie} onClick={() => null} />
    ))}
  </>
);

export default memo(MovieList, areEqual<MovieListProps>);
