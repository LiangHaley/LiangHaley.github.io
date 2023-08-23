import React from "react";
import { useCookieState } from 'demo-hooksliang';
export default ()=>{
    const [message,setMessage] = useCookieState('useCookieStatestr');
    return (<input 
        value={message}
        placeholder="Please enter code some words"
        onChange={(e) => setMessage(e.target.value)}
        style={{width:300}}
    />)
}