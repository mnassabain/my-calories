import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* route components */
import Home from '../views/Home.vue'
import CreateMeal from '../views/CreateMeal.vue'
import AddMeal from '../views/AddMeal.vue'
import WeighIn from '../views/WeighIn.vue'
import WeightHistory from '../views/WeightHistory.vue'
import ModifyGoals from '../views/ModifyGoals.vue'

/* define routes */
const routes = [
  {'path': '/', component: Home, name: 'home'},
  {'path': '/createMeal', component: CreateMeal, name: 'createMeal'},
  {'path': '/addMeal', component: AddMeal, name: 'addMeal'},
  {'path': '/weighIn', component: WeighIn, name: 'weighIn'},
  {'path': '/weightHistory', component: WeightHistory, name: 'weightHistory'},
  {'path': '/modifyGoals', component: ModifyGoals, name: 'modifyGoals'},
]

/* create router */
export default new VueRouter({
  routes,
  mode: 'history',
})