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
import { ROUTES, ERROR_MESSAGES } from '@constants/index';

// Types
import { ParamsProps } from '@common-types/paramProps';
import LoadingIndicator from '@components/LoadingIndicator';

// Components
const Info = lazy(() => import('@components/Info'));
const PlayButton = lazy(() => import('@components/PlayButton'));

interface DetailProps {
  movie: Movie;
}

const Detail: NextPage<DetailProps> = ({ movie }) => {
  const { push } = useRouter();

  const { coverImage = '/images/default-cover.jpg' } = movie;

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
    const response: Movie[] = await getMovies();

    if (!response) {
      throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
    }

    const paths = response.map(({ id, coverImage }) => {
      return { params: { id, coverImage } };
    });

    return {
      paths,
      fallback: false
    };
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
    const movie = await getMovieById(id);

    return {
      props: { movie }
    };
  } catch (error) {
    if (error instanceof Error) {
      return { props: { errorMessage: error.message } };
    }

    return { props: {} };
  }
};

export default Detail;
