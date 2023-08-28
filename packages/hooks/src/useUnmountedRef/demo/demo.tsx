import { useBoolean, useUnmountedRef} from 'demo-hooksliang';
import {message} from 'antd'
import React,{useEffect} from 'react';
const MyComponent =()=>{
    const unmountedRef =  useUnmountedRef();
    useEffect(()=>{
        setTimeout(()=>{
            if(!unmountedRef.current){
                message.info('component is alive');
            }
        })
    },[]);
    return <p>Hello World!</p>
}

export default ()=>{
    const [state,{toggle}] = useBoolean(true);
    return(
        <>
        <button type="button" onClick={toggle}>
            {state?'unmount':'mount'}
        </button>
        {state && <MyComponent></MyComponent>}
        </>
    )
}