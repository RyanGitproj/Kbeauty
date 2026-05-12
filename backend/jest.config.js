module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  collectCoverageFrom: [
    'src/controllers/**/*.ts',
    'src/routes/**/*.ts',
    '!src/controllers/docusignController.ts'
  ],
  coverageThreshold: {
    global: {
      lines: 80,
      functions: 80,
      branches: 80
    }
  }
};
