/* eslint-disable max-len */
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['json', 'text', 'lcov', 'clover'],

  // An object that configures minimum threshold enforcement for coverage results
  // coverageThreshold: null,

  // A set of global variables that need to be available in all test environments
  // globals: {},

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx'],

  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '^@shared(.*)$': '<rootDir>/src/client/components/shared$1',
    '^@client(.*)$': '<rootDir>/src/client$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@store(.*)$': '<rootDir>/src/store$1'
  },

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['<rootDir>/enzyme.setup.js'],

  // The path to a module that runs some code to configure or set up the testing framework before each test
  // setupTestFrameworkScriptFile: '',

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  snapshotSerializers: ['enzyme-to-json/serializer'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // Options that will be passed to the testEnvironment
  // testEnvironmentOptions: {},

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/node_modules/',
    '<rootDir>/bin/',
    '<rootDir>/build/'
  ],

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  testURL: 'http://localhost',

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  // Indicates whether each individual test should be reported during the run
  verbose: false
};
