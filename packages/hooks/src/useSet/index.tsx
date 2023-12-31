import { useState } from 'react';
import useMemoizedFn from '../useMemoizedFn';
function useSet(initValue){
    const getInitValue = () => new Set(initValue);
    const [set,setSet] =useState(getInitValue);
    const add = (key) =>{
        if (set.has(key)) {
            return;
          }
          setSet((prevSet) => {
            const temp = new Set(prevSet);
            temp.add(key);
            return temp;
          });
    }
    const remove = (key) =>{
        if(!set.has(key)){
            return
        }
        setSet((prevSet) => {
            const temp = new Set(prevSet);
            temp.delete(key);
            return temp;
          });
    }
    const reset = () => setSet(getInitValue());

    return [
        set,
        {
        add: useMemoizedFn(add),
        remove: useMemoizedFn(remove),
        reset: useMemoizedFn(reset),
        },
    ] as const;
}

export default useSet;