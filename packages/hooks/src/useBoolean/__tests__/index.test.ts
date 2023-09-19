import { renderHook, act } from '@testing-library/react';
import useBoolean from '../index';

const callTrue = (hooks) => {
  act(() => hooks.result.current[1].setTrue());
};
const callFalse = (hooks) => {
  act(() => hooks.result.current[1].setFalse());
};
const callToggle = (hooks) => {
  act(() => hooks.result.current[1].toggle());
};
describe('useBoolean测试', () => {
  // it('基础功能测试', () => {
  //   const hooks = renderHook(() => useBoolean());
  //   expect(hooks.result.current[0]).toBe(false);
  //   callToggle(hooks);
  //   expect(hooks.result.current[0]).toBe(true);
  // });

  it('手动模拟测试', () => {
    const hooks = renderHook(() => useBoolean(true));
    expect(hooks.result.current[0]).toBe(true);
    callFalse(hooks);
    expect(hooks.result.current[0]).toBe(false);
    callToggle(hooks);
    expect(hooks.result.current[0]).toBe(true);
  });
});
