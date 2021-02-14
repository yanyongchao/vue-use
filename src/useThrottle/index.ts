import { ref, Ref, watch } from 'vue'
import { useThrottleFn } from 'vue-use'

interface ThrottleOptions {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
}

export function useThrottle<T> (targetValue: Ref<T>, options?: ThrottleOptions) {
  let throttledValue = ref(targetValue.value)

  const { run } = useThrottleFn(() => {
    throttledValue.value = targetValue.value as any
  }, options)

  watch(
    targetValue,
    run
  )

  return throttledValue
}
