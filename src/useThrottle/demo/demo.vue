<template>
  <div class="throttle">
    <input v-model="value"
    placeholder="Typed value"
    style="width: 280px;">
    <p style="margin-top: 16px;">throttledValue: {{throttledValue}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useThrottle } from 'vue-use'

export default defineComponent({
  name: 'Throttle',
  setup () {
    const value = ref(0)
    const throttledValue = useThrottle(value, {
      wait: 500
    })
    return {
      value,
      throttledValue
    }
  }
})
</script>