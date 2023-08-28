"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = require("@testing-library/react");
var _index = _interopRequireDefault(require("../index"));
var callToggle = function callToggle(hook) {
  console.log('hook', hook.result.current);
  (0, _react.act)(function () {
    hook.result.current[1].toggle();
  });
};
describe('useToggle', function () {
  //jest
  it('针对基础功能使用测试', function () {
    var hooks = (0, _react.renderHook)(function () {
      return (0, _index["default"])();
    });
    expect(hooks.result.current[0]).toBe(false);
  });
  it('针对固定名称测试', function () {
    var hooks = (0, _react.renderHook)(function () {
      return (0, _index["default"])('haleyLiang', 'LiangHaley');
    });
    expect(hooks.result.current[0]).toBe('haleyLiang');
    callToggle(hooks);
    expect(hooks.result.current[0]).toBe('LiangHaley');
  });
});