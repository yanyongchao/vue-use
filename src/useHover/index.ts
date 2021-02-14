import { useEventListener } from '../useEventListener'
import { ref, Ref, unref } from 'vue'

export interface HoverOptions {
  onEnter?: () => void
  onLeave?: () => void
}

export function useHover (target: Ref<HTMLElement | null | undefined>, options?: HoverOptions) {
  const { onEnter, onLeave } = options || {}
  const isHovering: Ref<boolean> = ref(false)

  useEventListener(
    'mouseenter',
    () => {
      onEnter && onEnter()
      isHovering.value = true
    },
    {
      target,
    }
  )

  useEventListener(
    'mouseleave',
    () => {
      onLeave && onLeave()
      isHovering.value = false
    },
    {
      target,
    }
  )

  return isHovering
}
