// Libraries
import { FC } from 'react';

// Models
import { Movie } from '@models/Movie';

// Components
import Card from '@components/Card';

interface MovieListProps {
  movies: Movie[];
}

const MovieList: FC<MovieListProps> = ({ movies }) => (
  <div className="py-10 px-5">
    {movies.map((movie: Movie) => (
      <Card key={movie.id} className="mx-4 my-2" movie={movie} />
    ))}
  </div>
);

export default MovieList;
