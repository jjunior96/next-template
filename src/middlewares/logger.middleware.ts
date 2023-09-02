import { NextApiRequest, NextApiResponse } from 'next';

export default function logger(
  request: NextApiRequest,
  response: NextApiResponse,
  next: () => void
) {
  const clientIp =
    request.headers['x-forwarded-for'] || request.socket.remoteAddress;

  console.log({
    url: request.url,
    clientIp
  });

  return next();
}
