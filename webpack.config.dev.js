/**
 * @Author: tangzhicheng
 * @Date: 2021-01-23 17:08:51
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-01-24 22:08:51
 * @Description: file content
 */

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: ['./src/index.js'],
  },
  output: {
    path: path.join(__dirname, 'dits'),
    filename: '[name].js',
  },
  devtool: 'source-map',
  watch: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.js[x]$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.less$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /.(png|jpg|jpge|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'development',
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    hot: true,
    port: 8080,
    open: true,
  },
}
