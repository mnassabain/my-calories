<template>
    <div class="container">
        <button @click="addMeal">Click me</button>
        <p>{{$store.getters.myMeals}}</p>
    </div>
</template>

<script>
export default {
    name: 'addmeal',
    methods: {
        addMeal() {
            this.$store.commit('addMeal', {"name": "bljak"});
        }
    }
}
</script>

<style>

</style>
