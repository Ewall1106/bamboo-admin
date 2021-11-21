import { createStore } from "vuex";
import { user, UserState } from "./modules/user";
import { editor, EditorState } from "./modules/editor";

export interface GlobalProp {
  user: UserState;
  editor: EditorState;
}

export default createStore({
  modules: {
    user,
    editor,
  },
});
