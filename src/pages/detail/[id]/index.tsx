/* eslint-disable react-hooks/exhaustive-deps */
// Libraries
import { lazy, Suspense, useCallback } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/future/image';

// Services
import { getMovieById, getMovies } from '@services/movie.service';

// Models
import { Movie } from '@models/Movie';

// Constants
import { ROUTES, ERROR_MESSAGES, RESPONSE_MESSAGES } from '@constants/index';

// Types
import { ParamsProps } from '@common-types/paramProps';
import { MovieResponse, MoviesResponse } from '@common-types/apiResponse';

// Components
import LoadingIndicator from '@components/LoadingIndicator';
const Info = lazy(() => import('@components/Info'));
const PlayButton = lazy(() => import('@components/PlayButton'));

interface DetailProps {
  movie: Movie;
}

const Detail: NextPage<DetailProps> = ({ movie }) => {
  const { push } = useRouter();

  const { coverImage = '/images/default-cover.jpg' } = movie || {};

  const handleBack = useCallback(() => {
    push(ROUTES.MOVIES);
  }, []);

  return (
    <div className="h-screen relative">
      <div className="w-full h-screen z-0 absolute overflow-hidden">
        <Image
          src={coverImage}
          alt="login background"
          width={1440}
          height={475}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      <div className="absolute top-40 left-20">
        <Image
          className="bg-white-100 rounded-xl cursor-pointer"
          src="/icons/arrow-left-short.svg"
          width="50"
          height="50"
          alt="back-icon"
          onClick={handleBack}
        />
      </div>
      <div className="pt-40 pl-20 flex justify-evenly align-middle">
        <Suspense fallback={<LoadingIndicator />}>
          <Info movie={movie} />
          <PlayButton />
        </Suspense>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response: MoviesResponse = await getMovies();

    if (response.message === RESPONSE_MESSAGES[200] && response.movies) {
      const paths = response?.movies.map(({ id }) => {
        return { params: { id } };
      });

      return {
        paths,
        fallback: false
      };
    }

    throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
  } catch (error) {
    if (error instanceof Error) {
      return { fallback: true, paths: [] };
    }

    return { fallback: true, paths: [] };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { id = 0 } = params as ParamsProps;

    if (!id) {
      throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
    }
    const { movie, message }: MovieResponse = await getMovieById(id);

    if (message === RESPONSE_MESSAGES[200]) {
      return {
        props: { movie }
      };
    }

    throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
  } catch (error) {
    if (error instanceof Error) {
      return { props: { errorMessage: error.message } };
    }

    return { props: {} };
  }
};

export default Detail;
