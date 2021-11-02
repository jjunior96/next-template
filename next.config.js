/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  swcMinify: true,
  experimental: {
    // urlImports: ['https://cdn.skypack.dev']
  },
  images: {
    formats: ['image/avif', 'image/webp']
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
});
