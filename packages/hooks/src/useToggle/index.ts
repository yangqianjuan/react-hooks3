import { useState, useMemo } from 'react';

type defaultFn = () => void;
interface Actions {
  setLeft: defaultFn;
  setRight: defaultFn;
  toggle: defaultFn;
}
// function useToggle<T = Boolean>(): [T, Actions];

// function useToggle<D>(defaultValue: D): [D, Actions];

function useToggle<D, R>(defaultValue?: D, reverseValue?: R): [D | R, Actions];

function useToggle<D, R>(defaultValue: D, reverseValue?: R) {
  const [state, setState] = useState(defaultValue);
  const Actions = useMemo(() => {
    const reverseOriginValue = reverseValue === undefined ? !defaultValue : reverseValue;
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(reverseOriginValue);
    const toggle = () => setState((s) => (s === defaultValue ? reverseOriginValue : defaultValue));
    return {
      setLeft,
      setRight,
      toggle,
    };
  }, []);
  return [state, Actions];
}

export default useToggle;
