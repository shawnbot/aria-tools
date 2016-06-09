const webpack = require('webpack');

const config = {
  entry: {
    'aria-tools':     './lib/bundle.js',
    'aria-elements':  './elements/bundle.js'
  },

  output: {
    path: './dist',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map'
  },

  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};

module.exports = config;
