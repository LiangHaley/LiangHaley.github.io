interface Options<T> {
    defaultValue?: T | (() => T);
    serializer?: (value: T) => string;
    deserializer?: (value: string) => T;
    onError?: (error: unknown) => void;
}
declare const useLocalStorageState: <T>(key: string, options?: Options<T>) => readonly [T | undefined, (value: any) => void];
export default useLocalStorageState;
