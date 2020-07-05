const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  // plugins: [
  //   new webpack.SourceMapDevToolPlugin({
  //     filename: '[name].map'
  //   }),
  // ],
  // devtool: 'source-map',
  devServer: {
    hot: true,
  },
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
