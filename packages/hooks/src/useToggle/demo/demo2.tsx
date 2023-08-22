import React from "react";
import {useToggle} from 'demoHook';
export default ()=>{
    const [state,{toggle,setLeft,setRight}] = useToggle("HaleyLiang","LiangHaley");
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