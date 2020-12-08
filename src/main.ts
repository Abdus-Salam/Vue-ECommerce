import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "material-design-icons-iconfont/dist/material-design-icons.css";
import "vuetify/dist/vuetify.min.css";
import "../public/css/style.css";

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: (h) => h(App),
}).$mount("#app");
