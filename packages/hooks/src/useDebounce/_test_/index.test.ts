import {renderHook,act} from '@testing-library/react'
import useBoolean from "../index";
const callToggle = (hook:any)=>{
    console.log('hook',hook.result.current)
    act(()=>{
        hook.result.current[1].toggle();
    })
}
describe('useBoolean',()=>{
    //jest
    it('针对useBoolean基础功能使用测试',()=>{
        const hooks = renderHook(()=>useBoolean(false));
        expect(hooks.result.current[0]).toBe(false);
    })
    it('针对useBoolean点击事件测试',()=>{
        const hooks = renderHook(()=>useBoolean(true));
        expect(hooks.result.current[0]).toBe(true);
        callToggle(hooks)
        expect(hooks.result.current[0]).toBe(true);
    })
})
