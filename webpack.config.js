const Path = require('path');

module.exports = {

  devtool: 'source-map',

  entry: [
    Path.join(__dirname, 'src/components/Button.js')
  ],

  eslint: {
    configFile: '.eslintrc.js'
  },

  output: {
    path: Path.join(__dirname, '/dist'),
    filename: '[name].js',
    sourceMapFilename: '[file].map'
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /(node_modules)/
      }
    ],

    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules)/
      }
    ]
  }
};
