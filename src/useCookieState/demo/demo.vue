<template>
  <div class="use-cookie-state">
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
import { useCookieState } from 'vue-use'

export default defineComponent({
  name: 'LocalStorageState',
  setup () {
    const message = useCookieState('user-message', {
      defaultValue: 'Hello~'
    })

    return {
      message
    }
  }
})
</script>