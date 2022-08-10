/* eslint-disable react-hooks/exhaustive-deps */
// Libraries
import { lazy, Suspense, useCallback, useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';

// Helpers
import { sortMoviesByTabOption } from '@helpers/sort';

// Models
import { Movie } from '@models/Movie';

// Components
const Banner = lazy(() => import('@components/Banner'));
const SEO = lazy(() => import('@components/SEO'));
const Tabs = lazy(() => import('@components/Tabs'));
const MovieList = lazy(() => import('@components/MovieList'));

// Services
import { getMovies, searchMoviesByName } from '@services/movie.service';

// Constants
import { ERROR_MESSAGES } from '@constants/messages';

// Types
import { TabOption, TAB_OPTION_LIST } from '@common-types/tabs';
import LoadingIndicator from '@components/LoadingIndicator';
import SearchBox from '@components/SearchBox';

interface MoviesProps {
  movieList: Movie[];
}

const Movies: NextPage<MoviesProps> = ({ movieList = [] }) => {
  const [openTab, setOpenTab] = useState<TabOption>(TAB_OPTION_LIST[0]);
  const [movies, setMovies] = useState<Movie[]>(movieList);

  /**
   * Handle sort Movies
   *
   * @params key TabOption
   * @params void
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
    if (value) {
      const moviesFound: Movie[] = await searchMoviesByName(value);
      setMovies(moviesFound);
      setOpenTab(openTab);
    } else {
      setMovies(sortMoviesByTabOption(movies, openTab));
    }
  }, []);

  return (
    <Suspense fallback={<LoadingIndicator />}>
      <SEO
        description="The greatest movies you must known!"
        siteTitle="Home page"
        title="Home"
      />

      <Banner />
      <section className="px-12">
        <Tabs
          currentTab={openTab}
          options={TAB_OPTION_LIST}
          onClick={handleRenderByTabOption}
        >
          <SearchBox onChange={handleSearchMovies} />
          <MovieList movies={movies} />
        </Tabs>
      </section>
    </Suspense>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response: Movie[] = await getMovies();

    if (!response) {
      throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
    }

    return {
      props: { movieList: response }
    };
  } catch (error) {
    if (error instanceof Error) {
      return { props: { errorMessage: error.message } };
    }

    return { props: {} };
  }
};

export default Movies;
