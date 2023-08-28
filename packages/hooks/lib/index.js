"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useBoolean", {
  enumerable: true,
  get: function get() {
    return _useBoolean["default"];
  }
});
Object.defineProperty(exports, "useCookieState", {
  enumerable: true,
  get: function get() {
    return _useCookieState["default"];
  }
});
Object.defineProperty(exports, "useDebounce", {
  enumerable: true,
  get: function get() {
    return _useDebounce["default"];
  }
});
Object.defineProperty(exports, "useDebounceFn", {
  enumerable: true,
  get: function get() {
    return _useDebounceFn["default"];
  }
});
Object.defineProperty(exports, "useGetState", {
  enumerable: true,
  get: function get() {
    return _useGetState["default"];
  }
});
Object.defineProperty(exports, "useLatest", {
  enumerable: true,
  get: function get() {
    return _useLatest["default"];
  }
});
Object.defineProperty(exports, "useLocalStorageState", {
  enumerable: true,
  get: function get() {
    return _useLocalStorageState["default"];
  }
});
Object.defineProperty(exports, "useMap", {
  enumerable: true,
  get: function get() {
    return _useMap["default"];
  }
});
Object.defineProperty(exports, "useMemoizedFn", {
  enumerable: true,
  get: function get() {
    return _useMemoizedFn["default"];
  }
});
Object.defineProperty(exports, "usePrevious", {
  enumerable: true,
  get: function get() {
    return _usePrevious["default"];
  }
});
Object.defineProperty(exports, "useToggle", {
  enumerable: true,
  get: function get() {
    return _useToggle["default"];
  }
});
Object.defineProperty(exports, "useUnmount", {
  enumerable: true,
  get: function get() {
    return _useUnmount["default"];
  }
});
Object.defineProperty(exports, "useUpdateEffect", {
  enumerable: true,
  get: function get() {
    return _useUpdateEffect["default"];
  }
});
var _useToggle = _interopRequireDefault(require("./useToggle"));
var _useBoolean = _interopRequireDefault(require("./useBoolean"));
var _useUnmount = _interopRequireDefault(require("./useUnmount"));
var _useLatest = _interopRequireDefault(require("./useLatest"));
var _useMemoizedFn = _interopRequireDefault(require("./useMemoizedFn"));
var _useCookieState = _interopRequireDefault(require("./useCookieState"));
var _useDebounceFn = _interopRequireDefault(require("./useDebounceFn"));
var _useDebounce = _interopRequireDefault(require("./useDebounce"));
var _useGetState = _interopRequireDefault(require("./useGetState"));
var _useUpdateEffect = _interopRequireDefault(require("./useUpdateEffect"));
var _useLocalStorageState = _interopRequireDefault(require("./useLocalStorageState"));
var _useMap = _interopRequireDefault(require("./useMap"));
var _usePrevious = _interopRequireDefault(require("./usePrevious"));
var _update = _interopRequireDefault(require("./update"));
// import useCookieState from './useCookieState'

//实例化该类
var up = new _update["default"]({
  timer: 2000
});
//未更新通知
up.on('no-update', function () {
  console.log('未更新');
});
//更新通知
up.on('update', function () {
  console.log('更新了');
});