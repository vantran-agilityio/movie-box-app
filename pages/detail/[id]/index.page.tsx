/* eslint-disable react-hooks/exhaustive-deps */
// Libraries
import { lazy, Suspense, useCallback } from 'react';
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage
} from 'next';
import Image from 'next/future/image';
import { useRouter } from 'next/router';

// Helpers
import { externalLoader, internalLoader } from '@helpers/index';

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
const Text = lazy(() => import('@components/Text'));

// Layout
import Layout from './layout.page';
import SEO from '@components/SEO';

interface DetailProps {
  movie?: Movie;
  errorMessage?: string;
}

const Detail: NextPage<DetailProps> = ({ movie, errorMessage = '' }) => {
  const { push, asPath } = useRouter();

  const { coverImage = '/images/default-cover.jpg' } = movie || {};

  const handleBack = useCallback(() => {
    push(ROUTES.MOVIES);
  }, []);

  return (
    <>
      <SEO
        description={movie?.name || asPath}
        siteTitle={movie?.name || asPath}
        title={movie?.name || asPath}
      />
      <Layout>
        <div className="h-screen relative">
          <div className="w-full h-screen z-0 absolute overflow-hidden">
            <Image
              loader={movie?.coverImage ? externalLoader : internalLoader}
              src={coverImage}
              alt="detail background"
              width={1440}
              height={475}
              style={{ width: '100%', height: 'auto' }}
              placeholder="blur"
              blurDataURL="/images/blur.jpg"
              sizes="100vw"
            />
          </div>

          <div className="absolute top-40 left-20 w-10 bg-white-100 rounded-xl cursor-pointer">
            <Image
              loader={internalLoader}
              src="/icons/arrow-left-short.svg"
              width="50"
              height="50"
              alt="back-icon"
              style={{ width: '100%', height: 'auto' }}
              onClick={handleBack}
            />
          </div>
          <div className="pt-40 pl-20 flex justify-evenly align-middle">
            <Suspense fallback={<LoadingIndicator />}>
              {movie ? (
                <Info movie={movie} />
              ) : (
                <Text content={errorMessage} className="text-red-100 z-10" />
              )}
              <PlayButton />
            </Suspense>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response: MoviesResponse = await getMovies();

    if (response.message === RESPONSE_MESSAGES[200] && response.movies) {
      const paths = response.movies.map(({ id }) => {
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

export const getStaticProps: GetStaticProps = async ({
  params
}): Promise<GetStaticPropsResult<DetailProps>> => {
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
