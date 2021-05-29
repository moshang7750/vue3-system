<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <Sidebar />
    </div>
    <div class="main-container">
      <div class="header">
        <NavBar @showSetting="openSetting" />
        <!-- 控制tagsview显示 -->
        <TagsView v-if="showTagsView" />
      </div>
      <!-- AppMain router-view -->
      <app-main />
    </div>
    <right-panel
      v-model="showSetting"
      title="样式风格设置"
      :size="SettingsPanelWidth"
    >
      <!-- settings 面板设置组件 -->
      <settings />
    </right-panel>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import Sidebar from './components/Sidebar/index.vue'
import AppMain from './components/AppMain.vue'
import NavBar from './components/NavBar/index.vue'
import TagsView from './components/TagsView/index.vue'
import RightPanel from '@/components/RightPanel/index.vue'
import Settings from '@/components/Settings/index.vue'
import varibalse from '@/styles/variables.scss'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    Sidebar,
    NavBar,
    AppMain,
    TagsView,
    RightPanel,
    Settings
  },
  setup() {
    const store = useStore()
    const showSetting = ref(false)

    const openSetting = () => {
      showSetting.value = true
    }
    // 是否显示tagsview
    const showTagsView = computed(() => store.state.settings.tagsView)

    return {
      showSetting,
      openSetting,
      // 调整panel宽度
      SettingsPanelWidth: varibalse.settingPanelWidth,
      showTagsView
    }
  }
})
</script>

<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  .main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .app-main {
      /* 50= navbar  50  如果有tagsview + 34  */
      min-height: calc(100vh - 84px);
    }
  }
}
</style>
