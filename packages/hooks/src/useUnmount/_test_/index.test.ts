import { renderHook } from '@testing-library/react';
import useUnmount from '../index';
describe('useUnmount',()=>{
    it('useUnmount should work',async()=>{
        console.log('process.env.NODE_ENV',process.env.NODE_ENV)
        const fn = jest.fn()
        const hook = renderHook(()=>useUnmount(fn));
        expect(fn).toBeCalledTimes(0);
        hook.rerender();
        expect(fn).toBeCalledTimes(0);
    })
})