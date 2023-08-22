// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useToggle/demo/demo1.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useToggle/demo/demo2.tsx?dumi-raw-code';

export default {
  'usetoggle-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useToggle/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"usetoggle-demo1"},
  },
  'usetoggle-demo2': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useToggle/demo/demo2.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode2}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"usetoggle-demo2"},
  },
};
