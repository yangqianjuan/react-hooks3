import useRequestImplement from './useRequestImplement';
import { Service, Options, Plugin } from './type';
import useAutoRunPlugin from './plugin/useAutoRunPlugin';
const useRequest = <TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options: Options<TData, TParams> = {},
  plugins: Plugin<TData, TParams>[] = [],
) => {
  return useRequestImplement<TData, TParams>(service, options, [
    ...plugins,
    useAutoRunPlugin,
  ] as Plugin<TData, TParams>[]);
};

export default useRequest;
