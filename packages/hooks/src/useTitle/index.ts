import { useEffect, useRef } from 'react';

function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}
function useUnmount(fn) {
  const latestFn = useLatest(fn);
  useEffect(() => {
    return () => latestFn.current();
  });
}
const DEFAULT_OPTION = {
  restoreTitle: false,
};
function useTitle(value: string, options = DEFAULT_OPTION) {
  const refValue = useRef(document.title);
  useEffect(() => {
    document.title = value;
  }, [value]);
  useUnmount(() => {
    if (options.restoreTitle) {
      document.title = refValue.current;
    }
  });
}

export default useTitle;
