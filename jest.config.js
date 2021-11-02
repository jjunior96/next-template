module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
  // extensionsToTreatAsEsm: ['.ts', '.tsx'],
  // transform: {
  //   '^.+\\.(t|j)sx?$': ['@swc/jest']
  // }
};
