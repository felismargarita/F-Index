import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title:'My Zoon',
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
  favicon:'/favicon.ico',
  routes: [
    { path: '/', component: '@/pages/index',exact:true },
    { path: '/collections', component: '@/pages/Collections' },
  ],
  fastRefresh: {},
});
