<template>
  <component :is="tag" :style="styleProps" class="l-text">
    {{ text }}
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { pick } from "lodash-es";

export default defineComponent({
  name: "LText",
  props: {
    text: String,
    fontSize: String,
    tag: {
      type: String,
      default: () => "div",
    },
  },
  setup(props) {
    const styleProps = computed(() => pick(props, ["fontSize"]));
    return {
      styleProps,
    };
  },
});
</script>

<style scoped lang="scss"></style>
