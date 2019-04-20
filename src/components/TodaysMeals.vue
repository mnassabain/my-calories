<template>
    <div class="meals">
            
        <section-title message="Todays meals"/>

        <p v-if="(mealList.length == 0)">
            Press the '+' button to add a meal.
        </p>

        <meal v-for="(meal, mealIndex) in mealList" :key="meal.id"
            :info="meal" :index="mealIndex" @removedMeal="update">
        </meal>

    </div>
</template>

<script>
import SectionTitle from './SectionTitle';
import Meal from './Meal';

export default {
    name: 'TodaysMeals',
    props: ['mealList'],
    components: {
        'section-title': SectionTitle,
        'meal': Meal,
    },
    methods: {
        update() {
            this.$emit('removedMeal');
        }
    }
}
</script>

<style>
.meals
{
    grid-area: meals;
    width: 100%;
    justify-self: center;
}

.meals p
{
    width: 100%;
    /* text-align: center; */
}
</style>