import { __read } from "tslib";
import { renderHook, act } from '@testing-library/react';
import { useState } from "react";
import useMemoizedFn from '../index';
var useCount = function () {
  var _a = __read(useState(0), 2),
    count = _a[0],
    setCount = _a[1];
  var addCount = function () {
    setCount(function (c) {
      return c + 1;
    });
  };
  var memoizedFn = useMemoizedFn(function () {
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
    act(function () {
      hook = renderHook(function () {
        return useCount();
      });
    });
    var currentFn = hook.result.current.memoizedFn;
    console.log('currentFn', currentFn);
    expect(hook.result.current.memoizedFn()).toBe(0);
    act(function () {
      hook.result.current.addCount();
    });
    expect(currentFn).toEqual(hook.result.current.memoizedFn);
    expect(hook.result.current.memoizedFn()).toBe(1);
  });
});