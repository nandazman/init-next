const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "__tests__/"],
  testEnvironment: "jest-environment-jsdom",
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  coverageReporters: ["json", "lcov", "text", "clover", "json-summary"],
};
module.exports = createJestConfig(customJestConfig);
