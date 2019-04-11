<template>
    <div class="container">
        <h2>Meal History</h2>

        <div class="meal" v-for="(entry, entryIndex) in mealHistory" 
            :key="entry.id" @click="viewDay(entryIndex)">
            <h4>{{formatDate(entry.date)}}</h4>
            <span>
                {{entry.macros.carbs}}g-
                {{entry.macros.protein}}g-
                {{entry.macros.fats}}g 
                
                <strong>{{entry.macros.calories}}kcal</strong>
            </span>
            <br>
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
        },
        viewDay(index) {
            this.$router.push('/mealHistory/' + index);
        }
    },
    beforeMount() {
        this.mealHistory = this.$store.getters.mealHistory;
    }
}
</script>

<style>

</style>