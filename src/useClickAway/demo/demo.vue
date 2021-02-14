<template>
  <div class="click-away">
    <div ref="boxRef">
      <button>box1</button>
    </div>
    <p>count: {{count}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, unref, Ref } from 'vue'
import { useClickAway } from 'vue-use'

export default defineComponent({
  name: 'EventListener',
  setup () {
    const count: Ref<number> = ref(0)
    const boxRef = ref(null)

    useClickAway(boxRef, () => {
      count.value++
    })
    return {
      count,
      boxRef
    }
  }
})
</script>