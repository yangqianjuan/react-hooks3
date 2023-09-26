export type Service<TData, TParams extends any[]> = (...args: TParams) => Promise<TData>;
export interface FetchState<TData, TParams> {
  loading?: boolean;
  params?: TParams;
  data?: TData;
  error?: Error;
}
export interface Options<TData, TParams extends any[]> {
  manual?: boolean;
  loading?: boolean;
  ready?: boolean;
  loadingDelay?: number;
  defaultParams?: TParams;
  refreshDeps?: any[];
  refreshDepsAction?: (...params: TParams) => void;
  onBefore?: (params: TParams) => void;
}
export interface PluginReturn<TData, TParams extends any[]> {
  loading?: boolean;
  onBefore?: (
    params: TParams,
  ) => ({ stopNow?: boolean; returnNow?: boolean } & Partial<FetchState<TData, TParams>>) | void;
  onRequest?: (
    service: Service<TData, TParams>,
    params: TParams,
  ) => { servicePromise: Promise<TData> };
}
export type Plugin<TData, TParams extends any[]> = {
  (instance: any, options: Options<TData, TParams>): Partial<PluginReturn<TData, TParams>>;
  onInit?: (options: Options<TData, TParams>) => Partial<FetchState<TData, TParams>>;
};

export type Timeout = ReturnType<typeof setTimeout>;
// export interface PluginReturn<TData, TParams extends any[]> {
//   onBefore?: (
//     params: TParams,
//   ) => ({ stopNow?: boolean; returnNow?: boolean } & Partial<FetchState<TData, TParams>>) | void;
//   onRequest?: (
//     service: Service<TData, TParams>,
//     params: TParams,
//   ) => { servicePromise: Promise<TData> };
//   onSuccess?: (params: TParams, data: TData) => void;
//   onerror?: (params: TParams, error: Error) => void;
//   onFinally?: (params: TParams, data?: TData, error?: Error) => void;
//   onCancel?: (params?: TParams) => void;
// }

// export type Plugin<TData, TParams extends any[]> = {
//   (instance: any, options: Options<TData, TParams>): Partial<PluginReturn<TData, TParams>>;
//   onInit?: (options: Options<TData, TParams>) => Partial<FetchState<TData, TParams>>;
// };
