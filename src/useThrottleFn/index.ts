import throttle from 'lodash.throttle'

interface ThrottleOptions {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
}

type Fn = (...args: any) => any;

export function useThrottleFn<T extends Fn> (fn: T, options?: ThrottleOptions) {
  const wait = options?.wait || 1000
  const throttled = throttle(fn, wait, options)

  return {
    run: (throttled as unknown) as T,
    cancel: throttled.cancel,
    flush: throttled.flush,
  }
}
