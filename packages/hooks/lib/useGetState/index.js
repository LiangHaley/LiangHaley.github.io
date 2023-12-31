"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _tslib = require("tslib");
var _react = require("react");
function useGetState(initialState) {
  var _a = (0, _tslib.__read)((0, _react.useState)(initialState), 2),
    state = _a[0],
    setState = _a[1];
  var stateRef = (0, _react.useRef)(state);
  stateRef.current = state;
  var getState = (0, _react.useCallback)(function () {
    return stateRef.current;
  }, []); //缓存的是一个函数
  return [state, setState, getState];
}
var _default = useGetState;
exports["default"] = _default;