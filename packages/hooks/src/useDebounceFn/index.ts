import { debounce } from '../utils/lodash-polyfill';
import {useMemo} from 'react'
import useLatest from '../useLatest';
import useUnmount from '../useUnmount';
import { isFunction } from '../utils';
import isDev from '../utils/isDev';
function useDebounceFn<T>(fn: T, options) {
    if (isDev) {
      if (!isFunction(fn)) {
        console.error(`useDebounceFn expected parameter is a function, got ${typeof fn}`);
      }
    }
  
    const fnRef = useLatest(fn); //获取到fn函数
    console.log('fnRef',fnRef)
  //获取wait的值
    const wait = options?.wait ?? 1000;//间隔时间
  //useMemo 将内容存储在缓冲区，内容相同不重新渲染
    const debounced = useMemo(
      () =>
        debounce(
          (...args: Parameters<T>): ReturnType<T> => {
            return fnRef.current(...args);
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