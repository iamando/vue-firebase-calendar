import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextAreaAutoSize from "vue-textarea-autosize";
import firebase from "firebase";
import "firebase/firestore";

Vue.use(VueTextAreaAutoSize);

Vue.config.productionTip = false;

firebase.initializeApp({
  // Config
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
