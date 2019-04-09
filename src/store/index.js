import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

/* vuex persist */
const vuexPersist = new VuexPersist({
    key: 'my-calories',
    storage: localStorage
})
  
/* vuex store */
export default new Vuex.Store({
    state: {
        todaysMeals: [],
        myMeals: [],
        weightHistory: [],
        goals: {
            'carbs': 0,
            'protein': 0,
            'fats': 0,
            'calories': 0,
        },
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
        },
        addWeight(state, element) {
            state.weightHistory.push(element);
        },
        updateGoals(state, goals) {
            state.goals.carbs = goals.carbs;
            state.goals.protein = goals.protein;
            state.goals.fats = goals.fats;
            state.goals.calories = goals.calories;
        },
        removeWeightEntry(state, entryIndex) {
            state.weightHistory.splice(entryIndex, 1);
        }
    },
    getters: {
        todaysMeals: state => state.todaysMeals,
        myMeals: state => state.myMeals,
        weightHistory: state => state.weightHistory,
        goals: state => state.goals,
    },
    plugins: [vuexPersist.plugin],
})