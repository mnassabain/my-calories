<template>
    <div class="mealhistoryday-container">
        <section-title :message="formatDate(history.date)"/>

        <div class="macro-info">
            <div class="macro">
                <h4>Carbs</h4>
                <span>{{history.macros.carbs}}g</span>
            </div>

            <div class="macro">
                <h4>Protein</h4>
                <span>{{history.macros.protein}}g</span>
            </div>

            <div class="macro">
                <h4>Fats</h4>
                <span>{{history.macros.fats}}g</span>
            </div>

            <div class="macro">
                <h4>Calories</h4>
                <span>{{history.macros.calories}}kcal</span>
            </div>
        </div>

        <div class="meals">
            
            <section-title message="Meals"/>

            <meal-list :mealList="history.meals"/>

        </div>
    </div>
</template>

<script>
import moment from 'moment';
import SectionTitle from '../components/SectionTitle';
import MealList from '../components/MealList';

export default {
    name: 'MealHistoryDay',
    components: {
        'section-title': SectionTitle,
        'meal-list': MealList,
    },
    data: function() {
        return {
            history: {},
        }
    },
    methods: {
        formatDate(date) {
            return moment(date).format('MMMM Do, YYYY');
        }
    },
    created() {
        this.history = this.$store.getters.mealHistory[this.$route.params.index];
    } 
}
</script>

<style>
.macro-info 
{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 15px;
}

.macro-info .macro
{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.macro-info .macro h4
{
    margin-bottom: 0px;
    padding: 0;
}
</style>