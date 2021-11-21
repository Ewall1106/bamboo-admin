import { Module } from "vuex";
import { GlobalProp } from "@/store";
import { v4 as uuidv4 } from "uuid";

export interface ComponentData {
  props: { [key: string]: any };
  id: string;
  name: string;
}

export interface EditorState {
  components: ComponentData[];
  currentElement: string;
}

// test
export const testComponents: ComponentData[] = [
  {
    id: uuidv4(),
    name: "l-text",
    props: { text: "hello", fontSize: "20px", color: "red" },
  },
  { id: uuidv4(), name: "l-text", props: { text: "hello2", fontSize: "10px" } },
];
// test

export const editor: Module<EditorState, GlobalProp> = {
  namespaced: true,
  state: {
    components: testComponents,
    currentElement: "",
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      // state.token = token;
    },
  },
  actions: {
    getInfo({ state, commit, rootState }) {
      commit("SET_TOKEN", 1231);
      // return new Promise((resolve, reject) => {
      //   getInfo(state.token)
      //     .then((res) => {
      //       const data = res.entry;
      //       if (!data) {
      //         reject(new Error("获取基本信息失败，请重新登录"));
      //       }
      //       commit("SET_USER_INFO", data);
      //       resolve(data);
      //     })
      //     .catch((error) => {
      //       reject(error);
      //     });
      // });
    },
  },
  getters: {
    // getInfo(state, getters, rootState) {},
  },
};
