import React,{useEffect} from "react";
// 获取useCallback 返回的state
import {useGetState} from 'demo-hooksliang'
export default()=>{
    const [count,setCount,getCount] = useGetState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            console.log('interval count',getCount())
        },3000)
    },[])
    return <button onClick={() => setCount((count) => count + 1)}>count: {count}</button>;
}