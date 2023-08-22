import { renderHook, act } from '@testing-library/react';
import useToggle from "../index";
var callToggle = function (hook) {
  act(function () {
    hook.result.current[1].toggle();
  });
};
var callToggleLeft = function (hook) {
  act(function () {
    hook.result.current[1].setLeft();
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
  it('针对手动切换toggle模拟', function () {
    var hooks = renderHook(function () {
      return useToggle("haleyliang", "lianghaley");
    });
    expect(hooks.result.current[0]).toBe("haleyliang");
    callToggle(hooks);
    expect(hooks.result.current[0]).toBe("lianghaley");
    callToggleLeft(hooks);
    expect(hooks.result.current[0]).toBe("lianghaley");
  });
});