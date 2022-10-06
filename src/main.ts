import Vue from "vue";
import App from "./App.vue";

// import router from "./router";
import store from "./store";

import vuetify from "./plugins/vuetify";
// import './assets/css/basic/reset.css';
// import './assets/css/basic/main.css';
// import './assets/css/component/navPickerApp.css';
import "./assets/css/basic/reset.css";
import "./assets/css/basic/main.css";
import "./assets/css/component/navPickerApp.css";
import "material-design-icons-iconfont";

Vue.config.productionTip = false;

new Vue({
  // router,
  store,

  vuetify,
  render: (h) => h(App),
}).$mount("#app");
