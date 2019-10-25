import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'

import Router from 'vue-router'
 

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
// Vue.use(MintUI)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
