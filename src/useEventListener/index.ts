import { Ref, unref, onUnmounted, onDeactivated } from 'vue'
import { onMountedOrActivated } from '../onMountedOrActivated/'
import { inBrowser } from '../utils/common'

export type UseEventListenerOptions = {
  target?: EventTarget | Ref<EventTarget | undefined>
  capture?: boolean
  passive?: boolean
  once?: boolean
}

export function useEventListener(
  eventName: string,
  handler: EventListener,
  options: UseEventListenerOptions = {}
) {
  if (!inBrowser) {
    return
  }
  const { target = window, passive = false, capture = false, once = false } = options

  let attached: boolean

  const add = () => {
    const element = unref(target)

    if (element && !attached) {
      element.addEventListener(
        eventName,
        handler,
        { capture, passive, once }
      )
      attached = true
    }
  }

  const remove = () => {
    const element = unref(target)

    if (element && attached) {
      element.removeEventListener(
        eventName,
        handler,
        capture
      )
      attached = false
    }
  }

  onUnmounted(remove)
  onDeactivated(remove)
  onMountedOrActivated(add)
}