const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = {
  entry: path.join(APP_DIR, 'index.jsx'),
  output: {
    path: path.join(BUILD_DIR, 'js'),
    filename: 'bundle.js',
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true,
    }),
  ],
};
