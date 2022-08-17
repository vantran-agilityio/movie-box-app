// Libraries
import { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';

// Types
import { AccountResponse } from '@common-types/apiResponse';

// Constants
import { METHODS, RESPONSE_MESSAGES, DataPath } from '@constants/index';

// Models
import { Account } from '@models/Account';

export const handler = async (
  { method }: NextApiRequest,
  res: NextApiResponse<AccountResponse>
) => {
  switch (method) {
    case METHODS.GET:
      const fileContents = await fs.readFile(DataPath.Users, 'utf8');

      const users: Account[] = JSON.parse(fileContents);

      res.status(200).json({ users: users, message: RESPONSE_MESSAGES[200] });
      break;

    default:
      res.setHeader('Allow', [METHODS.GET]);
      res.status(405).end(RESPONSE_MESSAGES[405]);
  }
};

export default handler;
