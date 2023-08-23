import {useMemo, useState} from 'react'
type defultFn = () =>void;
export interface Actions<T>{
    setLeft:defultFn;
    setRight:defultFn;
    set: (value: T) => void;
    toggle:defultFn;
}
function useToggle<T = boolean>():[boolean,Actions<T>];
function useToggle< D , R>(defaultValue:D,reverseValue:R):[ D | R,Actions<D|R>]
//返回结构为D或R
function useToggle<D,R>(defaultValue:D = false as D ,reversevalue?:R){
    const [state,setState] = useState<D | R>(defaultValue);
    const actions = useMemo(()=>{
        const reversevalueOrigin = (reversevalue === undefined ? !defaultValue : reversevalue) as D|R;
        const toggle = () =>setState((s) => (s === defaultValue ? reversevalueOrigin : defaultValue));
        const set = (value: D | R) => setState(value);
        const setLeft = () =>setState(defaultValue);
        const setRight = () =>setState(reversevalueOrigin);
        return {
            toggle,
            setLeft,
            set,
            setRight
        }
    },[])
    return [state, actions];
}
export default useToggle