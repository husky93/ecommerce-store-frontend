import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faShoppingCart, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import App from "./App.vue";
import router from "./router";
import store from "./store";

library.add(faShoppingCart, faTrashCan);

import "./assets/main.css";

const app = createApp(App);

app
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
