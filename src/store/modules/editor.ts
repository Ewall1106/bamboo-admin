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
    props: { text: "hello", fontSize: "20px", color: "red", fontFamily: "red" },
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
    addComponent(state, props) {
      state.components.push(props);
    },
    setActive(state, id) {
      console.log(">>>", id);
      state.currentElement = id;
    },
    updateComponent(state, { key, value }) {
      console.log(key, value);
      const updatedComponent = state.components.find((component) => {
        return component.id === state.currentElement;
      });

      if (updatedComponent) {
        updatedComponent.props[key] = value;
        // if (isRoot) {
        //   // https://github.com/microsoft/TypeScript/issues/31663
        //   (updatedComponent as any)[key as string] = value;
        // } else {
        //   const oldValue = Array.isArray(key)
        //     ? key.map((key) => updatedComponent.props[key])
        //     : updatedComponent.props[key];
        //   if (!state.cachedOldValues) {
        //     state.cachedOldValues = oldValue;
        //   }
        //   pushHistoryDebounce(state, { key, value, id });
        //   if (Array.isArray(key) && Array.isArray(value)) {
        //     key.forEach((keyName, index) => {
        //       updatedComponent.props[keyName] = value[index];
        //     });
        //   } else if (typeof key === "string" && typeof value === "string") {
        //     updatedComponent.props[key] = value;
        //   }
        // }
      }
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
    getCurrentElement: (state) => {
      const val: any = state.components.find(
        (item) => item.id === state.currentElement
      );
      console.log(">>>>", val);
      return val;
    },
  },
};
