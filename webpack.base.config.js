const path = require('path');
const MiniCssPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'bundle'),
    publicPath: '/bundle',
  },
  plugins: [
    new MiniCssPlugin({
      filename: '[name].css',
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: 'src/assets', to: 'assets' }
    //   ],
    // }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
  module: {
    rules: [
      { test: /\.js/, loader: 'babel-loader', exclude: '/node_modules/', },
      {
        test: /\.scss/,
        use: [
          MiniCssPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: { config: { path: './postcss.config.js', }, },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};
