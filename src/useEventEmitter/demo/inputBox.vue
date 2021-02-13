<template>
  <div class="use-lock-fn">
    <input type="text" 
      style="width: 100%;"
      placeholder="Enter reply"
      ref="inputDom">
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onUnmounted } from 'vue'
import { useEventEmitter } from 'vue-use'

export default defineComponent({
  name: 'Debounce',
  setup () {
    const inputDom = ref(null)
    const event$ = useEventEmitter()

    event$.on('focus$', () => {
      (inputDom.value as any).focus()
    })

    onUnmounted(() => {
      event$.off('focus$')
    })
    
    return {
      inputDom
    }
  }
})
</script>