import { renderHook, act } from '@testing-library/react';
import useDebounce from '../index';

function sleep(time: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
describe('useDebounce', () => {
  it('基础功能测试', async () => {
    let mountedState = 0;
    const { rerender, result } = renderHook(() => useDebounce(mountedState, 200));
    expect(result.current).toBe(0);

    mountedState = 1;
    rerender();
    await sleep(50);
    expect(result.current).toBe(0);

    mountedState = 2;
    rerender();
    await sleep(100);
    expect(result.current).toBe(0);

    mountedState = 3;
    rerender();
    await sleep(150);
    expect(result.current).toBe(0);

    // mountedState = 4;
    // rerender();
    // await sleep(250);
    // expect(result.current).toBe(4);
  });
});
