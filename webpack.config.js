var path = require('path');
// var webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// // Extract CSS
// const extractCSS = new ExtractTextPlugin('styles.min.css');

const MinifyPlugin = require("babel-minify-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'), //absolute path to RepoDir/src
  dist: path.join(__dirname, 'dist') //absolute path to RepoDir/dist
}

module.exports = {
  entry: './src/js/main.js',
  mode: 'none',
  output: {
      path: PATHS.dist,
      filename: 'src/js/app.bundle.js'
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
            use: [
              {
                loader: MiniCssExtractPlugin.loader
              },
              // "style-loader",
               "css-loader", "postcss-loader", "sass-loader"]
          }
      ]
  },
  stats: {
      colors: true
  },
  plugins: [
    new MinifyPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'src/css/[name].css',
      chunkFilename: "src/css/[id].css"
    }),
    new CopyPlugin([
      { from: 'static', to: 'static' },
      { from: 'src/css/vendor', to: 'src/css/vendor' },
      { from: 'fonts', to: 'fonts' },
      { from: 'index.html', to: 'index.html' },
    ]),
  ],
  // devtool: 'eval-source-map',
  watch: false
};