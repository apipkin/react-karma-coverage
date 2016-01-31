module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    node: true,
    browser: true,
    mocha: true
  },
  plugins: [
    'react'
  ],
  rules: {
    'comma-dangle': [2, 'never']
  }
};
