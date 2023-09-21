import React from 'react';
import { useTitle } from 'reactHooks';

export default () => {
  const title = useTitle('自定义的标题');
  return <div>设置页面的hooks</div>;
};
