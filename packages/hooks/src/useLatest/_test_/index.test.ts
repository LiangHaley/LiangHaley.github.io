import {renderHook} from '@testing-library/react'
import useLatest from '../index'
const setUp = (val) =>renderHook((state)=>useLatest(state),{initialProps:val})
describe('useLatest',()=>{
    it('useLatest with basic variable should work',async()=>{
       const {result, rerender} = setUp(0);
    //    console.log('result:',result,'rerender:',rerender)
       rerender(1);
    //    console.log('result:',result,'rerender:',rerender)
       expect(result.current.current).toBe(1)
    })
})