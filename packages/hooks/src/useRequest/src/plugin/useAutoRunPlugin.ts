import { useRef, useEffect } from 'react';
import { Plugin } from '../type';

const useAutoRunPlugin: Plugin<any, any[]> = (
  instance,
  { manual, ready = true, defaultParams = [], refreshDeps = [], refreshDepsAction },
) => {
  const hasAutoRun = useRef(false);
  hasAutoRun.current = false;
  useEffect(() => {
    if (!manual && ready) {
      hasAutoRun.current = true;
      instance.run(...defaultParams);
    }
  }, [ready]);
  useEffect(() => {
    if (hasAutoRun.current) {
      return;
    }
    if (!manual) {
      if (refreshDepsAction) {
        refreshDepsAction(...defaultParams);
      } else {
        instance.refresh(...defaultParams);
      }
    }
  }, [...refreshDeps]);
  return {
    onBefore: () => {
      if (!ready) {
        return { stopNow: true };
      }
    },
  };
};
useAutoRunPlugin.onInit = ({ manual, ready = true, defaultParams = [] }) => {
  return { loading: !manual && ready, params: defaultParams };
};

export default useAutoRunPlugin;
