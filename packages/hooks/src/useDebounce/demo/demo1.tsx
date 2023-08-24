/**
 * title: 基础用法
 * desc: 频繁调用 run，但只会在所有点击完成 500ms 后执行一次相关函数
 */
import React,{useState} from 'react';
import { useDebounce } from 'demo-hooksliang';

export default () => {
  const [value, setValue] = useState<string>();
  const debouncedValue = useDebounce(value,{wait:500});
  console.log(debouncedValue)
  return (
    <div>
      <input 
        value = {value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Typed value"
        style={{ width: 280 }}
      />
      <p style={{ marginTop: 16 }}>DebouncedValue: {debouncedValue}</p>
    </div>
  );
};
