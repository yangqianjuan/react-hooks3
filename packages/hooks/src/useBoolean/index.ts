import { useMemo } from 'react';
import useToggle from '../useToggle';

type defaultFn = () => void;
interface Actions {
  setTrue: defaultFn;
  setFalse: defaultFn;
  toggle: defaultFn;
}

function useBoolean<T = boolean, F = Boolean>(defaultValue: T, reverseValue?: F): [T | F, Actions];

function useBoolean<T, F>(defaultValue: false, reverseValue?: F) {
  const [state, { setLeft, setRight, toggle }] = useToggle(defaultValue);

  const Actions = useMemo(() => {
    const setTrue = () => setLeft();
    const setFalse = () => setRight();
    return { setTrue, setFalse, toggle };
  }, []);
  return [state, Actions];
}

export default useBoolean;
