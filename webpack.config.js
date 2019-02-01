var path = require('path');
// var webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// // Extract CSS
// const extractCSS = new ExtractTextPlugin('styles.min.css');

const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  entry: './src/js/main.js',
  mode: 'none',
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'js/app.bundle.js'
  },
  module: {
    rules: [
          {
            test: /\.(js|jsx)$/,
            include: [
              path.resolve(__dirname, ".src/js")
            ],
            loader: 'babel-loader'
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
  plugins: [
    new MinifyPlugin()
  ],
  // devtool: 'eval-source-map',
  watch: true
};