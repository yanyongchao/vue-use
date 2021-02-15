import { ref, Ref, unref } from 'vue'
import { useEventListener } from '../useEventListener'

export interface HoverOptions {
  onEnter?: () => void
  onLeave?: () => void
}

export function useHover (target: TargetElement | Ref<TargetElement | null>, options?: HoverOptions) {
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
