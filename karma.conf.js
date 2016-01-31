const COVERAGE_FILES = './src/**/*.js';
const TEST_PATH = 'tests/**/*.js';

const WebpackConfig = require('./webpack.config');
WebpackConfig.devtool = 'inline-source-map';
WebpackConfig.module.preLoaders = [];

module.exports = function KarmaConfig(config) {
  config.set({
    autoWatch: true,

    browsers: ['PhantomJS'],

    phantomjsLauncher: {
      exitOnResourceError: true
    },

    client: {
      mocha: {
        reporter: 'html',
        ui: 'bdd'
      }
    },

    coverageReporter: {
      instrumenters: {
        isparta: require('isparta')
      },
      instrumenter: {
        [COVERAGE_FILES]: 'isparta'
      },
      type: 'text',
      dir: 'coverage/'
    },

    files: [
      TEST_PATH
    ],

    frameworks: [
      'mocha',
      'chai'
    ],

    preprocessors: {
      [TEST_PATH]: ['webpack'],
      [COVERAGE_FILES]: ['sourcemap', 'coverage']
    },

    reporters: [
      'progress',
      'coverage'
    ],

    singleRun: true,

    webpack: WebpackConfig,

    webpackMiddleware: {
      noInfo: true
    }
  });
};
