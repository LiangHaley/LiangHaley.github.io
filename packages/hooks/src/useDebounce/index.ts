import {useEffect,useState} from 'react'
import useDebounceFn from '../useDebounceFn';
interface DebounceOptions {
    wait?: number;
    leading?: boolean;
    trailing?: boolean;
    maxWait?: number;
  }
  function useDebounce<T>(value,options){
   const [debounced,setDebounced] = useState(value);
   //只获取useDebounceFn 中返回值 run
   const {run} = useDebounceFn(()=>{
        setDebounced(value)
   },options);
   //执行副作用函数
   useEffect(()=>{
    run()
   },[value]);
   return debounced
}
export default useDebounce