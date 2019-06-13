import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 全局引入iview
// import iView from "iview";
// Vue.use(iView);

//按需引入iview
import "./config/iview-demand";

import "iview/dist/styles/iview.css";

Vue.config.productionTip = false;
// Vue.prototype.$Message.info({
//   content: "全局提示调用",
//   duration: 10,
//   closable: true
// });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
