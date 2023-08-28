"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _tslib = require("tslib");
var _react = require("@testing-library/react");
var _react2 = require("react");
var _index = _interopRequireDefault(require("../index"));
var useCount = function useCount() {
  var _a = (0, _tslib.__read)((0, _react2.useState)(0), 2),
    count = _a[0],
    setCount = _a[1];
  var addCount = function addCount() {
    setCount(function (c) {
      return c + 1;
    });
  };
  var memoizedFn = (0, _index["default"])(function () {
    return count;
  });
  return {
    addCount: addCount,
    memoizedFn: memoizedFn
  };
};
var hook;
describe('useMemoizedFn', function () {
  //jest
  it('useMemoizedFn should work', function () {
    (0, _react.act)(function () {
      hook = (0, _react.renderHook)(function () {
        return useCount();
      });
    });
    var currentFn = hook.result.current.memoizedFn;
    console.log('currentFn', currentFn);
    expect(hook.result.current.memoizedFn()).toBe(0);
    (0, _react.act)(function () {
      hook.result.current.addCount();
    });
    expect(currentFn).toEqual(hook.result.current.memoizedFn);
    expect(hook.result.current.memoizedFn()).toBe(1);
  });
});