export default {
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverage: true,
  roots: ["src"],
  collectCoverageFrom: ['src/**/*.ts'],
  testEnvironment: 'node',
  preset: 'ts-jest',
  setupFiles: ['dotenv/config'],
  modulePathIgnorePatterns: [
    '/dist/', '/models/', 'typings.ts', '/routes/', 'db.ts', 'index.ts'
  ]
};