import debounce from 'lodash.debounce'

interface DebounceOptions {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
}

type Fn = (...args: any) => any;

export function useDebounceFn<T extends Fn> (fn: T, options?: DebounceOptions) {
  const wait = options?.wait || 1000
  const debounced = debounce(fn, wait, options)

  return {
    run: (debounced as unknown) as T,
    cancel: debounced.cancel,
    flush: debounced.flush,
  }
}
