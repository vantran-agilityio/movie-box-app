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
import { ERROR_MESSAGES } from '@constants/messages';

// Types
import { ParamsProps } from '@common-types/param';
import LoadingIndicator from '@components/LoadingIndicator';

// Components
const Info = lazy(() => import('@components/Info'));
const Play = lazy(() => import('@components/Play'));

interface DetailProps {
  movie: Movie;
}

const Detail: NextPage<DetailProps> = ({ movie }) => {
  const { push } = useRouter();

  const { coverImage = '/images/default-cover.jpg' } = movie;

  const handleBack = useCallback(() => {
    push('/');
  }, []);

  return (
    <div
      className="pt-32 pl-20 h-screen bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('${coverImage}')`
      }}
    >
      <Image
        className="bg-white-100 rounded-xl cursor-pointer"
        src="/icons/arrow-left-short.svg"
        width="50"
        height="30"
        alt="back-icon"
        onClick={handleBack}
      />

      <div className="flex justify-evenly align-middle ">
        <Suspense fallback={<LoadingIndicator />}>
          <Info movie={movie} />
          <Play />
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

    const paths = response.map(({ id }) => {
      return { params: { id } };
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
