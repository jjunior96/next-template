import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

import cors from 'cors';
import cache from 'middlewares/cache.middleware';
import onError from 'middlewares/errorHandler.middleware';
import logger from 'middlewares/logger.middleware';

const corsDefaultConfiguration = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

const cacheDefaultConfiguration = 86400;

const onNoMatch = (request: NextApiRequest, response: NextApiResponse) => {
  return response.status(404).json({
    message: 'Page not found.',
    type: 'not_found',
    name: 'NotFoundError'
  });
};

export const handler = {
  onError,
  onNoMatch
};

export default (
  options: {
    cors?: cors.CorsOptions;
    cache?: number;
  } = {}
) => {
  const corsOptions = options.cors || {};
  const cacheOptions = options.cache || cacheDefaultConfiguration;

  const configurations = {
    cors: {
      ...corsDefaultConfiguration,
      ...corsOptions
    },
    cache: cacheOptions
  };

  const nc = createRouter<NextApiRequest, NextApiResponse>();
  return nc
    .use(cors(configurations.cors))
    .use(logger)
    .use(cache(configurations.cache));
};
