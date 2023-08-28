import { __read } from "tslib";
import { renderHook } from '@testing-library/react';
import useCookieState from '../index';
describe('useCookieState', function () {
  var setUp = function (key, options) {
    return renderHook(function () {
      var _a = __read(useCookieState(key, options), 2),
        state = _a[0],
        setState = _a[1];
      return {
        state: state,
        setState: setState
      };
    });
  };
  it('getKey should work', function () {
    var COOKIE = 'test-key';
    var hook = setUp(COOKIE, {
      defaultValue: 'A'
    });
    expect(hook.result.current.state).toBe('A');
    // act(() => {
    //   hook.result.current.setState('B');
    // });
    // expect(hook.result.current.state).toBe('B');
  });
});