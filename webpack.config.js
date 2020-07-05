const path = require('path');
const MiniCssPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'bundle'),
    publicPath: '/bundle',
  },
  devServer: {
    hot: true,
  },
  plugins: [
    new MiniCssPlugin({
      filename: '[name].css',
    }),
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
            options: { config: { path: './postcss.config.js' } },
          },
          'sass-loader',
        ],
      },
    ],
  },
};
