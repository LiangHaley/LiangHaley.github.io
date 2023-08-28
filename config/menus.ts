/*
 * @Author: Jack11023 1018719623@qq.com
 * @Date: 2023-08-20 11:22:50
 * @LastEditors: Jack11023 1018719623@qq.com
 * @LastEditTime: 2023-08-28 11:19:17
 * @FilePath: \PnpmReact\config\menus.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const menus = [
  {
    title: '生命周期',
    children: ['useUnmount', 'useUnmountedRef'],
  },
  // {
  //   title: '请求',
  //   children: [
  //     'useRequest/doc/index',
  //     'useRequest/doc/basic',
  //     'useRequest/doc/loadingDelay',
  //     'useRequest/doc/polling',
  //     'useRequest/doc/ready',
  //     'useRequest/doc/refreshDeps',
  //     'useRequest/doc/refreshOnWindowFocus',
  //     'useRequest/doc/debounce',
  //     'useRequest/doc/throttle',
  //     'useRequest/doc/cache',
  //     'useRequest/doc/retry',
  //   ],
  // },
  {
    title: '状态',
    children: [
      'useBoolean',
      'useToggle',
      'useLatest',
      'useMemoizedFn',
      'useCookieState',
      'useDebounce',
      'useGetState',
      'useUpdateEffect',
      'useLocalStorageState',
      'useMap',
      'usePrevious',
      'useResetState',
      'useSafeState',
      'useSessionStorageState',
      'useSet',
      // 'useSetState',
    ],
  },
  {
    title: 'Effect',
    children: ['useDebounceFn'],
  },
];
