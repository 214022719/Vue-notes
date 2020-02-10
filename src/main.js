// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import router from './router'
import axios from 'axios'
import qs from 'qs'
import api from './axios/index'
Vue.prototype.$axios = axios    
Vue.prototype.qs = qs   
Vue.prototype.$api = api;
Vue.use(ViewUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
