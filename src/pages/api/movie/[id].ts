// Libraries
import { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';

// Types
import { MovieResponse } from '@common-types/apiResponse';

// Constants
import { METHODS, RESPONSE_MESSAGES, DataPath } from '@constants/index';

// Models
import { Movie } from '@models/Movie';

export const handler = async (
  { query: { id }, method }: NextApiRequest,
  res: NextApiResponse<MovieResponse>
) => {
  switch (method) {
    case METHODS.GET:
      const fileContents = await fs.readFile(DataPath.Movies, 'utf8');

      const movies: Movie[] = JSON.parse(fileContents);

      const movie: Movie | undefined = movies.find(
        (item: Movie) => item.id === id
      );

      if (!movie) {
        res.status(204).json({ message: RESPONSE_MESSAGES[204] });
        return;
      }

      res.status(200).json({ movie, message: RESPONSE_MESSAGES[200] });

      break;

    default:
      res.setHeader('Allow', [METHODS.GET]);
      res.status(405).end(RESPONSE_MESSAGES[405]);
  }
};

export default handler;
