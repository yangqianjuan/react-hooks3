import { useMemo } from 'react';
import { Plugin, Service, Options } from './type';
import { useLatest, useUpdate, useMemorizedFn } from 'reactHooks';
import Fetch from './Fetch';
const useRequestImplement = <TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options: Options<TData, TParams>,
  plugins: Plugin<TData, TParams>[],
) => {
  const { manual = false, ...rest } = options;
  const fetchOptions = { manual, ...rest };
  const serviceRef = useLatest(service);
  const update = useUpdate();

  const fetchInstance = useMemo(() => {
    const initState = plugins.map((p) => p.onInit?.(fetchOptions)).filter(Boolean);
    return new Fetch(serviceRef, fetchOptions, update, Object.assign({}, ...initState));
  }, []);
  fetchInstance.pluginImpls = plugins.map((p) => p(fetchInstance, fetchOptions));
  return {
    loading: fetchInstance.state.loading,
    params: fetchInstance.state.params,
    data: fetchInstance.state.data,
    error: fetchInstance.state.error,
    run: useMemorizedFn(fetchInstance.run.bind(this, fetchInstance)),
  };
};

export default useRequestImplement;
