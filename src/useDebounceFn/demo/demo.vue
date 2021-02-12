<template>
  <div class="use-">
    <p> Clicked count: {{count}} </p>
    <button type="button" @click="clickFn">
      Click fast!
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useDebounceFn } from 'vue-use'

export default defineComponent({
  name: 'LocalStorageState',
  setup () {
    const count = ref(0)
    const { run: clickFn } = useDebounceFn(
      () => {
        count.value++
      }, 
      {
        wait: 500
      }
    )

    return {
      count,
      clickFn
    }
  }
})
</script>