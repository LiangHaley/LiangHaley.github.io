/*
 * @Author: Jack11023 1018719623@qq.com
 * @Date: 2023-08-23 10:37:05
 * @LastEditors: Jack11023 1018719623@qq.com
 * @LastEditTime: 2023-08-28 09:02:32
 * @FilePath: \PnpmReact\packages\hooks\src\useBoolean\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useMemo } from 'react';
import useToggle from '../useToggle';
export interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  set: (value: boolean) => void;
  toggle: () => void;
}
function useBoolean(defaultValue = false): [boolean, Actions] {
  const [state, { toggle, set }] = useToggle(!!defaultValue, !defaultValue);
  const actions: Actions = useMemo(() => {
    const setTrue = () => set(true);
    const setFalse = () => set(false);

    return {
      toggle,
      set: (v) => set(!!v),
      setTrue,
      setFalse,
    };
  }, []);
  return [state, actions];
}
export default useBoolean;
