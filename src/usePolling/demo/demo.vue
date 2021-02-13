<template>
  <div class="polling">
    <p>count: {{count}}</p>
    <button @click="handleStartPolling">Start Polling</button>
    <button @click="handleStopPolling">Stop Polling</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { usePolling } from 'vue-use'

export default defineComponent({
  name: 'Polling',
  setup () {
    const count = ref(0)
    const cb = () => {}
    const polling = usePolling()
    let cancelPolling: Function | null

    const handleStartPolling = () => {
      if (cancelPolling) return
      cancelPolling = polling.startPolling({
        cb: () => {
          count.value++
        }
      })
    }

    const handleStopPolling = () => {
      cancelPolling && (cancelPolling as Function)()
      cancelPolling = null
    }

    return {
      count,
      handleStartPolling,
      handleStopPolling
    }
  }
})
</script>
