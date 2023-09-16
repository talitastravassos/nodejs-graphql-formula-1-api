const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest');

module.exports = {
  clearMocks: true,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>',
  }),
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    '**/*.ts',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/coverage/**',
    '!**/__mocks__/**',
    '!**.mocks.ts',
  ],
};
