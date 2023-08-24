import { useState } from 'react';
import useMemoizedFn from '../useMemoizedFn';
function useMap(initialValue){
    const getInitValue = () =>new Map(initialValue);
    const [map,setMap] = useState(getInitValue);
    const set = (key,entry)=>{
        setMap((prev)=>{
            const temp = new Map(prev);
            temp.set(key,entry);
            return temp
        })
    }
    const setAll = (newMap)=>{
        setMap(new Map(newMap));
    }
    const remove = (key) =>{
        setMap((prev)=>{
            const temp = new Map(prev);
            temp.delete(key);
            return temp;
        })
    }
    const reset = () => setMap(getInitValue());

    const get = (key) => map.get(key);
    return[
            map,
            {
              set: useMemoizedFn(set),
              setAll: useMemoizedFn(setAll),
              remove: useMemoizedFn(remove),
              reset: useMemoizedFn(reset),
              get: useMemoizedFn(get),
            },
          ] as const
}
export default useMap