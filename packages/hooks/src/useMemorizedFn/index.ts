import { useRef, useMemo } from 'react';
const useMemoriedFn = (fn) => {
  const refFn = useRef(fn);
  refFn.current = useMemo(() => fn, [fn]);
  const memorizedFn = useRef();
  if (!memorizedFn.current) {
    memorizedFn.current = function (...args) {
      return refFn.current.apply(this, [...args]);
    };
  }
  return memorizedFn.current;
};

export default useMemoriedFn;
