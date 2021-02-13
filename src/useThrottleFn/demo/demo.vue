<template>
  <div class="throttle-fn">
    <p> Clicked count: {{count}} </p>
    <button type="button" @click="clickFn">
      Click fast!
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useThrottleFn } from 'vue-use'

export default defineComponent({
  name: 'ThrottleFn',
  setup () {
    const count = ref(0)
    const { run: clickFn } = useThrottleFn(
      () => {
        count.value++
      }, 
      {
        wait: 1000
      }
    )

    return {
      count,
      clickFn
    }
  }
})
</script>