import {useState} from 'react'
import type {Dispatch, SetStateAction} from 'react'
import useMemoizedFn from '../useMemoizedFn'
 type ResetState = () =>void
 const useResetState =(initialState) =>{
    const [state,setState] = useState(initialState);
    //使用useMemoizedFn 存储初始值
    const resetState = useMemoizedFn(()=>{
        setState(initialState)
    })
    return [state,setState,resetState]
 }
 export default useResetState;