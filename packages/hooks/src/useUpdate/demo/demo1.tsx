import React from 'react';
import { useUpdate } from 'reactHooks';
export default () => {
  const update = useUpdate();
  return (
    <div>
      <p>{Date.now()}</p>
      <button onClick={update}>update</button>
    </div>
  );
};
