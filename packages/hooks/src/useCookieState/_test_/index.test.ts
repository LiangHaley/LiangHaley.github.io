import { renderHook, act } from '@testing-library/react';
import useCookieState from '../index';
import Cookies from 'js-cookie';
describe('useCookieState', () => {
  const setUp = (key: string, options) =>
    renderHook(() => {
      const [state, setState] = useCookieState(key, options);
      return {
        state,
        setState,
      } as const;
    });

  it('getKey should work', () => {
    const COOKIE = 'test-key';
    const hook = setUp(COOKIE, {
      defaultValue: 'A',
    });
    expect(hook.result.current.state).toBe('A');
    // act(() => {
    //   hook.result.current.setState('B');
    // });
    // expect(hook.result.current.state).toBe('B');
  })
});
