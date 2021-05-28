<template>
  <div>
    <h1>Dashboard page</h1>
    <svg-icon icon-class="bug"></svg-icon>
    <!-- icon-class svg图标名称 class-name 额外的自定义类名 @click绑定事件 -->
    <svg-icon
      icon-class="404"
      class-name="custom-class"
      @click="sayHi"
    ></svg-icon>
    <input v-model="value" type="text" />
    <el-button>size改变</el-button>
  </div>
</template>

<script lang="ts">
import { getCurrentInstance, defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Dashboard',
  setup() {
    // 无法使用ctx 使用proxy来代替
    // https://blog.csdn.net/qq_39115469/article/details/113817592
    const { proxy } = getCurrentInstance()!
    const sayHi = () => {
      proxy?.$message.success('恭喜你，这是一条成功消息')
    }
    const route = useRoute()
    const value = ref('默认缓存')
    console.log(route, 'vroute')
    return {
      sayHi,
      value
    }
  }
})
</script>

<style lang="scss">
.custom-class {
  // 自定义样式404
  font-size: 200px;
  color: green;
}
</style>
