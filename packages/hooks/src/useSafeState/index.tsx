import { useCallback, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import useUnmount from '../useUnmount';
function useRafState(initialState){
    const ref = useRef(0);
    const [state,setState] = useState(initialState);
    const setRafState = useCallback((value)=>{
        cancelAnimationFrame(ref.current);
        ref.current = requestAnimationFrame(() => {
            setState(value);
          });
    },[])
    useUnmount(() => {
        cancelAnimationFrame(ref.current);
      });
    return [state,setRafState] as const    
}
export default useRafState