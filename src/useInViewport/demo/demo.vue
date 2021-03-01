<template>
  <div class="hover">
    <p ref="visibleDom">observer dom</p>
    <div style="margin-top: 57px;">{{isVisible ? 'visible' : 'hidden'}}</div>
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