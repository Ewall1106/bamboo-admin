<template>
  <div class="Editor">
    <a-layout>
      <a-layout>
        <a-layout-sider>Sider</a-layout-sider>
        <a-layout-content>
          <div>画布区域</div>
          <div class="list" v-for="item in components" :key="item.id">
            {{ item.props.text }}
          </div></a-layout-content
        >
        <a-layout-sider>Sider</a-layout-sider>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { defineComponent, computed, ref, reactive, PropType } from "vue";

import { useInfoEffect } from "./hooks/useInfoEffect";
import { GlobalProp } from "@/store";

export default defineComponent({
  name: "Editor",
  components: {},
  setup() {
    // // 初始化数据
    // const zero = ref(0);
    // const book = reactive({
    //   title: "Vue 3 Guide",
    // });

    // // 接口请求
    // const { info, requestInfo } = useInfoEffect();
    // requestInfo();

    // // 路由导航
    // const router = useRouter();
    // // router.push({
    // //   path: "/detail",
    // //   query: {
    // //     id: "111",
    // //   },
    // // });

    // 状态管理
    const store = useStore<GlobalProp>();
    const components = computed(() => store.state.editor.components);

    return {
      components,
    };
  },
});
</script>
