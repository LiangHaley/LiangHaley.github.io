import {useMemo} from 'react'
import useToggle from '../useToggle'
export interface Actions {
    setTrue: () => void;
    setFalse: () => void;
    // set: (value: boolean) => void;
    toggle: () => void;
  }
  function useBoolean(defaultValue = false): [boolean, Actions] {
    const [state, { toggle, setLeft,setRight }] = useToggle(defaultValue,!!defaultValue);

    const actions: Actions = useMemo(() => {
        const setTrue = () =>setLeft();
        const setFalse = ()=>setRight();
        return {
            toggle,
            // set:(v) =>set(!!v),
            setTrue,
            setFalse
        }
    },[]);
    return [state,actions] 
}
export default useBoolean