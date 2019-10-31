const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = (isProd) => ({
  mode: isProd ? 'production' : 'development',
  entry: {
    react: path.join(__dirname, 'src/react/index.tsx')
  },
  devtool: isProd ? false : 'inline-source-map',
  output: {
    filename:'[name].bundle.js',
    path: path.join(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /.*\.tsx?/,
        use: [
          'ts-loader'
        ]
      },
      {
        test: /.*\.scss?/,
        use: [
          isProd ? {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: false
            }
          } : 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/html/index.html')
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    })
  ].filter(i => !!i),
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      '~': path.join(__dirname, 'src')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      minSize: 1
    }
  },
  devServer: {
    publicPath: '/',
    contentBase: path.join(__dirname, 'assets')
  }
});

module.exports = config(process.env.NODE_ENV === 'production');
