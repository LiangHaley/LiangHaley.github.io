declare function useMap(initialValue: any): readonly [Map<unknown, unknown>, {
    readonly set: (key: any, entry: any) => void;
    readonly setAll: (newMap: any) => void;
    readonly remove: (key: any) => void;
    readonly reset: () => void;
    readonly get: (key: any) => unknown;
}];
export default useMap;
