import useToggle from "./useToggle";
import useBoolean from './useBoolean'
import useUnmount from './useUnmount'
import useUnmountedRef from './useUnmountedRef'
// import useCookieState from './useCookieState'
import useLatest from './useLatest'
import useMemoizedFn from './useMemoizedFn'
import useCookieState from './useCookieState'
import useDebounceFn from './useDebounceFn'
import useDebounce from './useDebounce'
import useGetState from './useGetState'
import useUpdateEffect from './useUpdateEffect'
import useLocalStorageState from './useLocalStorageState'
import useMap from "./useMap";
import usePrevious from "./usePrevious";
import Updater from './update'
import useResetState from "./useResetState";
import useSafeState from "./useSafeState";
import useSessionStorageState from "./useSessionStorageState";
import useSet from './useSet'
import useSetState from './useSetState'

//实例化该类
const up = new Updater({
  timer:2000
})
//未更新通知
up.on('no-update',()=>{
 console.log('未更新')
})
//更新通知
up.on('update',()=>{
  console.log('更新了')
})
export{
    useUnmount,
    useUnmountedRef,
    useToggle,
    useBoolean,
    useLatest,
    useMemoizedFn,
    useCookieState,
    useDebounceFn,
    useDebounce,
    useGetState,
    useUpdateEffect,
    useLocalStorageState,
    useMap,
    usePrevious,
    useResetState,
    useSafeState,
    useSessionStorageState,
    useSet,
    useSetState
}