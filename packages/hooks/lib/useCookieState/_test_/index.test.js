"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _tslib = require("tslib");
var _react = require("@testing-library/react");
var _index = _interopRequireDefault(require("../index"));
describe('useCookieState', function () {
  var setUp = function setUp(key, options) {
    return (0, _react.renderHook)(function () {
      var _a = (0, _tslib.__read)((0, _index["default"])(key, options), 2),
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