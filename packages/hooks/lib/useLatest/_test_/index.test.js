"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _tslib = require("tslib");
var _react = require("@testing-library/react");
var _index = _interopRequireDefault(require("../index"));
var setUp = function setUp() {
  return (0, _react.renderHook)(function (state) {
    return (0, _index["default"])(state);
  });
};
describe('useLatest', function () {
  it('useLatest with basic variable should work', function () {
    return (0, _tslib.__awaiter)(void 0, void 0, void 0, function () {
      var _a, result, rerender;
      return (0, _tslib.__generator)(this, function (_b) {
        _a = setUp(), result = _a.result, rerender = _a.rerender;
        rerender(1);
        expect(result.current.current).toBe(1);
        return [2 /*return*/];
      });
    });
  });
});