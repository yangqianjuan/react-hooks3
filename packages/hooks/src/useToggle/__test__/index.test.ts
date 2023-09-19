import { renderHook, act } from '@testing-library/react';
import useToggle from '../index';

const callLeft = (hooks) => {
  act(() => hooks.result.current[1].setLeft());
};

const callToggle = (hooks) => {
  act(() => hooks.result.current[1].toggle());
};

describe('useToggle测试', () => {
  it('基础功能测试', () => {
    const hooks = renderHook(() => useToggle());
    expect(hooks.result.current[0]).toBeFalsy();
  });
  it('用户行为模拟测试', () => {
    const hooks = renderHook(() => useToggle('left', 'right'));
    expect(hooks.result.current[0]).toBe('left');
    callToggle(hooks);
    expect(hooks.result.current[0]).toBe('right');
    callLeft(hooks);
    expect(hooks.result.current[0]).toBe('left');
  });
});
