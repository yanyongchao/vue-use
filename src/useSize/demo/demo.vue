<template>
  <div class="size" ref="sizeDom">
    try to resize the preview window <br />
    dimensions -- width: {{size.width}} px, height: {{size.height}} px
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useSize } from 'vue-use'

export default defineComponent({
  name: 'Size',
  setup () {
    const sizeDom = ref(null)
    const size = useSize(sizeDom)

    return {
      sizeDom,
      size
    }
  }
})
</script>