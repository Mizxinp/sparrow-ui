module.exports = {
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  // moduleDirectories: ["node_modules", "src"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
};
