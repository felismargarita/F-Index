import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base:'/index/',
  publicPath:'/index/',
  title:'My Zone',
  sass:{
    implementation: require('node-sass'),
  },
  hash:true,
  dva: {
    immer: true,
    hmr: true,
  },
  targets:{
    ie:10
  },
  favicon:'/index/favicon.ico',
  routes: [
    { path: '/', component: '@/pages/index',exact:true },
    { path: '/collections', component: '@/pages/Collections' },
  ],
  fastRefresh: {},
});
