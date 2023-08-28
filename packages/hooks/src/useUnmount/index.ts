import { useEffect,useRef } from 'react';
// import useLatest from '../useLatest'
import { isFunction } from '../utils';
import isDev from '../utils/isDev';
function useLatest<T>(value: T): any {
  const ref = useRef(value);

  ref.current = value;
  return ref;
}
function useUnmount(fn: () => void) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(`useUnmount expeacted parameter is a function, got ${typeof fn}`);
    }
  }
  const fnRef = useLatest(fn);
  useEffect(
    () => () => {
      fnRef.current();
    },
    [],
  );
}
export default useUnmount;
