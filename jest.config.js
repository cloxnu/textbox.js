/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
// };

module.exports = {
  preset: "ts-jest",
  globalSetup: "./src/Tests/UI/setup.js",
  globalTeardown: "./src/Tests/UI/teardown.js",
  testEnvironment: "./src/Tests/UI/puppeteer_environment.js",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/Tests/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/src/Tests/__mocks__/styleMock.js",
  },
};