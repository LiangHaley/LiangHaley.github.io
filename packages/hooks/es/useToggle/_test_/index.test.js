import { renderHook, act } from '@testing-library/react';
import useToggle from "../index";
var callToggle = function (hook) {
  console.log('hook', hook.result.current);
  act(function () {
    hook.result.current[1].toggle();
  });
};
describe('useToggle', function () {
  //jest
  it('针对基础功能使用测试', function () {
    var hooks = renderHook(function () {
      return useToggle();
    });
    expect(hooks.result.current[0]).toBe(false);
  });
  it('针对固定名称测试', function () {
    var hooks = renderHook(function () {
      return useToggle('haleyLiang', 'LiangHaley');
    });
    expect(hooks.result.current[0]).toBe('haleyLiang');
    callToggle(hooks);
    expect(hooks.result.current[0]).toBe('LiangHaley');
  });
});