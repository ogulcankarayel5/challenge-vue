import { createStore } from "vuex";
import list from "./modules/list";
import ui from "./modules/ui";

export default createStore({
  modules: {
    list,
    ui,
  },
});
