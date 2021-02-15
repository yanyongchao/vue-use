import { ref, Ref, watch, onUnmounted } from 'vue'

export function useInViewport(target: HTMLElement | Ref<HTMLElement | null>): Ref<boolean>{
  const inViewPort = ref(false)
  const elRef = ref(target)
  let intersectionObserver: IntersectionObserver | null
  watch(
    elRef, 
    () => {
      intersectionObserver && intersectionObserver.disconnect()
      if (elRef.value) {
        intersectionObserver = new IntersectionObserver(entries => {
          for (const entry of entries) {
            console.log('entry', entry)
            if (entry.isIntersecting) {
              inViewPort.value = true
            } else {
              inViewPort.value = false
            }
          }
        })
        intersectionObserver.observe(elRef.value)
      }
    },
    {
      immediate: true
    }
  )

  onUnmounted(() => {
    intersectionObserver && intersectionObserver.disconnect()
    intersectionObserver = null
  })

  return inViewPort
}

export default useInViewport