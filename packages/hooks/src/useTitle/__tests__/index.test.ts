import { renderHook, act } from '@testing-library/react';
import useTitle from '../index';

describe('useTitle测试', () => {
  it('基础功能测试', () => {
    const hook = renderHook((props) => useTitle(props), { initialProps: '自定义标题' });
    expect(document.title).toBe('自定义标题');

    act(() => hook.rerender('另一个自定义标题'));
    expect(document.title).toBe('另一个自定义标题');
  });
  it('组件关闭，标题回退功能测试', () => {
    document.title = '原有的标题';
    const hook = renderHook((props) => useTitle(props, { restoreTitle: true }), {
      initialProps: '自定义标题',
    });
    expect(document.title).toBe('自定义标题');

    hook.unmount();
    expect(document.title).toBe('原有的标题');
  });
});
