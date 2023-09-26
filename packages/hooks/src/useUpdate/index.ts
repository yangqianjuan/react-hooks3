import { useState } from 'react';

export default () => {
  const [, setState] = useState({});
  return () => setState({});
};
