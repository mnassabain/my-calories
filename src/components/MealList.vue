<template>
    <div class="meals">

        <meal v-for="(meal, mealIndex) in mealList" :key="meal.id"
            :info="meal" :index="mealIndex"
            :removable="removable" :expandable="expandable" :clicked="clicked"
            @addedMeal="addMeal" @expanded="expanded" @removedMeal="removeMeal"
            >
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
        'expandable': Boolean,
        'clicked': Number,
    },
    components: {
        'meal': Meal,
    },
    methods: {
        removeMeal(index) {
            this.$emit('removedMeal', index);
        },
        addMeal(meal, portionSize) {
            this.$emit('addedMeal', meal, portionSize);
        },
        expanded(index) {
            this.$emit('expanded', index);
        }
    }
}
</script>

<style>
.meals
{
    width: 100%;
    justify-self: center;
}
</style>