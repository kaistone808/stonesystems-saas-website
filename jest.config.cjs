/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  passWithNoTests: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
};
