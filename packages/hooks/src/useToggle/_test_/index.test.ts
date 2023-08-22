import {renderHook} from '@testing-library/react'
import useToggle from "../index";
const callToggle = (hook)=>{
    act(()=>{
        hook.result.current[1].toggle()
    })
}
describe('useToggle',()=>{
    //jest
    it('针对基础功能使用测试',()=>{
        const hooks = renderHook(()=>useToggle());
        expect(hooks.result.current[0]).toBe(false);
    })
})
