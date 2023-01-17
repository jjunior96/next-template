/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ['error']
    }
  }
};
