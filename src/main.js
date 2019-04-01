import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueRouter)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons'
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons'
import { faFish } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faBreadSlice)
library.add(faDrumstickBite)
library.add(faFish)
library.add(faPlus)
library.add(faHamburger)
library.add(faBars)
library.add(faArrowLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* route components */
import Home from './views/Home.vue'
import CreateMeal from './views/CreateMeal.vue'
import AddMeal from './views/AddMeal.vue'

/* define routes */
const routes = [
  {'path': '/', component: Home, name: 'home'},
  {'path': '/createMeal', component: CreateMeal, name: 'createMeal'},
  {'path': '/addMeal', component: AddMeal, name: 'addMeal'}
]

/* create router */
const router = new VueRouter({
  routes,
  mode: 'history',
})


const store = new Vuex.Store({
  state: {
    todaysMeals: [],
  },
  mutations: {
    addMeal(state, meal) {
      state.todaysMeals.push(meal);
    }
  },
  getters: {
    todaysMeals: state => state.todaysMeals,
  }
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
