/**
 * title:useToggle基础用法
 * desc:当action中的值没有初始化时，默认是false
 */
import React from "react";
import {useToggle} from 'demoHook';
export default ()=>{
    const [state,{toggle,setLeft,setRight}] = useToggle();
    return <div>
        <p>当前state 的值为:{`${state}`}</p>
        <p>
            <button type ="button" onClick={toggle}>toggle切换</button>
        </p>
        <p>
            <button type ="button" onClick={setLeft}>setLeft切换</button>
        </p>
        <p>
            <button type ="button" onClick={setRight}>setRight切换</button>
        </p>
    </div>
}