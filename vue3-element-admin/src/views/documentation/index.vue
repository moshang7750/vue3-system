<template>
  <div>
    Documentation Page
   <input type="text" >
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Documentation',
  setup() {
    const value = ref('缓存测试')
    return {
      value
    }
  }
})
</script>

<style></style>
