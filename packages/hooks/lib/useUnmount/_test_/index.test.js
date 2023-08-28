"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _tslib = require("tslib");
var _react = require("@testing-library/react");
var _index = _interopRequireDefault(require("../index"));
describe('useUnmount', function () {
  it('useUnmount should work', function () {
    return (0, _tslib.__awaiter)(void 0, void 0, void 0, function () {
      var fn, hook;
      return (0, _tslib.__generator)(this, function (_a) {
        console.log('process.env.NODE_ENV', process.env.NODE_ENV);
        fn = jest.fn();
        hook = (0, _react.renderHook)(function () {
          return (0, _index["default"])(fn);
        });
        expect(fn).toBeCalledTimes(0);
        hook.rerender();
        expect(fn).toBeCalledTimes(0);
        return [2 /*return*/];
      });
    });
  });
});