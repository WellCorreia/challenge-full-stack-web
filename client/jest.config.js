module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
  },
  modulePaths: [
    "<rootDir>/src",
    "<rootDir>/node_modules"
  ],
  snapshotSerializers: [
    'jest-serializer-vue',
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
  ],
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(vuetify)/)",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    'vuetify/lib(.*)': '<rootDir>/node_modules/vuetify/es5$1',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
