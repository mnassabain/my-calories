<template>
    <div class="container">
        <div class="meal" v-for="meal in $store.getters.myMeals" :key="meal.id">
            <h4>{{meal.name}}</h4>
            <span>{{meal.carbs}}g-{{meal.protein}}g-{{meal.fats}}g <strong>{{meal.calories}}kcal</strong></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'addmeal',
    methods: {
        addMeal() {
            this.$store.commit('addMeal', {
                "name": "Tost",
                "carbs": 30,
                "protein": 15,
                "fats": 10,
                "calories": 270,
                "portionSize" : 1,
            });
        }
    }
}
</script>

<style>

</style>
