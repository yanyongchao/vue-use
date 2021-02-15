<template>
  <div class="rect">
    <button ref="btnRef" @click="handleClick">You click</button>
    <p>rect: {{rect}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, unref, Ref } from 'vue'
import { useRect } from 'vue-use'

export default defineComponent({
  name: 'EventListener',
  setup () {
    const btnRef = ref(null)
    const rect: Ref<any> = ref(null)
    const handleClick = () => {
      rect.value = useRect(btnRef)
    }

    return {
      btnRef,
      rect,
      handleClick
    }
  }
})
</script>