module.exports = {
  cacheDirectory: '.cache/jest',
  collectCoverageFrom: [
    'src/**/*.{jsx}',
    'server/**/*.{js}',
  ],
  testMatch: [
    '**/?(*.)(spec|test).{js,jsx}',
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.css$': '../../config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': '../../config/jest/fileTransform.js',
  },
  bail: true,
  verbose: true,
}
