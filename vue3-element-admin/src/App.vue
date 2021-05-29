<template>
  <router-view></router-view>
</template>

<script>
import { useGenerateTheme } from '@/hooks/useGenerateTheme'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    // 根据此时store中主题色生成
    useGenerateTheme()
  }
})
</script>

<style></style>
