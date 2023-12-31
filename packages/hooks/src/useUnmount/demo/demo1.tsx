import {useBoolean,useUnmount} from 'demo-hooksliang';
import {message} from 'antd';
import React from 'react'

const MyComponent = () =>{
    useUnmount(()=>{
        message.info('unmount');
    })
    return <p>Hello World!</p>
}
export default()=>{
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