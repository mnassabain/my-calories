import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

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
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faBreadSlice)
library.add(faDrumstickBite)
library.add(faFish)
library.add(faPlus)
library.add(faHamburger)
library.add(faBars)
library.add(faArrowLeft)
library.add(faTrashAlt)
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


/* vuex persist */
const vuexPersist = new VuexPersist({
  key: 'my-calories',
  storage: localStorage
})


const store = new Vuex.Store({
  state: {
    todaysMeals: [],
    myMeals: [],
  },
  mutations: {
    addMeal(state, meal) {
      state.todaysMeals.push(meal);
    },
    createMeal(state, meal) {
      state.myMeals.push(meal);
    },
    removeTodaysMeal(state, mealIndex) {
      state.todaysMeals.splice(mealIndex, 1);
    }
  },
  getters: {
    todaysMeals: state => state.todaysMeals,
    myMeals: state => state.myMeals,
  },
  plugins: [vuexPersist.plugin],
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
