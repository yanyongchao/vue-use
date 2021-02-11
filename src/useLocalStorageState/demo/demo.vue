<template>
  <div class="use-local-storage-state">
    <input 
      type="text"
      v-model="message"
      placeholder="Please enter some words...">
    <button @click="message = 'Hello~'">Reset</button>
    <button @click="message = ''">Clear</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLocalStorageState } from 'vue-use'

export default defineComponent({
  name: 'LocalStorageState',
  setup () {
    const message = useLocalStorageState('user-message', 'Hello~')

    return {
      message
    }
  }
})
</script>