const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');
const LoadablePlugin = require('@loadable/webpack-plugin');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

const directoryAliases = {
  '@api': path.resolve(__dirname, './src/server/api'),
  '@client': path.resolve(__dirname, './src/client'),
  '@clientLib': path.resolve(__dirname, './src/client/lib'),
  '@components': path.resolve(__dirname, './src/client/components'),
  '@constants': path.resolve(__dirname, './src/constants'),
  '@filters': path.resolve(__dirname, './src/server/api/filters'),
  '@reducers': path.resolve(__dirname, './src/server/api/reducers'),
  '@middleware': path.resolve(__dirname, './src/server/middleware'),
  '@pages': path.resolve(__dirname, './src/client/components/pages'),
  '@root': path.resolve(__dirname, './'),
  '@server': path.resolve(__dirname, './src/server'),
  '@serverCore': path.resolve(__dirname, './src/server/core'),
  '@serverLib': path.resolve(__dirname, './src/server/lib'),
  '@shared': path.resolve(__dirname, './src/client/components/shared'),
  '@store': path.resolve(__dirname, './src/store')
};
const isDev = process.env.NODE_ENV === 'development';
const mode = isDev ? 'development' : 'production';
const jsFileName = isDev ? 'js/[name].js' : 'js/[chunkhash].js';

// const wpPlugins = [
// ];

const currentPath = path.join(__dirname);
const basePath = `${currentPath}/.env`;
const envPath = `${basePath}.${process.env.NODE_ENV}`;
const finalPath = fs.existsSync(envPath) ? envPath : basePath;
const envConfig = dotenv.config({ path: finalPath }).parsed;
const envVarCmdKeys = [
  'APP_MODE',
  'SOME_OTHER_KEY',
  'JUST_FOR_TEST',
  'CUZ_FOUR_IS_LOKO'
];

const envVarCmdConfig = {};
envVarCmdKeys.forEach(key => {
  envVarCmdConfig[`${key}`] = process.env[key];
});
const customEnvConfig = Object.assign({}, { ...envVarCmdConfig, ...envConfig });
const envKeys = Object.keys(customEnvConfig).reduce((prev, next) => {
  const newPrev = { ...prev };
  newPrev[`process.env.${next}`] = JSON.stringify(customEnvConfig[next]);
  return newPrev;
}, {});

// envKeys['process.env.APP_MODE'] = JSON.stringify(process.env.APP_MODE);

console.log(envKeys);

const browserConfig = {
  mode,
  entry: './src/client/index.js',
  target: 'web',
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
        use: [
          { loader: 'babel-loader', query: { presets: ['react-app'] } },
          'eslint-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(envKeys),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new LoadablePlugin()
  ],
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
  externals: {
    knex: 'commonjs knex'
  },
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
        use: [
          { loader: 'babel-loader', query: { presets: ['react-app'] } },
          'eslint-loader'
        ]
      }
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //         localIdentName: '[name]-[local]__[hash:base64:5]'
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(envKeys),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin()
    // new MiniCssExtractPlugin({
    //   filename: cssFileName,
    //   chunkFilename: 'css/[chunkhash].css'
    // })
  ],
  resolve: {
    alias: {
      ...directoryAliases
    }
  }
};

module.exports = [browserConfig, serverConfig];
