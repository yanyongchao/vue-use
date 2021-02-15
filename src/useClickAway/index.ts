import { Ref, unref } from 'vue'
import { inBrowser } from '../utils/common'
import { useEventListener } from 'vue-use'

export type UseClickAwayOptions = {
  eventName?: string
}

export function useClickAway(
  target: Element | Ref<Element | null>,
  listener: EventListener,
  options: UseClickAwayOptions = {}
) {
  if (!inBrowser) {
    return;
  }

  const { eventName = 'click' } = options;

  const onClick = (event: Event) => {
    const element = unref(target);
    if (element && !element.contains(event.target as Node)) {
      listener(event);
    }
  };

  useEventListener(eventName, onClick, { target: document });
}
