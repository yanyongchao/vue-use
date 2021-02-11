import { ref, watch, Ref } from 'vue'

type StorageType = 'localStorage' | 'sessionStorage'

export function createUseStorageState<T = any>(
  storage: StorageType,
  key: string,
  defaultValue?: T
) {
  function getState() {
    const raw = window[storage].getItem(key)
    if (raw) {
      try {
        return JSON.parse(raw)
      } catch(err) {
        return raw
      }
    }
    return defaultValue
  }

  const state = ref(getState()) as Ref<T>

  function setState() {
    if (typeof state.value === 'object') {
      window[storage].setItem(key, JSON.stringify(state.value))
    } else {
      window[storage].setItem(key, state.value as any)
    }
  }

  watch(
    state,
    () => {
      setState();
    },
    { deep: true, immediate: false }
  )

  return state
}