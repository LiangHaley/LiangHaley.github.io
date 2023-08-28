import { __awaiter, __generator } from "tslib";
import { renderHook } from '@testing-library/react';
import useLatest from '../index';
var setUp = function () {
  return renderHook(function (state) {
    return useLatest(state);
  });
};
describe('useLatest', function () {
  it('useLatest with basic variable should work', function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var _a, result, rerender;
      return __generator(this, function (_b) {
        _a = setUp(), result = _a.result, rerender = _a.rerender;
        rerender(1);
        expect(result.current.current).toBe(1);
        return [2 /*return*/];
      });
    });
  });
});