type DebounceOptions = {
    wait?: number;
    leading?: boolean;
    trailing?: boolean;
    maxWait?: number;
};
type noop = (...args: any[]) => any;
declare function useDebounceFn<T extends noop>(fncall: T, options?: DebounceOptions): any;
export default useDebounceFn;
