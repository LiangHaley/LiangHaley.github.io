"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _tslib = require("tslib");
var _utils = require("../utils");
var _react = require("react");
var _useUpdateEffect = _interopRequireDefault(require("../useUpdateEffect"));
var _useMemoizedFn = _interopRequireDefault(require("../useMemoizedFn"));
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
    var serializer = function serializer(value) {
      if (options.serializer) {
        return options.serializer(value);
      }
      return JSON.stringify(value);
    };
    var deserializer = function deserializer(value) {
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
      if ((0, _utils.isFunction)(options.defaultValue)) {
        return options.defaultValue();
      }
      return options.defaultValue;
    }
    var _b = (0, _tslib.__read)((0, _react.useState)(getStoredValue), 2),
      state = _b[0],
      setState = _b[1];
    (0, _useUpdateEffect["default"])(function () {
      setState(getStoredValue());
    }, [key]);
    var updateState = function updateState(value) {
      var currentState = (0, _utils.isFunction)(value) ? value(state) : value;
      setState(currentState);
      if ((0, _utils.isUndef)(currentState)) {
        storage === null || storage === void 0 ? void 0 : storage.removeItem(key);
      } else {
        try {
          storage === null || storage === void 0 ? void 0 : storage.setItem(key, serializer(currentState));
        } catch (e) {
          console.error(e);
        }
      }
    };
    return [state, (0, _useMemoizedFn["default"])(updateState)];
  }
  return useStorageState;
}
var useLocalStorageState = createUseStorageState(function () {
  return isBrowser ? localStorage : undefined;
});
var _default = useLocalStorageState;
exports["default"] = _default;