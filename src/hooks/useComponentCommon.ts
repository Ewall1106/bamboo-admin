import { computed } from "vue";
import { pick } from "lodash-es";
import { TextComponentProps } from "../defaultProps";
const useComponentCommon = (props: any, picks: any) => {
  const styleProps = computed(() => pick(props, picks));
  const handleClick = () => {
    if (props.actionType === "url" && props.url) {
      window.location.href = props.url;
    }
  };
  return {
    styleProps,
    handleClick,
  };
};

export default useComponentCommon;
