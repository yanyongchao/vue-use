<template>
  <div class="event-emitter">
    <p>You received a message</p>
    <button style="margin-bottom: 16px;"
      @click="handleClick">Reply</button>
    <input-box />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useEventEmitter } from 'vue-use'
import InputBox from './inputBox.vue'

export default defineComponent({
  name: 'Debounce',
  components: {
    InputBox
  },
  setup () {
    const event$ = useEventEmitter()

    const handleClick = () => {
      event$.emit('focus$')
    }

    return {
      handleClick
    }
  }
})
</script>