<template>
    <div class="container">
        <h2>My meals</h2>
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
.container h2
{
    margin-bottom: 20px;
}

.meal
{
    background-image: linear-gradient(to top right, #c6f2d8, #ffffff);
    padding: 10px 20px;
    margin-bottom: 10px;
}

.meal h4
{
    margin: 0;
    padding: 0;
}
</style>
