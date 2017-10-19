import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueLocalStorage from 'vue-ls'

Vue.use(VueLocalStorage)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
