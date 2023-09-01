import { NextApiRequest, NextApiResponse } from 'next/types';

import app, { handler } from 'middlewares/api.middleware';

async function get(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json({
      message: 'Hello World'
    });
  } catch (error: unknown) {
    console.log(error);
    res.status(400).json({ error: error });
  }
}

export default app().get(get).handler(handler);
