import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons'
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons'
import { faFish } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faBreadSlice)
library.add(faDrumstickBite)
library.add(faFish)
library.add(faPlus)
library.add(faHamburger)
library.add(faBars)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter)

/* route components */
import Home from './views/Home.vue'

/* define routes */
const routes = [
  {'path': '/', component: Home}
]

/* create router */
const router = new VueRouter({
  routes
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
