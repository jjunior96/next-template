import { NextApiRequest, NextApiResponse } from 'next';

import BaseError from 'errors/BaseError';

export default function errorHandler(
  error: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  request: NextApiRequest,
  response: NextApiResponse
) {
  console.log({
    url: request.url,
    ...error
  });

  if (error instanceof BaseError) {
    const errorResponse = {
      message: error.message,
      type: error.type,
      name: error.name,
      errors: error.errors
    };

    if (error.errors.length !== 0) {
      errorResponse.errors = error.errors;
    }

    return response.status(error.status).json(errorResponse);
  }

  return response.status(500).json(error);
}
