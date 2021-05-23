<template>
  <div class="navbar">
    <hambuger  @toggleClick="toggleSidebar" :is-active="sidebar.opened"/>
    <breadcrumb />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import Hambuger from '@/components/Hambuger/index.vue'
import { useStore } from '@/store/index'

export default defineComponent({
  name: 'Navbar',
  components: {
    Breadcrumb,
    Hambuger
  },
  setup() {
    // 使用我们自定义的useStore 具备类型提示
    // store.state.app.sidebar 对于getters里的属性没有类型提示
    const store = useStore()
    const toggleSidebar = () => {
      store.dispatch('app/toggleSidebar')
    }
    // 从getters中获取sidebar
    const sidebar = computed(() => store.getters.sidebar)

    return {
      toggleSidebar,
      sidebar
    }
  }
})
</script>
