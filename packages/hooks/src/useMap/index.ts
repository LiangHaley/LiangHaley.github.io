/*
 * @Author: Jack11023 1018719623@qq.com
 * @Date: 2023-08-24 12:18:43
 * @LastEditors: Jack11023 1018719623@qq.com
 * @LastEditTime: 2023-08-28 09:08:00
 * @FilePath: \PnpmReact\packages\hooks\src\useMap\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from 'react';
import useMemoizedFn from '../useMemoizedFn';
function useMap(initialValue) {
  const getInitValue = () => new Map(initialValue);
  const [map, setMap] = useState(getInitValue);
  const set = (key, entry) => {
    setMap((prev) => {
      const temp = new Map(prev);
      temp.set(key, entry);
      return temp;
    });
  };
  const setAll = (newMap) => {
    setMap(new Map(newMap));
  };
  const remove = (key) => {
    setMap((prev) => {
      const temp = new Map(prev);
      temp.delete(key);
      return temp;
    });
  };
  const reset = () => setMap(getInitValue());

  const get = (key) => map.get(key);
  return [
    map,
    {
      set: useMemoizedFn(set),
      setAll: useMemoizedFn(setAll),
      remove: useMemoizedFn(remove),
      reset: useMemoizedFn(reset),
      get: useMemoizedFn(get),
    },
  ] as const;
}
export default useMap;
