const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = {
  entry: path.join(APP_DIR, 'index.jsx'),
  output: {
    path: path.join(BUILD_DIR, 'js'),
    filename: 'bundle.js',
    publicPath: '/js/',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: path.join(APP_DIR),
      exclude: path.join(__dirname, 'node_modules'),
      query: {
        cacheDirectory: 'babel_cache',
        presets: ['react', 'es2015'],
      },
    }],
  },
};
