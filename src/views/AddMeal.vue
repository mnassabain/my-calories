<template>
    <div class="container">
        <button @click="addMeal">Click me</button>
        <p>{{$store.getters.todaysMeals}}</p>
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
