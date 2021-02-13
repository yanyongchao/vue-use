<template>
  <div class="lock-fn">
    <p>Submit count: {{count}}</p>
    <button @click="submit">Submit</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useLockFn } from 'vue-use'

function mockApiRequest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

export default defineComponent({
  name: 'Debounce',
  setup () {
    const count = ref(0)
    const submit = useLockFn(async () => {
      await mockApiRequest();
      count.value++
    });
    return {
      count,
      submit
    }
  }
})
</script>