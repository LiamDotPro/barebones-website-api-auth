import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueSocketIo from 'vue-socket.io'
import VueLocalStorage from 'vue-ls'

Vue.use(VueLocalStorage)
Vue.use(VueSocketIo, 'http://localhost:2001')
// Vue.use(VueSocketIo, socketio('http://localhost:2000', store))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
