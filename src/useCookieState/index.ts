import Cookies from 'js-cookie'
import { ref, Ref, watch } from 'vue'
export type CookieState = string | undefined | null;
export type CookieOptions = Cookies.CookieAttributes;

export interface Options extends CookieOptions {
  defaultValue?: CookieState
}

export function useCookieState<T = CookieState> (cookieKey: string, options: Options = {}) {
  function getState() {
    const raw = Cookies.get(cookieKey)
    if (raw) {
      try {
        return JSON.parse(raw)
      } catch(err) {
        return raw
      }
    }
    return options.defaultValue
  }

  const state = ref(getState()) as Ref<T>

  function setState() {
    if (state.value === undefined || state.value === null) {
      Cookies.remove(cookieKey)
    } else if (typeof state.value === 'object') {
      Cookies.set(cookieKey, JSON.stringify(state.value), options)
    } else {
      Cookies.set(cookieKey, state.value as any, options)
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
