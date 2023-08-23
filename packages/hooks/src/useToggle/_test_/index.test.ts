import {renderHook,act} from '@testing-library/react'
import useToggle from "../index";
const callToggle = (hook:any)=>{
    console.log('hook',hook.result.current)
    act(()=>{
        hook.result.current[1].toggle();
    })
}
describe('useToggle',()=>{
    //jest
    it('针对基础功能使用测试',()=>{
        const hooks = renderHook(()=>useToggle());
        expect(hooks.result.current[0]).toBe(false);
    })
    it('针对固定名称测试',()=>{
        const hooks = renderHook(()=>useToggle('haleyLiang','LiangHaley'));
        expect(hooks.result.current[0]).toBe('haleyLiang');
        callToggle(hooks)
        expect(hooks.result.current[0]).toBe('LiangHaley');
    })
})
