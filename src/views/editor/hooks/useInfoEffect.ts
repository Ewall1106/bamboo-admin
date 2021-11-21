import { reactive, toRefs } from "vue";
// import { getInfo } from "@/api"; // 接口请求

export interface BasicInfo {
  info: string;
}

export const useInfoEffect = () => {
  const basic = reactive<BasicInfo>({
    info: "", // 默认值
  });

  const requestInfo = async () => {
    // const res = await getInfo();
    // basic.info = res.data;
  };

  return { ...toRefs(basic), requestInfo };
};
