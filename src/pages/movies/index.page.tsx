/* eslint-disable react-hooks/exhaustive-deps */
// Libraries
import { lazy, Suspense, useCallback, useMemo, useState } from 'react';
import type { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';

// Helpers
import { sortMoviesByTabOption } from '@helpers/sort';

// Models
import { Movie } from '@models/Movie';

// Components
import LoadingIndicator from '@components/LoadingIndicator';
const SearchBox = lazy(() => import('@components/SearchBox'));
const Banner = lazy(() => import('@components/Banner'));
const SEO = lazy(() => import('@components/SEO'));
const Tabs = lazy(() => import('@components/Tabs'));
const MovieList = lazy(() => import('@components/MovieList'));
const Text = lazy(() => import('@components/Text'));
const ErrorBoundary = lazy(() => import('@components/ErrorBoundary'));

// Services
import { getMovies, searchMoviesByName } from '@services/movie.service';

// Constants
import { ERROR_MESSAGES } from '@constants/messages';

// Types
import { TabOption, TAB_OPTION_LIST } from '@common-types/tabs';
import { MoviesResponse } from '@common-types/apiResponse';
import { ApiError } from '@common-types/error';

// Layouts
import Layout from './layout.page';

interface MoviesProps {
  movieList?: Movie[];
  error?: string;
}

const Movies: NextPage<MoviesProps> = ({ movieList = [], error = '' }) => {
  const [openTab, setOpenTab] = useState<TabOption>(TAB_OPTION_LIST[0]);
  const [movies, setMovies] = useState<Movie[]>(movieList);
  const [errorMessage, setErrorMessage] = useState(error);

  /**
   * Handle sort Movies
   *
   * @params key TabOption
   * @return void
   */
  const handleRenderByTabOption = useCallback((key: TabOption) => {
    setOpenTab(key);
    setMovies(sortMoviesByTabOption(movies, key));
  }, []);

  /**
   * Handle search movie by name
   *
   * @params value string
   * @return void
   */
  const handleSearchMovies = useCallback(async (value: string) => {
    try {
      if (value) {
        const moviesFound: MoviesResponse = await searchMoviesByName(value);

        if (!moviesFound) {
          throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
        }

        setMovies(moviesFound.movies || []);
      } else {
        setMovies(sortMoviesByTabOption(movies, openTab));
      }
    } catch (error) {
      if (error instanceof ApiError) {
        setErrorMessage(error.message);
      }
    }
  }, []);

  const child = useMemo(
    () => (
      <Suspense fallback={<LoadingIndicator />}>
        <SEO
          description="The greatest movies you must known!"
          siteTitle="Home page"
          title="Home"
        />

        <Banner />
        <section className="px-12">
          <ErrorBoundary>
            <Tabs
              currentTab={openTab}
              options={TAB_OPTION_LIST}
              onClick={handleRenderByTabOption}
            >
              <SearchBox onChange={handleSearchMovies} />
              <MovieList movies={movies} />
              {error && (
                <Text content={errorMessage} className="text-red-100" />
              )}
            </Tabs>
          </ErrorBoundary>
        </section>
      </Suspense>
    ),
    [movies, openTab]
  );

  return <Layout>{child}</Layout>;
};

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<MoviesProps>
> => {
  try {
    const response: MoviesResponse = await getMovies();

    if (!response) {
      throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
    }

    return {
      props: { movieList: response.movies }
    };
  } catch (error) {
    if (error instanceof ApiError) {
      return {
        props: {
          error: error.message
        }
      };
    }

    return { props: {} };
  }
};

export default Movies;
