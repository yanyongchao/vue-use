<template>
  <div class="event-listener">
    <button ref="btnRef">You click {{count}} times</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useEventListener } from 'vue-use'

export default defineComponent({
  name: 'EventListener',
  setup () {
    const count = ref(0)
    const btnRef = ref(null)
    const handleClick = () => {
      count.value++
    }

    useEventListener(
      'click',
      handleClick,
      {
        target: btnRef
      }
    )

    return {
      count,
      btnRef,
      handleClick
    }
  }
})
</script>