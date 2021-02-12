import { useDebounceFn } from 'vue-use'
import { ref, watch, Ref } from 'vue'

interface DebounceOptions {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
}

export function useDebounce<T> (targetValue: Ref<T>, options?: DebounceOptions) {
  let debouncedValue = ref(targetValue.value)

  const { run } = useDebounceFn(() => {
    debouncedValue.value = targetValue.value as any
  }, options)

  watch(
    targetValue,
    run
  )

  return debouncedValue
}
