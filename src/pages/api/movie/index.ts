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
  { method, query: { name = '' } }: NextApiRequest,
  res: NextApiResponse<MoviesResponse>
) => {
  switch (method) {
    case METHODS.GET:
      const fileContents = await fs.readFile(DataPath.Movies, 'utf8');
      const parseMovies: Movie[] = JSON.parse(fileContents);

      if (name) {
        const movies: Movie[] = parseMovies.filter((item: Movie) =>
          item.name.includes(name as string)
        );

        if (!movies.length) {
          res.status(204).json({ message: RESPONSE_MESSAGES[204] });
          break;
        }

        res.status(200).json({ movies, message: RESPONSE_MESSAGES[200] });
        break;
      } else {
        const movies: Movie[] = JSON.parse(fileContents);

        res.status(200).json({ movies, message: RESPONSE_MESSAGES[200] });
        break;
      }

    default:
      res.setHeader('Allow', [METHODS.GET]);
      res.status(405).json({ message: RESPONSE_MESSAGES[405] });
  }
};

export default handler;
