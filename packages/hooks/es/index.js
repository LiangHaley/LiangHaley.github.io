import useToggle from "./useToggle";
import useBoolean from './useBoolean';
import useUnmount from './useUnmount';
// import useCookieState from './useCookieState'
import useLatest from './useLatest';
import useMemoizedFn from './useMemoizedFn';
import useCookieState from './useCookieState';
import useDebounceFn from './useDebounceFn';
import useDebounce from './useDebounce';
import useGetState from './useGetState';
import useUpdateEffect from './useUpdateEffect';
import useLocalStorageState from './useLocalStorageState';
import useMap from "./useMap";
import usePrevious from "./usePrevious";
import Updater from './update';
//实例化该类
var up = new Updater({
  timer: 2000
});
//未更新通知
up.on('no-update', function () {
  console.log('未更新');
});
//更新通知
up.on('update', function () {
  console.log('更新了');
});
export { useUnmount, useToggle, useBoolean, useLatest, useMemoizedFn, useCookieState, useDebounceFn, useDebounce, useGetState, useUpdateEffect, useLocalStorageState, useMap, usePrevious };