import { ParsedUrlQuery } from 'querystring';

export interface ParamsProps extends ParsedUrlQuery {
  id: string;
}
