// Karma configuration
// Generated on Thu Sep 01 2016 20:59:22 GMT+0200 (CEST)

var webpack = require('webpack')

var webpackConfig = {
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts'],
    modulesDirectories: ['node_modules'],
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: null, 
      test: /\.(ts|js)($|\?)/i,
      exclude: 'node_modules'
    })
  ]
};


module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'source-map-support'],
    files: [
      'test/basespec.ts',
      { pattern: '**/*.map', watched: false, included: false, served: true },
    ],
    preprocessors: {
      'test/basespec.ts': ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
    client: {
      mocha: {
        reporter: 'html',
        ui: 'tdd'
      }
    }
  })
}
