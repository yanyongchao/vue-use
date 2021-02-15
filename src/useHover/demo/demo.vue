<template>
  <div class="hover" ref="hoverDom">
    {{isHover ? 'hover' : 'leaveHover'}}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useHover } from 'vue-use'

export default defineComponent({
  name: 'Hover',
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