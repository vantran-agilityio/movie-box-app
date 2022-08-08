import Text from '@components/Text';
import Title from '@components/Title';
import { Movie } from '@models/Movie';
import Image from 'next/future/image';
import { FC, memo } from 'react';
import RatingBox from '@components/RatingBox';
import { TitleVariants } from '@common-types/title';
import { Genres } from '@common-types/movieGenreTypes';

interface CardProps {
  movie: Movie;
  onClick: () => void;
}
const Card: FC<CardProps> = ({
  movie: { name, genres, image, rating, releaseYear },
  onClick
}) => {
  return (
    <div
      className="inline-block bg-white-100 shadow-2xl cursor-pointer rounded overflow-hidden"
      onClick={onClick}
    >
      <div className="relative">
        <Text
          content={releaseYear}
          className="absolute bottom-5 left-3 text-gray-100"
        />
        <Image src={image} alt={name} width={275} height={350} className="" />
      </div>
      <div className="relative px-2 py-2.5">
        <Title content={name} />
        <div>
          {genres.map((genre: Genres, index: number, genres: Genres[]) => (
            <>
              <Title
                variant={TitleVariants.subtitle}
                content={genre}
                key={genre}
                className="inline-block"
              />
              {index + 1 !== genres.length && (
                <span className="text-gray-200">, </span>
              )}
            </>
          ))}
        </div>
        <RatingBox value={rating} className="absolute right-7 top-1/3" />
      </div>
    </div>
  );
};

export default memo(Card);
