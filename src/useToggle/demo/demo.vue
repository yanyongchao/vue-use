<template>
  <div class="toggle">
    <p>Effect: {{state}}</p>
    <p>
      <button type="button" @click="toggle()">
        Toggle
      </button>
      <button type="button" @click="toggle(false)" style="margin: '0 8px'">
        Toggle False
      </button>
      <button type="button"  @click="toggle(true)">
        Toggle True
      </button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useToggle } from 'vue-use'

export default defineComponent({
  name: 'Toggle',
  setup () {
    const [state, toggle] = useToggle()

    return {
      state,
      toggle
    }
  }
})
</script>
