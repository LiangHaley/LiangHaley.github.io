// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from 'C:/Users/MS/Desktop/project/PnpmReact/node_modules/.pnpm/@umijs+runtime@3.5.41_react@16.14.0/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')})],
    "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ 'C:/Users/MS/Desktop/project/PnpmReact/node_modules/.pnpm/@umijs+preset-dumi@1.1.53_85bf81582067e821a8947cbc85ff0ead/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'C:/Users/MS/Desktop/project/PnpmReact/node_modules/.pnpm/dumi-theme-default@1.1.24_a97eb9cb6c2b169b3a58ee65300efb0a/node_modules/dumi-theme-default/es/layout.js')})],
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__index.md' */'C:/Users/MS/Desktop/project/PnpmReact/docs/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1692773863000,
          "title": "首页",
          "hero": {
            "image": "/short-logo.png",
            "desc": "<div class=\"markdown\"><p>React 业务 Hooks</p></div>",
            "actions": [
              {
                "text": "指南",
                "link": "/guide"
              },
              {
                "text": "Hooks 列表",
                "link": "/hooks"
              }
            ]
          },
          "footer": "<div class=\"markdown\"><p>Copyright (c) © 2023 by encode studio, All Rights Reserved</p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "✨ 特性",
              "heading": "-特性"
            },
            {
              "depth": 2,
              "value": "📦 安装",
              "heading": "-安装"
            },
            {
              "depth": 2,
              "value": "🔨 使用",
              "heading": "-使用"
            }
          ]
        },
        "title": "首页 - react hooks"
      },
      {
        "path": "/guide",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__guide__index.md' */'C:/Users/MS/Desktop/project/PnpmReact/docs/guide/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/guide/index.md",
          "updatedTime": 1692773863000,
          "slugs": [
            {
              "depth": 1,
              "value": "encode-hooks",
              "heading": "encode-hooks"
            },
            {
              "depth": 2,
              "value": "⛰️ 能力支持",
              "heading": "️-能力支持"
            },
            {
              "depth": 3,
              "value": "1. 可靠的代码健壮",
              "heading": "1-可靠的代码健壮"
            },
            {
              "depth": 3,
              "value": "2. 完善的文档能力",
              "heading": "2-完善的文档能力"
            },
            {
              "depth": 3,
              "value": "3. 完整的测试用例",
              "heading": "3-完整的测试用例"
            },
            {
              "depth": 2,
              "value": "🌟 设计目的",
              "heading": "-设计目的"
            },
            {
              "depth": 2,
              "value": "⚒️ 技术选型",
              "heading": "️-技术选型"
            },
            {
              "depth": 3,
              "value": "包管理工具 -- pnpm",
              "heading": "包管理工具----pnpm"
            },
            {
              "depth": 3,
              "value": "构建工具 -- webpack & gulp",
              "heading": "构建工具----webpack--gulp"
            },
            {
              "depth": 3,
              "value": "静态文件打包工具 -- dumi",
              "heading": "静态文件打包工具----dumi"
            },
            {
              "depth": 3,
              "value": "测试工具 -- jest",
              "heading": "测试工具----jest"
            },
            {
              "depth": 2,
              "value": "📧 联系",
              "heading": "-联系"
            }
          ],
          "title": "encode-hooks",
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "encode-hooks - react hooks"
      },
      {
        "path": "/hooks/use-boolean",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useBoolean__index.md' */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useBoolean/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useBoolean/index.md",
          "updatedTime": 1692773863000,
          "nav": {
            "path": "/hooks",
            "title": "UseBoolean"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useBoolean",
              "heading": "useboolean"
            },
            {
              "depth": 2,
              "value": "demo",
              "heading": "demo"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Actions",
              "heading": "actions"
            }
          ],
          "title": "useBoolean",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-boolean",
            "title": "UseBoolean"
          }
        },
        "title": "useBoolean - react hooks"
      },
      {
        "path": "/hooks/use-cookie-state",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useCookieState__index.md' */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useCookieState/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useCookieState/index.md",
          "updatedTime": 1692788094000,
          "nav": {
            "path": "/hooks",
            "title": "UseCookieState"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useCookieState",
              "heading": "usecookiestate"
            },
            {
              "depth": 2,
              "value": "demo",
              "heading": "demo"
            },
            {
              "depth": 3,
              "value": "将 state 存储在 Cookie 中",
              "heading": "将-state-存储在-cookie-中"
            },
            {
              "depth": 3,
              "value": "setState 可以接收函数",
              "heading": "setstate-可以接收函数"
            },
            {
              "depth": 3,
              "value": "使用 option 配置 Cookie",
              "heading": "使用-option-配置-cookie"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            }
          ],
          "title": "useCookieState",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-cookie-state",
            "title": "UseCookieState"
          }
        },
        "title": "useCookieState - react hooks"
      },
      {
        "path": "/hooks/use-debounce",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useDebounce__index.md' */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useDebounce/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useDebounce/index.md",
          "updatedTime": 1692788094000,
          "nav": {
            "path": "/hooks",
            "title": "UseDebounce"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useDebounce",
              "heading": "usedebounce"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            }
          ],
          "title": "useDebounce",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-debounce",
            "title": "UseDebounce"
          }
        },
        "title": "useDebounce - react hooks"
      },
      {
        "path": "/hooks/use-debounce-fn",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useDebounceFn__index.md' */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useDebounceFn/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useDebounceFn/index.md",
          "updatedTime": 1692788094000,
          "nav": {
            "path": "/hooks",
            "title": "UseDebounceFn"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useDebounceFn",
              "heading": "usedebouncefn"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            }
          ],
          "title": "useDebounceFn",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-debounce-fn",
            "title": "UseDebounceFn"
          }
        },
        "title": "useDebounceFn - react hooks"
      },
      {
        "path": "/hooks/use-get-state",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useGetState__index.md' */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useGetState/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useGetState/index.md",
          "updatedTime": 1692848073113,
          "nav": {
            "path": "/hooks",
            "title": "UseGetState"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useGetState",
              "heading": "usegetstate"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "类型定义",
              "heading": "类型定义"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "useGetState",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-get-state",
            "title": "UseGetState"
          }
        },
        "title": "useGetState - react hooks"
      },
      {
        "path": "/hooks/use-latest",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useLatest__index.md' */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useLatest/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useLatest/index.md",
          "updatedTime": 1692773863000,
          "nav": {
            "path": "/hooks",
            "title": "UseLatest"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useLatest",
              "heading": "uselatest"
            },
            {
              "depth": 2,
              "value": "demo",
              "heading": "demo"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "useLatest",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-latest",
            "title": "UseLatest"
          }
        },
        "title": "useLatest - react hooks"
      },
      {
        "path": "/hooks/use-local-storage-state",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useLocalStorageState__index.md' */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useLocalStorageState/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useLocalStorageState/index.md",
          "updatedTime": 1692850607630,
          "nav": {
            "path": "/hooks",
            "title": "UseLocalStorageState"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useLocalStorageState",
              "heading": "uselocalstoragestate"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "将 state 存储在 localStorage 中",
              "heading": "将-state-存储在-localstorage-中"
            },
            {
              "depth": 3,
              "value": "存储复杂类型数据",
              "heading": "存储复杂类型数据"
            },
            {
              "depth": 3,
              "value": "自定义序列化和反序列化函数",
              "heading": "自定义序列化和反序列化函数"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            },
            {
              "depth": 2,
              "value": "备注",
              "heading": "备注"
            }
          ],
          "title": "useLocalStorageState",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-local-storage-state",
            "title": "UseLocalStorageState"
          }
        },
        "title": "useLocalStorageState - react hooks"
      },
      {
        "path": "/hooks/use-map",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useMap__index.md' */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useMap/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useMap/index.md",
          "updatedTime": 1692851237364,
          "nav": {
            "path": "/hooks",
            "title": "UseMap"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useMap",
              "heading": "usemap"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            }
          ],
          "title": "useMap",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-map",
            "title": "UseMap"
          }
        },
        "title": "useMap - react hooks"
      },
      {
        "path": "/hooks/use-memoized-fn",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useMemoizedFn__index.md' */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useMemoizedFn/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useMemoizedFn/index.md",
          "updatedTime": 1692788094000,
          "nav": {
            "path": "/hooks",
            "title": "UseMemoizedFn"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useMemoizedFn",
              "heading": "usememoizedfn"
            },
            {
              "depth": 2,
              "value": "demo",
              "heading": "demo"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "params",
              "heading": "params"
            }
          ],
          "title": "useMemoizedFn",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-memoized-fn",
            "title": "UseMemoizedFn"
          }
        },
        "title": "useMemoizedFn - react hooks"
      },
      {
        "path": "/hooks/use-toggle",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useToggle__index.md' */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useToggle/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useToggle/index.md",
          "updatedTime": 1692773863000,
          "nav": {
            "path": "/hooks",
            "title": "UseToggle"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useToggle",
              "heading": "usetoggle"
            },
            {
              "depth": 2,
              "value": "demo",
              "heading": "demo"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Actions",
              "heading": "actions"
            }
          ],
          "title": "useToggle",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-toggle",
            "title": "UseToggle"
          }
        },
        "title": "useToggle - react hooks"
      },
      {
        "path": "/hooks/use-unmount",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useUnmount__index.md' */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useUnmount/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useUnmount/index.md",
          "updatedTime": 1692788094000,
          "nav": {
            "path": "/hooks",
            "title": "UseUnmount"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useUnmount",
              "heading": "useunmount"
            },
            {
              "depth": 2,
              "value": "demo",
              "heading": "demo"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "参数",
              "heading": "参数"
            }
          ],
          "title": "useUnmount",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-unmount",
            "title": "UseUnmount"
          }
        },
        "title": "useUnmount - react hooks"
      },
      {
        "path": "/hooks/use-update-effect",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useUpdateEffect__index.md' */'C:/Users/MS/Desktop/project/PnpmReact/packages/hooks/src/useUpdateEffect/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useUpdateEffect/index.md",
          "updatedTime": 1692849886090,
          "nav": {
            "path": "/hooks",
            "title": "UseUpdateEffect"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useUpdateEffect",
              "heading": "useupdateeffect"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "useUpdateEffect",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-update-effect",
            "title": "UseUpdateEffect"
          }
        },
        "title": "useUpdateEffect - react hooks"
      },
      {
        "path": "/hooks",
        "meta": {},
        "exact": true,
        "redirect": "/hooks/use-unmount"
      }
    ],
    "title": "react hooks",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
