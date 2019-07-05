const path = require('path');

module.exports = {
  '@api': path.resolve(__dirname, './src/server/api'),
  '@client': path.resolve(__dirname, './src/client'),
  '@clientLib': path.resolve(__dirname, './src/client/lib'),
  '@components': path.resolve(__dirname, './src/client/components'),
  '@constants': path.resolve(__dirname, './src/constants'),
  '@filters': path.resolve(__dirname, './src/server/filters'),
  '@handlers': path.resolve(__dirname, './src/server/handlers'),
  '@middleware': path.resolve(__dirname, './src/server/middleware'),
  '@pages': path.resolve(__dirname, './src/client/components/pages'),
  '@root': path.resolve(__dirname, './'),
  '@server': path.resolve(__dirname, './src/server'),
  '@serverCore': path.resolve(__dirname, './src/server/core'),
  '@serverLib': path.resolve(__dirname, './src/server/lib'),
  '@shared': path.resolve(__dirname, './src/client/components/shared'),
  '@store': path.resolve(__dirname, './src/store')
};
