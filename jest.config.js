module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['./app/helpers/testsSetup.js'],
  clearMocks: true,
  collectCoverageFrom: ['app/**/*.{js,jsx}', '!app/index.js'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub'
  },
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  testMatch: ['**/_tests_/**/*.js?(x)', '**/?(*.)+(test).js?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest'
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
};
