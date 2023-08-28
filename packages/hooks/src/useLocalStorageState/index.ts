import { isFunction, isUndef } from '../utils';
import {useState} from 'react';
import useUpdateEffect from '../useUpdateEffect'
import useMemoizedFn from '../useMemoizedFn';
const isBrowser = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
interface Options<T> {
    defaultValue?: T | (() => T);
    serializer?: (value: T) => string;
    deserializer?: (value: string) => T;
    onError?: (error: unknown) => void;
  }
function createUseStorageState(getStorage: () => Storage | undefined) {
    function useStorageState<T>(key: string, options: Options<T> = {}) {
      let storage: Storage | undefined;
      const {
        onError = (e) => {
          console.error(e);
        },
      } = options;
  
      // https://github.com/alibaba/hooks/issues/800
      try {
        storage = getStorage();
      } catch (err) {
        onError(err);
      }
  
      const serializer = (value: T) => {
        if (options.serializer) {
          return options.serializer(value);
        }
        return JSON.stringify(value);
      };
  
      const deserializer = (value: string): T => {
        if (options.deserializer) {
          return options.deserializer(value);
        }
        return JSON.parse(value);
      };
  
      function getStoredValue() {
        try {
          const raw = storage?.getItem(key);
          if (raw) {
            return deserializer(raw);
          }
        } catch (e) {
          onError(e);
        }
        if (isFunction(options.defaultValue)) {
          return options.defaultValue();
        }
        return options.defaultValue;
      }
  
      const [state, setState] = useState(getStoredValue);
  
      useUpdateEffect(() => {
        setState(getStoredValue());
      }, [key]);
  
      const updateState = (value) => {
        const currentState = isFunction(value) ? value(state) : value;
        setState(currentState);
  
        if (isUndef(currentState)) {
          storage?.removeItem(key);
        } else {
          try {
            storage?.setItem(key, serializer(currentState));
          } catch (e) {
            console.error(e);
          }
        }
      };
  
      return [state, useMemoizedFn(updateState)] as const;
    }
    return useStorageState;
  }
  

  const useLocalStorageState = createUseStorageState(() => (isBrowser ? localStorage : undefined));

  export default useLocalStorageState;