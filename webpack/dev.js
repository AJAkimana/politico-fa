import merge from 'webpack-merge';
import baseConfig from './base.js';
import path from 'path';

export default merge(baseConfig, {
  devServer: {
    contentBase: path.join(__dirname, '../app'),
    historyApiFallback: {
      disableDotRule: true
    },
    writeToDisk: true,
    port: process.env.PORT || 5600
  },
  output: {
    publicPath: '/'
  },
  module: {
    rules: []
  }
});
