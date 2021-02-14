<template>
  <div class="hover" ref="hoverDom">
    {{isHover ? 'hover' : 'leaveHover'}}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useHover } from 'vue-use'

export default defineComponent({
  name: 'EventListener',
  setup () {
    const hoverDom = ref(null)
    const isHover = useHover(hoverDom)

    watch(hoverDom, (el, preElm, onInvalidate) => {
      console.log(el, preElm, onInvalidate)
    })

    return {
      isHover,
      hoverDom
    }
  }
})
</script>