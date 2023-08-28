/*
 * @Author: Jack11023 1018719623@qq.com
 * @Date: 2023-08-28 10:11:52
 * @LastEditors: Jack11023 1018719623@qq.com
 * @LastEditTime: 2023-08-28 10:12:32
 * @FilePath: \PnpmReact\packages\hooks\src\useSessionStorageState\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createUseStorageState } from '../createUseStorageState';
const isBrowser = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );

const useSessionStorageState = createUseStorageState(() =>
  isBrowser ? sessionStorage : undefined,
);

export default useSessionStorageState;
