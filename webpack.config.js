const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');
const LoadablePlugin = require('@loadable/webpack-plugin');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const autoprefixer = require("autoprefixer");

const isDev = process.env.NODE_ENV === 'development';
const mode = isDev ? 'development' : 'production';
const jsFileName = isDev ? 'js/[name].js' : 'js/[chunkhash].js';
const cssFileName = isDev ? 'css/[name].css' : 'css/[chunkhash].css';

// const wpPlugins = [
// ];

const directoryAliases = {
  '@root': path.resolve(__dirname, './'),
  '@client': path.resolve(__dirname, './src/client'),
  '@clientLib': path.resolve(__dirname, './src/client/lib'),
  '@components': path.resolve(__dirname, './src/client/components'),
  '@shared': path.resolve(__dirname, './src/client/components/shared'),
  '@pages': path.resolve(__dirname, './src/client/components/pages'),
  '@server': path.resolve(__dirname, './src/server'),
  '@serverCore': path.resolve(__dirname, './src/server/core'),
  '@serverLib': path.resolve(__dirname, './src/server/lib'),
  '@api': path.resolve(__dirname, './src/server/api'),
  '@middleware': path.resolve(__dirname, './src/server/middleware'),
  '@filters': path.resolve(__dirname, './src/server/filters'),
  '@handlers': path.resolve(__dirname, './src/server/handlers'),
  '@constants': path.resolve(__dirname, './src/constants')
};

const browserConfig = {
  mode,
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, './build'),
    filename: jsFileName
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      // {
      //   test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      //   loader: "file-loader",
      //   options: {
      //     name: "public/media/[name].[ext]",
      //     publicPath: url => url.replace(/public/, "")
      //   }
      // },
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: { presets: ['react-app'] }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]-[local]__[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new LoadablePlugin(),
    new MiniCssExtractPlugin({
      filename: cssFileName,
      chunkFilename: 'css/[chunkhash].css'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    alias: {
      ...directoryAliases
    }
  }
};

const serverConfig = {
  mode: 'development',
  entry: './src/server/index.js',
  target: 'node',
  // externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, './bin'),
    filename: 'server.js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      // {
      //   test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      //   loader: "file-loader",
      //   options: {
      //     name: "public/media/[name].[ext]",
      //     publicPath: url => url.replace(/public/, ""),
      //     emit: false
      //   }
      // },
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: { presets: ['react-app'] }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]-[local]__[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new LoadablePlugin(),
    new MiniCssExtractPlugin({
      filename: cssFileName,
      chunkFilename: 'css/[chunkhash].css'
    })
  ],
  resolve: {
    alias: {
      ...directoryAliases
    }
  }
};

module.exports = [browserConfig, serverConfig];
