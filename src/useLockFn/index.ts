import { ref, Ref } from 'vue'

export function useLockFn<P extends any[] = any[], V extends any = any> (fn: (...args: P) => Promise<V>) {
  const lockRef: Ref<boolean> = ref(false)

  return async function(...args: P) {
    if (lockRef.value) return
    lockRef.value = true
    try {
      const ret = await fn(...args)
      lockRef.value = false
      return ret
    } catch(e) {
      lockRef.value = false
      throw e
    }
  }
}
