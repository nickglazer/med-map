module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '\\.*.(tsx?)$': 'ts-jest',
    '\\.*.(js?)$': 'babel-jest',
  },
  transformIgnorePatterns: ['.*/node_modules/(?!@svg-maps)', '.*/__mocks__'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/jest_stubs/style-module.js',
    '\\.(jpg|png)$': '<rootDir>/jest_stubs/empty-module.js',
    '^APIS/(.*)': '<rootDir>/src/apis/$1',
    '^COMPONENTS/(.*)': '<rootDir>/src/components/$1',
    '^SRC/(.*)': '<rootDir>/src/$1',
    '^UTILS/(.*)': '<rootDir>/src/utils/$1',
  },
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/index.{ts,tsx}', '!src/**/*.d.ts'],
  setupFiles: [
    '<rootDir>/__mocks__/fetchMock.js',
  ],
  testURL: 'http://localhost',
};
