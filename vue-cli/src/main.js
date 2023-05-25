import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

/*
import App from './App.vue'

var App = {
  template: '<div>app</div>'
}
*/
/*

new Vue({
  components:{
    'app':App
  }
})

new Vue({
  render: h => h(App)
})
*/

/*
.$mount('#app')

new Vue({
  el : '#app'
})
*/
