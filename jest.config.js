module.exports = {
  cacheDirectory: '.cache/jest',
  collectCoverageFrom: [
    '**/src/**/*.{jsx}',
    'index.js',
  ],
  testMatch: [
    '**/?(*.)(spec|test).{js,jsx}',
    '**/src/**/__tests__/**/*.{js,jsx}',
    '**/src/**/?(*.)(spec|test).{js,jsx}'
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  },
  bail: true,
  verbose: true,
}
