// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useBoolean/demo/demo1.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useCookieState/demo/demo1.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useCookieState/demo/demo2.tsx?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useCookieState/demo/demo3.tsx?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useDebounce/demo/demo1.tsx?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useDebounceFn/demo/demo1.tsx?dumi-raw-code';
import rawCode7 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useGetState/demo/demo1.tsx?dumi-raw-code';
import rawCode8 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useLatest/demo/demo1.tsx?dumi-raw-code';
import rawCode9 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useLocalStorageState/demo/demo1.tsx?dumi-raw-code';
import rawCode10 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useLocalStorageState/demo/demo2.tsx?dumi-raw-code';
import rawCode11 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useLocalStorageState/demo/demo3.tsx?dumi-raw-code';
import rawCode12 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useMap/demo/demo.tsx?dumi-raw-code';
import rawCode13 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useMemoizedFn/demo/demo1.tsx?dumi-raw-code';
import rawCode14 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useToggle/demo/demo1.tsx?dumi-raw-code';
import rawCode15 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useToggle/demo/demo2.tsx?dumi-raw-code';
import rawCode16 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useUnmount/demo/demo1.tsx?dumi-raw-code';
import rawCode17 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useUpdateEffect/demo/demo.tsx?dumi-raw-code';

export default {
  'useboolean-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useBoolean/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"demo-hooksliang":{"version":"0.0.4"}},"title":"基础用法","description":"<div class=\"markdown\"><p>切换 boolean，可以接收默认值。</p></div>","identifier":"useboolean-demo1"},
  },
  'usecookiestate-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useCookieState/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode2}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"demo-hooksliang":{"version":"0.0.4"}},"identifier":"usecookiestate-demo1"},
  },
  'usecookiestate-demo2': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useCookieState/demo/demo2.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode3}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"demo-hooksliang":{"version":"0.0.4"}},"identifier":"usecookiestate-demo2"},
  },
  'usecookiestate-demo3': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useCookieState/demo/demo3.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode4}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"demo-hooksliang":{"version":"0.0.4"}},"title":"使用 option 配置 Cookie","description":"<div class=\"markdown\"><p>可配置属性：默认值、有效时间、路径、域名、协议、跨域等，详见 Options 文档。</p></div>","identifier":"usecookiestate-demo3"},
  },
  'usedebounce-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useDebounce/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode5}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"demo-hooksliang":{"version":"0.0.4"}},"title":"基础用法","description":"<div class=\"markdown\"><p>频繁调用 run，但只会在所有点击完成 500ms 后执行一次相关函数</p></div>","identifier":"usedebounce-demo1"},
  },
  'usedebouncefn-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useDebounceFn/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode6}},"dependencies":{"demo-hooksliang":{"version":"0.0.4"},"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"}},"title":"基础用法","description":"<div class=\"markdown\"><p>频繁调用 run，但只会在所有点击完成 500ms 后执行一次相关函数</p></div>","identifier":"usedebouncefn-demo1"},
  },
  'usegetstate-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useGetState/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode7}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"demo-hooksliang":{"version":"0.0.4"}},"identifier":"usegetstate-demo1"},
  },
  'uselatest-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useLatest/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode8}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"demo-hooksliang":{"version":"0.0.4"}},"identifier":"uselatest-demo1"},
  },
  'uselocalstoragestate-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useLocalStorageState/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode9}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"demo-hooksliang":{"version":"0.0.4"}},"title":"将 state 存储在 localStorage 中","description":"<div class=\"markdown\"><p>刷新页面后，可以看到输入框中的内容被从 localStorage 中恢复了。</p></div>","identifier":"uselocalstoragestate-demo1"},
  },
  'uselocalstoragestate-demo2': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useLocalStorageState/demo/demo2.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode10}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"demo-hooksliang":{"version":"0.0.4"}},"title":"存储数组或对象等复杂类型","description":"<div class=\"markdown\"><p>useLocalStorageState 会自动处理序列化和反序列化的操作。</p></div>","identifier":"uselocalstoragestate-demo2"},
  },
  'uselocalstoragestate-demo3': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useLocalStorageState/demo/demo3.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode11}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"demo-hooksliang":{"version":"0.0.4"}},"title":"自定义序列化和反序列化函数","description":"<div class=\"markdown\"><p>对于普通的字符串，可能你不需要默认的 <code>JSON.stringify/JSON.parse</code> 来序列化。</p></div>","identifier":"uselocalstoragestate-demo3"},
  },
  'usemap-demo': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useMap/demo/demo.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode12}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"demo-hooksliang":{"version":"0.0.4"}},"identifier":"usemap-demo"},
  },
  'usememoizedfn-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useMemoizedFn/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode13}},"dependencies":{"react":{"version":">=16.9.0"},"demo-hooksliang":{"version":"0.0.4"},"antd":{"version":"5.8.4"},"react-dom":{"version":">=16.9.0"}},"identifier":"usememoizedfn-demo1"},
  },
  'usetoggle-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useToggle/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode14}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"demo-hooksliang":{"version":"0.0.4"}},"identifier":"usetoggle-demo1"},
  },
  'usetoggle-demo2': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useToggle/demo/demo2.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode15}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"demo-hooksliang":{"version":"0.0.4"}},"identifier":"usetoggle-demo2"},
  },
  'useunmount-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useUnmount/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode16}},"dependencies":{"demo-hooksliang":{"version":"0.0.4"},"antd":{"version":"5.8.4"},"react":{"version":">=16.9.0"},"react-dom":{"version":">=16.9.0"}},"identifier":"useunmount-demo1"},
  },
  'useupdateeffect-demo': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useUpdateEffect/demo/demo.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode17}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"demo-hooksliang":{"version":"0.0.4"}},"title":"基础用法","description":"<div class=\"markdown\"><p>使用上与 useEffect 完全相同，只是它忽略了首次执行，只在依赖项更新时执行。</p></div>","identifier":"useupdateeffect-demo"},
  },
};
