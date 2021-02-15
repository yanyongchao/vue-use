<template>
  <div class="hover">
    <p>observer dom</p>
    <div ref="visibleDom">{{isVisible ? 'visible' : 'hidden'}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useInViewport } from 'vue-use'

export default defineComponent({
  name: 'Hover',
  setup () {
    const visibleDom = ref(null)
    const isVisible = useInViewport(visibleDom)
    
    return {
      isVisible,
      visibleDom
    }
  }
})
</script>