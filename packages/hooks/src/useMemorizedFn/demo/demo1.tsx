import React, { useState, useCallback } from 'react';
import { message } from 'antd';
import { useMemorizedFn } from 'reactHooks';
export default () => {
  const [count, setCount] = useState(0);
  const callbackFn = useCallback(() => {
    message.info(`callback:${count}`);
  }, [count]);
  console.log(useMemorizedFn);
  // debugger;
  const memorizedFn = useMemorizedFn(() => {
    message.info(`memorizedL${count}`);
  });
  // console.log(memorizedFn);
  return (
    <div>
      <button
        onClick={() => {
          setCount((s) => s + 1);
        }}
      >
        count++
      </button>
      <div>
        <button onClick={callbackFn}>useCallback</button>
        <button onClick={memorizedFn}>useMemorizedFn</button>
      </div>
    </div>
  );
};
