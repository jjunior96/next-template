/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/@types/**/*',
    '!src/pages/**/*',
    '!src/constants/**/*',
    '!src/styles/**/*',
    '!src/**/*.stories.tsx',
    '!src/**/styles.ts',
    '!src/**/types.ts'
  ],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'react-toastify',
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  }
};

module.exports = createJestConfig(customJestConfig);
