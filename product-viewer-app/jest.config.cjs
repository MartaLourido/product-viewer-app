module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./src/setupTests.ts"],
  moduleNameMapper: {
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^services/(.*)$": "<rootDir>/src/services/$1",
  },
  setupFilesAfterEnv: ["./src/setupTests.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
