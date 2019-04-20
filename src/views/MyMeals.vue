<template>
    <div class="mymeals-container">

        <section-title message="My meals"/>

        <p v-if="(myMeals.length == 0)">
            You haven't created any meals yet!
        </p>

        <!-- <div class="my-meal" v-for="(meal, mealIndex) in myMeals" 
            :key="meal.id">
            
            <div class="info">

                <h4>{{meal.name}}</h4>
                
                <span>{{meal.carbs}}g-{{meal.protein}}g-{{meal.fats}}g 
                    <strong>{{meal.calories}}kcal</strong>
                </span>

            </div>

            <font-awesome-icon icon="trash-alt" 
                class="delete-button" 
                @click="removeMeal(mealIndex)"/>
            
        </div> -->

        <my-meals :mealList="myMeals" @removedMeal="removeMeal"/>


    </div>
</template>

<script>
import SectionTitle from '../components/SectionTitle';
import MealList from '../components/MealList';

export default {
    name: 'MyMeals',
    components: {
        'section-title': SectionTitle,
        'my-meals': MealList,
    },
    data() {
        return {
            myMeals: null,
        }
    },
    methods: {
        removeMeal(mealIndex) {
            this.$store.commit('removeMeal', mealIndex);
        }
    },
    beforeMount() {
        this.myMeals = this.$store.getters.myMeals;
    }
}
</script>

<style>
.mymeals-container .my-meal
{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: #E0FFF9;
    padding: 10px 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.mymeals-container .meal h4
{
    margin: 0;
    padding: 0;
}

.mymeals-container .meal #delete-button
{
    font-size: 1.2em;
}
</style>