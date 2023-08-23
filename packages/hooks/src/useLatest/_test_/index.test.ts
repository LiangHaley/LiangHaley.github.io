import {renderHook} from '@testing-library/react'
import useLatest from '../index'
const setUp = () =>renderHook((state)=>useLatest(state))
describe('useLatest',()=>{
    it('useLatest with basic variable should work',async()=>{
       const {result, rerender} = setUp();
       rerender(1);
       expect(result.current.current).toBe(1)
    })
})