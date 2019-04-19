<template>
    <div class="mealhistory-container">
        <section-title message="Meal history"/>

        <p v-if="(mealHistory.length == 0)">
            Every day at midnight we save your activity here.
        </p>

        <div class="day" v-for="(entry, entryIndex) in mealHistory" 
            :key="entry.id" @click="viewDay(entryIndex)">
            
            <h4>{{formatDate(entry.date)}}</h4>
            <span>
                {{entry.macros.carbs}}g
                {{entry.macros.protein}}g
                {{entry.macros.fats}}g 
                
                <strong>{{entry.macros.calories}}kcal</strong>
            </span>

        </div>
        
    </div>
</template>

<script>
import moment from 'moment';
import SectionTitle from '../components/SectionTitle';

export default {
    name: 'mealHistory',
    components: {
        'section-title': SectionTitle,
    },
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
.mealhistory-container .day
{
    background-color: #E0FFF9;
    padding: 10px 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.mealhistory-container .day h4
{
    margin: 0;
    padding: 0;
}
</style>