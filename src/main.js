// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import sexs from './api/globalVariable.js'
import dataTable from './api/globalVariable.js'
Vue.use(ElementUI)
// 引用axios，并设置基础URL为后端服务api地址npm
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8091'
// 将API方法绑定到全局
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.GLOBAL = sexs
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
