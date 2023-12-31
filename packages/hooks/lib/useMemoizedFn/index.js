"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _react = require("react");
var _utils = require("../utils");
var _isDev = _interopRequireDefault(require("../utils/isDev"));
function useMemoizedFn(fn) {
  if (_isDev["default"]) {
    if (!(0, _utils.isFunction)(fn)) {
      console.error("useMemoizedFn expected parameter is a function, got ".concat((0, _typeof2["default"])(fn)));
    }
  }
  var fnRef = (0, _react.useRef)(fn);
  //  console.log('useMemoizedFn',fnRef)
  fnRef.current = (0, _react.useMemo)(function () {
    return fn;
  }, [fn]);
  var memoizedFn = (0, _react.useRef)();
  if (!memoizedFn.current) {
    memoizedFn.current = function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return fnRef.current.apply(this, args);
    };
  }
  return memoizedFn.current;
}
var _default = useMemoizedFn;
exports["default"] = _default;