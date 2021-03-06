import ResizeObserver from 'resize-observer-polyfill'
import { ref, watch, unref, Ref, reactive, onMounted, onUnmounted } from 'vue'

type Size = { width?: number; height?: number };

export function useSize (target: HTMLElement | Ref<HTMLElement | null>): Size {
  const elRef = ref(target)
  const state = reactive({
    width: ((unref(target) || {}) as HTMLElement).clientWidth,
    height: ((unref(target) || {}) as HTMLElement).clientHeight
  })
  let resizeObserver: ResizeObserver | null

  watch(
    elRef,
    () => {
      resizeObserver && resizeObserver.disconnect()
      if (elRef.value) {
        resizeObserver = new ResizeObserver((entries: any[]) => {
          entries.forEach(entry => {
            state.width = entry.target.clientWidth;
            state.height = entry.target.clientHeight;
          });
        });
        resizeObserver.observe(elRef.value as HTMLElement)
      }
    },
    {
      immediate: true
    }
  )

  onUnmounted(() => {
    resizeObserver && resizeObserver.disconnect()
    resizeObserver = null
  })

  return state
}