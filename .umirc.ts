/*
 * @Author: thougr
 * @Date: 2021-07-03 09:44:36
 * @Descripttion: Do not edit
 */
import { defineConfig } from 'umi';
var chainWebpack = require('./chainWebpack.js');
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  chainWebpack: chainWebpack,
});
