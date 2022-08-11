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
  <div className="py-8 px-8">
    {movies.map((movie: Movie) => (
      <Card key={movie.id} className="mx-6 my-4" movie={movie} />
    ))}
  </div>
);

export default MovieList;
