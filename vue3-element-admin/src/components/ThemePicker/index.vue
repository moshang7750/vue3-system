<template>
  <el-color-picker
    v-model="theme"
    class="theme-picker"
    :predefine="themeColor"
    popper-class="theme-picker-dropdown"
  />
</template>

<script>
import { useStore } from '@/store'
import { defineComponent, ref, computed, watch } from 'vue'
import { useGenerateTheme } from '@/hooks/useGenerateTheme'

export default defineComponent({
  name: 'ThemePicker',
  setup() {
    const store = useStore()
    // 预设可选颜色
    // eslint-disable-next-line comma-spacing, comma-dangle
    const themeColor = [
      '#409EFF',
      '#1890ff',
      '#304156',
      '#212121',
      '#11a983',
      '#13c2c2',
      '#6959CD',
      '#f5222d'
    ]
    // store中获取默认主题色
    const defaultTheme = computed(() => store.state.settings.theme)
    const theme = ref('')

    // 主题生成方法 稍后
    const { generateTheme } = useGenerateTheme()

    // 监听默认样式
    watch(
      defaultTheme,
      value => {
        theme.value = value
      },
      {
        immediate: true
      }
    )

    // 根据theme选择变化 重新生成主题
    watch(theme, value => {
      // 同步store
      store.dispatch('settings/changeSetting', { key: 'theme', value })
      // 根据theme选择变化 重新生成主题
      generateTheme(value)
    })

    return {
      themeColor,
      theme
    }
  }
})
</script>

<style lang="scss">
.theme-picker {
  height: 26px !important;
  margin-right: 8px;
  .el-color-picker__trigger {
    height: 26px !important;
    width: 26px !important;
    padding: 2px;
  }
}

.theme-message,
.theme-picker-dropdown {
  z-index: 99999 !important;
}

.theme-picker-dropdown .el-color-dropdown__link-btn {
  display: none;
}
</style>
