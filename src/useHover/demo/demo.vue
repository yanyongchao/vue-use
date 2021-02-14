<template>
  <span class="hover" ref="hoverDom">
    {{isHover ? 'hover' : 'leaveHover'}}
  </span>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useHover } from 'vue-use'

export default defineComponent({
  name: 'EventListener',
  setup () {
    const hoverDom = ref(null)
    const isHover = useHover(hoverDom)

    return {
      isHover,
      hoverDom
    }
  }
})
</script>