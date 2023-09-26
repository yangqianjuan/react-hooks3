import { useRef } from 'react';
import { Timeout, Plugin } from '../type';

const useLoadingDelayPlugin: Plugin<any, any[]> = (instance, { ready, loadingDelay }) => {
  const timeoutRef = useRef<Timeout>();
  const cancelTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  return {
    onBefore(...params) {
      cancelTimeout();
      timeoutRef.current = setTimeout(() => {
        if (ready !== false) {
          instance.setState({ loading: true });
        }
      }, loadingDelay);
    },
    onCancel() {
      cancelTimeout();
    },
  };
};
