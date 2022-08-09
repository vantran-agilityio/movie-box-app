/* eslint-disable react-hooks/exhaustive-deps */
// Libraries
import { useCallback, useEffect, useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

// Helpers
import { getCurrentUser } from '@helpers/localStore';
import { sortMoviesByTabOption } from '@helpers/sort';

// Models
import { Account } from '@models/Account';
import { Movie } from '@models/Movie';

// Components
import Banner from '@components/Banner';
import SEO from '@components/SEO';
import Tabs from '@components/Tabs';
import MovieList from '@components/MovieList';

// Services
import { getMovies } from '@services/movie.service';

// Constants
import { ERROR_MESSAGES } from '@constants/messages';

// Types
import { TabOption, TAB_OPTION_LIST } from '@common-types/tabs';

interface HomeProps {
  movieList: Movie[];
}

const Home: NextPage<HomeProps> = ({ movieList = [] }) => {
  const [openTab, setOpenTab] = useState(TAB_OPTION_LIST[0]);
  const [movies, setMovies] = useState<Movie[]>(movieList);

  const router = useRouter();

  useEffect(() => {
    const currentUser: Account | null = getCurrentUser();

    if (!currentUser) {
      router.push('/login');
    }
  }, []);

  /**
   * Handle sort Movies
   *
   * @params key TabOption
   */
  const handleRenderByTabOption = useCallback((key: TabOption) => {
    setOpenTab(key);
    setMovies(sortMoviesByTabOption(movies, key));
  }, []);

  return (
    <>
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
          <MovieList movies={movies} />
        </Tabs>
      </section>
    </>
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

export default Home;
