import {renderHook,act} from '@testing-library/react'
import useToggle from "../index";
const callToggle = (hook)=>{
    act(()=>{
        hook.result.current[1].toggle()
    })
}
const callToggleLeft = (hook) =>{
    act(()=>{
        hook.result.current[1].setLeft()
    })
}
describe('useToggle',()=>{
    //jest
    it('针对基础功能使用测试',()=>{
        const hooks = renderHook(()=>useToggle());
        expect(hooks.result.current[0]).toBe(false);
    })
    it('针对手动切换toggle模拟',()=>{
        const hooks = renderHook(()=> useToggle("haleyliang","lianghaley"))
        expect(hooks.result.current[0]).toBe("haleyliang");
        callToggle(hooks)
        expect(hooks.result.current[0]).toBe("lianghaley");
        callToggleLeft(hooks)
        expect(hooks.result.current[0]).toBe("lianghaley");
    })
})
