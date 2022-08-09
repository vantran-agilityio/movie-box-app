// Types
import { TabOption } from '@common-types/tabs';

// Models
import { Movie } from '@models/Movie';

export const sortMoviesByTabOption = (movies: Movie[], key: TabOption) => {
  if (key === TabOption.TopRate) {
    return movies.sort((a, b) =>
      a.rating < b.rating ? 1 : b.rating < a.rating ? -1 : 0
    );
  } else {
    return movies.sort((a, b) => (a.id < b.id ? 1 : b.id < a.id ? -1 : 0));
  }
};
