type defultFn = () => void;
export interface Actions<T> {
    setLeft: defultFn;
    setRight: defultFn;
    set: (value: T) => void;
    toggle: defultFn;
}
declare function useToggle<T = boolean>(): [boolean, Actions<T>];
declare function useToggle<D, R>(defaultValue: D, reverseValue: R): [D | R, Actions<D | R>];
export default useToggle;
