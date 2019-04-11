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
        date: undefined,
        todaysMeals: [],
        myMeals: [],
        weightHistory: [],
        mealHistory: [],
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
        removeMeal(state, mealIndex) {
            state.myMeals.splice(mealIndex, 1);
        },
        removeTodaysMeal(state, mealIndex) {
            state.todaysMeals.splice(mealIndex, 1);
        },
        clearTodaysMeals(state) {
            state.todaysMeals = [];
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
        },
        /* add todays meals to meal history */
        addTodaysMeals(state, entry) {
            state.mealHistory.push(entry);
        },
        clearMealHistory(state) {
            state.mealHistory = [];
        },
        updateDate(state, date) {
            state.date = date;
        }
    },
    getters: {
        todaysMeals: state => state.todaysMeals,
        myMeals: state => state.myMeals,
        weightHistory: state => state.weightHistory,
        goals: state => state.goals,
        mealHistory: state => state.mealHistory,
        date: state => state.date,
    },
    plugins: [vuexPersist.plugin],
})