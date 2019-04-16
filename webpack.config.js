const webpack = require('webpack');
// const nodeExternals = require('webpack-node-externals');
const LoadablePlugin = require('@loadable/webpack-plugin');
const path = require('path');

// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const autoprefixer = require("autoprefixer");

const browserConfig = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].js'
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
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     use: [
      //       {
      //         loader: "css-loader",
      //         options: { importLoaders: 1 }
      //       },
      //       {
      //         loader: "postcss-loader",
      //         options: { plugins: [autoprefixer()] }
      //       }
      //     ]
      //   })
      // },
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: { presets: ['react-app'] }
      }
    ]
  },
  plugins: [
    // new ExtractTextPlugin({
    //   filename: "public/css/[name].css"
    // })
    new LoadablePlugin()
  ]
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
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: "css-loader/locals"
      //     }
      //   ]
      // },
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: { presets: ['react-app'] }
      }
    ]
  }
};

module.exports = [browserConfig, serverConfig];
