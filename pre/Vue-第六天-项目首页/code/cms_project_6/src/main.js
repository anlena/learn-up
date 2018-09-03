import Vue from 'vue'
import App from './App'
import router from './router'

// 引入axios
import Axios from 'axios'
// 配置MintUI
import MintUI from 'mint-ui'
// 引入css
import 'mint-ui/lib/style.css'
//引入自己的css
import './assets/css/global.css'

// 配置公共Url
Axios.defaults.baseURL = 'https://www.sinya.online/api/'
Vue.prototype.$axios = Axios

// 使用Mint-ui
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
