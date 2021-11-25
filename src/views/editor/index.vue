<template>
  <div class="Editor">
    <a-layout>
      <a-layout>
        <a-layout-sider style="background: #fff">
          <ComponentsList :list="defaultTextTemplates" @onItemClick="addItem" />
        </a-layout-sider>
        <a-layout-content>
          <div>画布区域</div>
          <edit-wrapper
            v-for="component in components"
            :key="component.id"
            :id="component.id"
            @setActive="setActive"
            :active="component.id === (currentElement && currentElement.id)"
          >
            <component
              :is="component.name"
              v-bind="component.props"
            ></component>
          </edit-wrapper>
        </a-layout-content>
        <a-layout-sider style="background: #fff">
          组件属性
          <pre>
            {{ currentElement && currentElement.props }}
          </pre>

          <props-table
            v-if="currentElement && currentElement.props"
            :props="currentElement.props"
            @change="handleChange"
          ></props-table>
        </a-layout-sider>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { defineComponent, computed, ref, reactive, PropType } from "vue";

import LText from "@/components/LText.vue";
import ComponentsList from "@/components/ComponentsList.vue";
import EditWrapper from "@/components/EditWrapper.vue";
// import PropsTable from "@/components/PropsTable.vue";

import PropsTable from "@/components/PropsTable";
import { useInfoEffect } from "./hooks/useInfoEffect";
import defaultTextTemplates from "@/defaultTemplates";
import { GlobalProp } from "@/store";

export default defineComponent({
  name: "Editor",
  components: { LText, ComponentsList, EditWrapper, PropsTable },
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
    const currentElement = computed(
      () => store.getters["editor/getCurrentElement"]
    );
    const components = computed(() => store.state.editor.components);

    const addItem = (component: any) => {
      store.commit("editor/addComponent", component);
    };
    const setActive = (id: string) => {
      store.commit("editor/setActive", id);
    };
    const pageChange = (e: any) => {
      console.log("page", e);
      // store.commit("updatePage", e);
    };

    const handleChange = (e: any) => {
      console.log("event", e);
      store.commit("editor/updateComponent", e);
    };

    return {
      addItem,
      setActive,
      components,
      defaultTextTemplates,
      currentElement,
      pageChange,
      handleChange,
    };
  },
});
</script>
