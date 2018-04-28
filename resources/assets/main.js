import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import App from './components/App'
import store from './store'
import routes from './routes' 
import 'vuetify/dist/vuetify.min.css'
import './assets/scss/app.scss'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Vuetify)

const router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})