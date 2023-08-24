import {useState, useRef, useCallback} from 'react'
function useGetState(initialState){
   const [state,setState] = useState(initialState);
   const stateRef = useRef(state);
   stateRef.current = state;
   const getState = useCallback(()=>stateRef.current,[]);//缓存的是一个函数
   return [state,setState,getState];
}
export default useGetState;
