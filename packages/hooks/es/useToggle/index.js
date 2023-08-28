import { __read } from "tslib";
import { useMemo, useState } from 'react';
//返回结构为D或R
function useToggle(defaultValue, reversevalue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  var _a = __read(useState(defaultValue), 2),
    state = _a[0],
    setState = _a[1];
  var actions = useMemo(function () {
    var reversevalueOrigin = reversevalue === undefined ? !defaultValue : reversevalue;
    var toggle = function () {
      return setState(function (s) {
        return s === defaultValue ? reversevalueOrigin : defaultValue;
      });
    };
    var set = function (value) {
      return setState(value);
    };
    var setLeft = function () {
      return setState(defaultValue);
    };
    var setRight = function () {
      return setState(reversevalueOrigin);
    };
    return {
      toggle: toggle,
      setLeft: setLeft,
      set: set,
      setRight: setRight
    };
  }, []);
  return [state, actions];
}
export default useToggle;