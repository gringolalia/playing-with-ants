// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Daemonite from 'daemonite-material'
import './../node_modules/jquery/dist/jquery.min.js'
import './../node_modules/popper.js/dist/popper.min.js'
import './../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './../node_modules/daemonite-material/css/material.min.css'
import './../node_modules/daemonite-material/js/material.min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
