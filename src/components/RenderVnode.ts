import { defineComponent } from "vue";

const RenderVnode = defineComponent({
  props: {
    vNode: {
      type: [Object, String],
      required: true,
    },
  },
  render() {
    // text: <span style={{ fontFamily: font.value}}>{font.text}</span> as VNode
    return this.vNode;
  },
});

export default RenderVnode;
