// Libraries
import { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';

// Types
import { MoviesResponse } from '@common-types/apiResponse';

// Constants
import { METHODS, RESPONSE_MESSAGES, DataPath } from '@constants/index';

// Models
import { Movie } from '@models/Movie';

export const handler = async (
  { method, query }: NextApiRequest,
  res: NextApiResponse<MoviesResponse>
) => {
  const { name } = <{ name: string }>query;

  if (method === METHODS.GET) {
    if (name) {
      const fileContents = await fs.readFile(DataPath.Movies, 'utf8');

      const parseMovies: Movie[] = JSON.parse(fileContents);

      const movies: Movie[] = parseMovies.filter((item: Movie) =>
        item.name.includes(name)
      );

      if (!movies.length) {
        res.status(204).json({ message: RESPONSE_MESSAGES[204] });
        return;
      }

      res.status(200).json({ movies, message: RESPONSE_MESSAGES[200] });
      return;
    } else {
      const fileContents = await fs.readFile(DataPath.Movies, 'utf8');

      const movies: Movie[] = JSON.parse(fileContents);

      res.status(200).json({ movies, message: RESPONSE_MESSAGES[200] });
      return;
    }
  } else {
    res.status(405).json({ message: RESPONSE_MESSAGES[405] });
    return;
  }
};

export default handler;
