// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useBoolean/demo/demo1.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useCookieState/demo/demo1.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useLatest/demo/demo1.tsx?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useToggle/demo/demo1.tsx?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useToggle/demo/demo2.tsx?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useUnmount/demo/demo1.tsx?dumi-raw-code';

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
    previewerProps: {"sources":{"_":{"tsx":rawCode2}},"dependencies":{},"identifier":"usecookiestate-demo1"},
  },
  'uselatest-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useLatest/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode3}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"demo-hooksliang":{"version":"0.0.4"}},"identifier":"uselatest-demo1"},
  },
  'usetoggle-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useToggle/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode4}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"demo-hooksliang":{"version":"0.0.4"}},"identifier":"usetoggle-demo1"},
  },
  'usetoggle-demo2': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useToggle/demo/demo2.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode5}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"demo-hooksliang":{"version":"0.0.4"}},"identifier":"usetoggle-demo2"},
  },
  'useunmount-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useUnmount/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode6}},"dependencies":{},"identifier":"useunmount-demo1"},
  },
};
