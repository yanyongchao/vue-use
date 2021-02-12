<template>
  <div class="use-debounce">
    <input v-model="value"
    placeholder="Typed value"
    style="width: 280px;">
    <p style="margin-top: 16px;">DebouncedValue: {{debouncedValue}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useDebounce } from 'vue-use'

export default defineComponent({
  name: 'UseDebounce',
  setup () {
    const value = ref(0)
    const debouncedValue = useDebounce(value, {
      wait: 500
    })
    return {
      value,
      debouncedValue
    }
  }
})
</script>