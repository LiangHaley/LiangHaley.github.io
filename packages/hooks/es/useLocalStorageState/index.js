import { __read } from "tslib";
import { isFunction, isUndef } from '../utils';
import { useState } from 'react';
import useUpdateEffect from '../useUpdateEffect';
import useMemoizedFn from '../useMemoizedFn';
var isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function createUseStorageState(getStorage) {
  function useStorageState(key, options) {
    if (options === void 0) {
      options = {};
    }
    var storage;
    var _a = options.onError,
      onError = _a === void 0 ? function (e) {
        console.error(e);
      } : _a;
    // https://github.com/alibaba/hooks/issues/800
    try {
      storage = getStorage();
    } catch (err) {
      onError(err);
    }
    var serializer = function (value) {
      if (options.serializer) {
        return options.serializer(value);
      }
      return JSON.stringify(value);
    };
    var deserializer = function (value) {
      if (options.deserializer) {
        return options.deserializer(value);
      }
      return JSON.parse(value);
    };
    function getStoredValue() {
      try {
        var raw = storage === null || storage === void 0 ? void 0 : storage.getItem(key);
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
    var _b = __read(useState(getStoredValue), 2),
      state = _b[0],
      setState = _b[1];
    useUpdateEffect(function () {
      setState(getStoredValue());
    }, [key]);
    var updateState = function (value) {
      var currentState = isFunction(value) ? value(state) : value;
      setState(currentState);
      if (isUndef(currentState)) {
        storage === null || storage === void 0 ? void 0 : storage.removeItem(key);
      } else {
        try {
          storage === null || storage === void 0 ? void 0 : storage.setItem(key, serializer(currentState));
        } catch (e) {
          console.error(e);
        }
      }
    };
    return [state, useMemoizedFn(updateState)];
  }
  return useStorageState;
}
var useLocalStorageState = createUseStorageState(function () {
  return isBrowser ? localStorage : undefined;
});
export default useLocalStorageState;