<template>
    <div class="meals">

        <meal v-for="(meal, mealIndex) in mealList" :key="meal.id"
            :info="meal" :index="mealIndex" @removedMeal="removeMeal"
            :removable="removable">
        </meal>

    </div>
</template>

<script>
import Meal from './Meal';

export default {
    name: 'MealList',
    props: {
        'mealList': Array,
        'removable': Boolean,
    },
    components: {
        'meal': Meal,
    },
    methods: {
        removeMeal(index) {
            this.$emit('removedMeal', index);
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