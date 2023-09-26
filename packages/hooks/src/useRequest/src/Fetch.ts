import { Service, Options, FetchState, PluginReturn } from './type';
import { MutableRefObject } from 'react';
class Fetch<TData, TParams extends any[]> {
  pluginImpls: PluginReturn<TData, TParams>[];
  count: number = 0;
  state: FetchState<TData, TParams> = {
    loading: false,
    data: undefined,
    params: undefined,
    error: undefined,
  };
  constructor(
    public serviceRef: MutableRefObject<Service<TData, TParams>>,
    public options: Options<TData, TParams>,
    public update: () => void,
    public initState: FetchState<TData, TParams>,
  ) {
    this.state = {
      ...this.state,
      loading: false,
      ...initState,
    };
  }
  setState(state) {
    this.count += 1;
    this.state = {
      ...this.state,
      ...state,
    };
    this.update();
  }
  runPluginHandler(event: keyof PluginReturn<TData, TParams>, ...params) {
    const initState = this.pluginImpls.map((p) => p[event]?.(params)).filter(Boolean);
    return Object.assign({}, ...initState);
  }
  async runAsync(...params: TParams) {
    this.count += 1;
    const currentCount = this.count;
    const { stopNow = false, returnNow = false, ...state } = this.runPluginHandler(
      'onBefore',
      ...params,
    );

    if (stopNow) {
      return new Promise(() => {});
    }
    this.setState({ loading: true, ...this.state, ...state });
    if (returnNow) {
      return Promise.resolve(state.data);
    }
    this.options?.onBefore?.(...params);
    try {
      // debugger;
      let { servicePromise } = this.runPluginHandler('onRequest', this.serviceRef.current, params);
      if (!servicePromise) {
        servicePromise = this.serviceRef.current(params);
      }
      const res = await servicePromise;
      // debugger;
      this.setState({ data: res, error: undefined, loading: false });
      return res;
    } catch (error) {
      this.setState({ error, data: undefined, loading: false });
      throw error;
    }
  }
  run(...params: TParams) {
    return this.runAsync(...params);
  }
}

export default Fetch;
