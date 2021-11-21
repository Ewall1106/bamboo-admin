import { Module } from "vuex";
import { GlobalProp } from "@/store";

export interface UserState {
  token: string;
  uid: string;
}

export const user: Module<UserState, GlobalProp> = {
  namespaced: true,
  state: {
    token: "111",
    uid: "111",
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
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
