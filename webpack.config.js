var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Extract CSS
const extractCSS = new ExtractTextPlugin('styles.min.css');

module.exports = {
  entry: './src/js/app.js',
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'js/app.bundle.js'
  },
  module: {
    rules: [
          {
              test: /\.js$/,
              include: [
                path.resolve(__dirname, ".src/js")
            ],
              loader: 'babel-loader',
              query: {
                presets: ["babel-preset-env"].map(require.resolve)
              }
          },
          {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
          }
      ]
  },
  stats: {
      colors: true
  },
  devtool: 'source-map',
  watch: true
};