import React,{useState,useCallback} from 'react';
import { useMemoizedFn } from 'demo-hooksliang';
import{message} from 'antd'

export default () => {
  const [count,setCount] = useState(0);
  const callbackFn = useCallback(()=>{
    message.info(`Current count is ${count}`);
  },[count])
  const momoizedFn = useMemoizedFn(()=>{
    message.info(`Current count is ${count}`);
  })
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={()=>setCount((c)=>c+1)}>
        Add count
      </button>
      <div style = {{marginTop:16}}>
        <button type="button" onClick={callbackFn}>
          callbackFn
        </button>
        <button type="button" onClick={momoizedFn} style={{ marginLeft: 8 }}>
        momoizedFn
        </button>
      </div>
    </div>
  );
};