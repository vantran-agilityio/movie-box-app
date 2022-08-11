/* eslint-disable react-hooks/exhaustive-deps */
// Libraries
import { FC, memo, useCallback } from 'react';
import Image from 'next/future/image';

// Components
import Text from '@components/Text';
import Title from '@components/Title';
import RatingBox from '@components/RatingBox';
import { Genres } from '@common-types/movieGenreTypes';

// Models
import { Movie } from '@models/Movie';

// Types
import { TitleVariants } from '@common-types/title';
import { useRouter } from 'next/router';

interface CardProps {
  className?: string;
  movie: Movie;
}
const Card: FC<CardProps> = ({
  className = '',
  movie: { id, name, genres, image, rating, releaseYear }
}) => {
  const { push } = useRouter();

  const handleClick = useCallback(() => {
    push(`/detail/${id}`);
  }, []);

  return (
    <div
      className={`inline-block bg-white-100 shadow-2xl cursor-pointer rounded overflow-hidden text-start${
        className && ` ${className}`
      }`}
      onClick={handleClick}
    >
      <div className="relative">
        <Text
          content={releaseYear}
          className="absolute bottom-5 left-3 text-gray-100"
        />
        <Image
          src={image}
          alt={name}
          width={275}
          height={350}
          style={{ width: '100%', height: 'auto' }}
          className="w-[275px] h-[350px]"
        />
      </div>
      <div className="relative px-4 py-5">
        <div className="w-48">
          <Title
            content={name}
            className="text-ellipsis overflow-hidden whitespace-nowrap"
          />
        </div>
        <div>
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
        <RatingBox value={rating} className="absolute right-7 top-1/3" />
      </div>
    </div>
  );
};

export default memo(Card);
