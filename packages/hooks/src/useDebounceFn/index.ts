/*
 * @Author: Jack11023 1018719623@qq.com
 * @Date: 2023-08-23 18:36:44
 * @LastEditors: Jack11023 1018719623@qq.com
 * @LastEditTime: 2023-08-27 15:11:35
 * @FilePath: \encode-hooks-1.0c:\Users\MS\Desktop\project\PnpmReact\packages\hooks\src\useDebounceFn\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// @ts-nocheck
import { debounce } from '../utils/lodash-polyfill';
import {useMemo} from 'react'
import useLatest from '../useLatest';
import useUnmount from '../useUnmount';
type DebounceOptions = {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
}
// import { isFunction } from '../utils';
// import isDev from '../utils/isDev';
type noop = (...args: any[]) => any;
function useDebounceFn<T extends noop>(fncall:T, options?:DebounceOptions):any { 
    const fnRef = useLatest(fncall); //获取到fn函数
    // console.log('fnRef',fnRef)
  //获取wait的值
    const wait = options?.wait ?? 1000;//间隔时间
  //useMemo 将内容存储在缓冲区，内容相同不重新渲染
    const debounced = useMemo(
      () =>
        debounce(
          (...args) => {
            return fnRef.current;
          },
          wait,
          options,
        ),
      [],
    );
    //当组件卸载的时候
    useUnmount(() => {
      debounced.cancel();//主要调用load-es
    });
  
    return {
      run: debounced,
      cancel: debounced.cancel,
      flush: debounced.flush,
    };
  }
  
  export default useDebounceFn;