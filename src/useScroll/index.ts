import { Ref, ref } from 'vue'
import { useEventListener } from '../useEventListener/'

export interface Position {
  left: number
  top: number
}

export function useScroll(target: TargetElement | Ref<TargetElement | null>) {
  const position = ref({ left: 0, top: 0 } as Position)

  const updatePosition = (currentTarget: HTMLElement | Document) => {
    let newPosition
    if (currentTarget === document) {
      if (!document.scrollingElement) return;
      newPosition = {
        left: document.scrollingElement.scrollLeft,
        top: document.scrollingElement.scrollTop
      }
    } else {
      newPosition = {
        left: (currentTarget as HTMLElement).scrollLeft,
        top: (currentTarget as HTMLElement).scrollTop,
      }
    }
    position.value = newPosition
  }

  const listener = (event: Event) => {
    if (!event.target) return
    updatePosition(event.target as HTMLElement | Document)
  }

  useEventListener('scroll', listener, {
    target
  })

  return position
}
