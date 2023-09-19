import React from 'react';
import { useBoolean } from 'reactHooks';

export default function () {
  const [state, { setTrue, setFalse, toggle }] = useBoolean(true);

  return (
    <div>
      <p>state:{`${state}`}</p>
      <div>
        <button onClick={setTrue}>setTrue</button>
      </div>
      <div>
        <button onClick={setFalse}>setFalse</button>
      </div>
      <div>
        <button onClick={toggle}>toggle</button>
      </div>
    </div>
  );
}
