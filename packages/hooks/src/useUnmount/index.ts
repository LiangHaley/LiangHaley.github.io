import {useEffect} from 'react'
import useLatest from '../useLatest'
import { isFunction } from '../utils';
type defultFn = () =>void;
export interface Actions<T>{
    setLeft:defultFn;
    setRight:defultFn;
    toggle:defultFn;
}
function useUnmount<D,R>(defaultValue:D = false as D ,reversevalue?:R){
 
}
export default useUnmount