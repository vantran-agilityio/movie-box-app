// Libraries
import axios, { AxiosError, AxiosResponse } from 'axios';

// Constants
import { ERROR_MESSAGES } from '@constants/index';

// Types
import { ApiError } from '@common-types/error';

/**
 * Get data from server
 *
 * @param url string
 * @returns T[] | T
 */
const get = async <T>(url: string): Promise<T> => {
  try {
    const res: AxiosResponse<T> = await axios.get(url);

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new ApiError(
        error.name,
        error?.response?.status || 400,
        ERROR_MESSAGES.SERVER_RESPONSE_ERROR
      );
    }
    throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
  }
};

/**
 * Add new data to server
 *
 * @param url string
 * @param data Account
 * @returns Account
 */
const post = async <T>(url: string, data: T): Promise<T> => {
  try {
    const res: AxiosResponse<T> = await axios.post(url, data);

    return res.data;
  } catch (error) {
    throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
  }
};

export { get, post };
