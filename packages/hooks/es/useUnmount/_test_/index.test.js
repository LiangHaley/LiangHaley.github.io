import { __awaiter, __generator } from "tslib";
import { renderHook } from '@testing-library/react';
import useUnmount from '../index';
describe('useUnmount', function () {
  it('useUnmount should work', function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var fn, hook;
      return __generator(this, function (_a) {
        console.log('process.env.NODE_ENV', process.env.NODE_ENV);
        fn = jest.fn();
        hook = renderHook(function () {
          return useUnmount(fn);
        });
        expect(fn).toBeCalledTimes(0);
        hook.rerender();
        expect(fn).toBeCalledTimes(0);
        return [2 /*return*/];
      });
    });
  });
});