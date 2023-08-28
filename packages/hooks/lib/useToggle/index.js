"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _tslib = require("tslib");
var _react = require("react");
//返回结构为D或R
function useToggle(defaultValue, reversevalue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  var _a = (0, _tslib.__read)((0, _react.useState)(defaultValue), 2),
    state = _a[0],
    setState = _a[1];
  var actions = (0, _react.useMemo)(function () {
    var reversevalueOrigin = reversevalue === undefined ? !defaultValue : reversevalue;
    var toggle = function toggle() {
      return setState(function (s) {
        return s === defaultValue ? reversevalueOrigin : defaultValue;
      });
    };
    var set = function set(value) {
      return setState(value);
    };
    var setLeft = function setLeft() {
      return setState(defaultValue);
    };
    var setRight = function setRight() {
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
var _default = useToggle;
exports["default"] = _default;