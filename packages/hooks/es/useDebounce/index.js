import { __read } from "tslib";
import { useEffect, useState } from 'react';
import useDebounceFn from '../useDebounceFn';
function useDebounce(value, options) {
  var _a = __read(useState(value), 2),
    debounced = _a[0],
    setDebounced = _a[1];
  //只获取useDebounceFn 中返回值 run
  var run = useDebounceFn(function () {
    setDebounced(value);
  }, options).run;
  //执行副作用函数
  useEffect(function () {
    run();
  }, [value]);
  return debounced;
}
export default useDebounce;