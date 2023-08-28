"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _lodashPolyfill = require("../utils/lodash-polyfill");
var _react = require("react");
var _useLatest = _interopRequireDefault(require("../useLatest"));
var _useUnmount = _interopRequireDefault(require("../useUnmount"));
/*
 * @Author: Jack11023 1018719623@qq.com
 * @Date: 2023-08-23 18:36:44
 * @LastEditors: Jack11023 1018719623@qq.com
 * @LastEditTime: 2023-08-27 15:11:35
 * @FilePath: \encode-hooks-1.0c:\Users\MS\Desktop\project\PnpmReact\packages\hooks\src\useDebounceFn\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// @ts-nocheck

function useDebounceFn(fncall, options) {
  var _a;
  var fnRef = (0, _useLatest["default"])(fncall); //获取到fn函数
  // console.log('fnRef',fnRef)
  //获取wait的值
  var wait = (_a = options === null || options === void 0 ? void 0 : options.wait) !== null && _a !== void 0 ? _a : 1000; //间隔时间
  //useMemo 将内容存储在缓冲区，内容相同不重新渲染
  var debounced = (0, _react.useMemo)(function () {
    return (0, _lodashPolyfill.debounce)(function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return fnRef.current;
    }, wait, options);
  }, []);
  //当组件卸载的时候
  (0, _useUnmount["default"])(function () {
    debounced.cancel(); //主要调用load-es
  });

  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush
  };
}
var _default = useDebounceFn;
exports["default"] = _default;