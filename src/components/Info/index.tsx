// Libraries
import { FC } from 'react';

// Types
import { Genres } from '@common-types/movieGenreTypes';
import { TitleVariants } from '@common-types/title';

// Components
import Title from '@components/Title';
import RatingBox from '@components/RatingBox';

// Models
import { Movie } from '@models/Movie';

interface InfoProps {
  movie: Movie;
}

const Info: FC<InfoProps> = ({
  movie: { name, genres, rating, releaseYear }
}) => (
  <div className="relative bg-gray-400 rounded-lg w-1/4 px-6 py-8">
    <Title
      content={name}
      variant={TitleVariants.heading}
      className="font-bold "
    />
    <div className="py-2">
      <span className="font-bold text-white-100">Genre: </span>
      {genres.map((genre: Genres, index: number, genres: Genres[]) => (
        <div key={genre} className="inline-block">
          <Title
            variant={TitleVariants.subtitle}
            content={genre}
            className="inline-block"
          />
          {index + 1 !== genres.length && (
            <span className="text-gray-200">, &nbsp;</span>
          )}
        </div>
      ))}
    </div>
    <div className="py-2">
      <span className="font-bold text-white-100">Year: </span>
      <Title
        content={releaseYear.toString()}
        variant={TitleVariants.subtitle}
        className="inline-block"
      />
    </div>
    <RatingBox value={rating} className="absolute right-5 top-4" />
  </div>
);

export default Info;
