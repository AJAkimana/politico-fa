import merge from 'webpack-merge';
import baseConfig from './base.js';
import path from 'path';

export default merge(baseConfig, {
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'index.bundle.js'
  },
  mode: 'prod',
  module: {}
});
