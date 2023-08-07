/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./test/jest.setup.js"],
};

module.exports = config;
