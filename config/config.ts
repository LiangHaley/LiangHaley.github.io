/*
 * @Author: Jack11023 1018719623@qq.com
 * @Date: 2023-08-20 11:22:38
 * @LastEditors: Jack11023 1018719623@qq.com
 * @LastEditTime: 2023-08-28 08:10:38
 * @FilePath: \encode-hooks-1.0c:\Users\MS\Desktop\project\PnpmReact\config\config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { menus } from './menus';
export default {
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  base: '/',
  publicPath: './',
  history: { type: 'hash' },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false,
      },
      'fusion',
    ],
  ],
  mode: 'site',
  title: 'react hooks',
  favicon: '/avatar.png',
  logo: '/logo.png',
  dynamicImport: {},
  manifest: {},
  hash: true,
  alias: {
    demoHook: process.cwd() + '/packages/hooks/src/index.ts',
  },
  //引入站点
  resolve: {
    includes: ['docs', 'packages/hooks/src'],
  },
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    },
    { rel: 'stylesheet', href: '/style.css' },
  ],
  //导航栏的配置
  navs: [
    { title: '指南', path: '/guide' },
    { title: 'Hooks', path: '/hooks' },
    { title: 'GitHub', path: 'https://github.com/LiangHaley/LiangHaley.github.io' },
  ],
  //指向的docs文件夹下的路径，默认Index
  menus: {
    '/': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '介绍', // 左侧导航栏内容
        path: '/guide',
      },
    ],
    '/hooks': menus,
  },
};
