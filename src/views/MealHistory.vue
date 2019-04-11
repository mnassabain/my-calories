<template>
    <div class="container">
        <h2>Meal History</h2>

        <div class="meal" v-for="entry in mealHistory" :key="entry.id">
            <span>{{formatDate(entry.date)}}</span>
            <span>{{entry.meals}}</span>
        </div>

        <button @click="clearMealHistory">Clear</button>
        
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'mealHistory',
    data: function() {
        return {
            mealHistory: [],
        }
    },
    methods: {
        clearMealHistory() {
            this.$store.commit('clearMealHistory');
            this.mealHistory = this.$store.getters.mealHistory;
        },
        formatDate(date) {
            var d = new moment(date);
            return d.format('MMMM Do, YYYY');
        }
    },
    beforeMount() {
        this.mealHistory = this.$store.getters.mealHistory;
    }
}
</script>

<style>

</style>