<template>
  <div class="Home">
    <a-button type="primary">Primary Button</a-button>
    <a-button> {{ uid }}</a-button>
    {{ uid }}
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { defineComponent, computed, ref, reactive, PropType } from "vue";

import { useInfoEffect } from "./hooks/useInfoEffect";
import { GlobalProp } from "@/store";

export default defineComponent({
  name: "Home",
  props: {
    list: {
      type: Array as PropType<string[]>,
      required: true,
      default: () => [],
    },
  },
  components: {},
  setup() {
    // 初始化数据
    const zero = ref(0);
    const book = reactive({
      title: "Vue 3 Guide",
    });

    // 接口请求
    const { info, requestInfo } = useInfoEffect();
    requestInfo();

    // 路由导航
    const router = useRouter();
    // router.push({
    //   path: "/detail",
    //   query: {
    //     id: "111",
    //   },
    // });

    // 状态管理
    const store = useStore<GlobalProp>();
    const uid = computed(() => store.state.user.uid);

    return {
      info,
      uid,
    };
  },
});
</script>
