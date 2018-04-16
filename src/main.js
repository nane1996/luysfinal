// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from 'firebase'
import jQuery from 'jquery'
global.jQuery = jQuery
let Bootstrap = require('bootstrap')
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Form } from 'bootstrap-vue/es/components'
import { Layout } from 'bootstrap-vue/es/components'
import { Button } from 'bootstrap-vue/es/components'
import axios from 'axios'
import FormData from 'form-data'

Vue.use(Button);

Vue.use(Layout);

Vue.use(Form);

Vue.use(BootstrapVue);

Vue.use(axios);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyBST02qWmOB4qn1IFvKxnmAkEAb9S1SMFE",
      authDomain: "luys-9ee7c.firebaseapp.com",
      databaseURL: "https://luys-9ee7c.firebaseio.com",
      projectId: "luys-9ee7c",
      storageBucket: "luys-9ee7c.appspot.com",
      messagingSenderId: "39821917453"
    })
  }
})
