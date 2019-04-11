<template>
    <div class="container">

        <h2>My Meals</h2>

        <div class="my-meal" v-for="(meal, mealIndex) in $store.getters.myMeals" 
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
            
        </div>

    </div>
</template>

<script>
export default {
    name: 'MyMeals',
    methods: {
        removeMeal(mealIndex) {
            this.$store.commit('removeMeal', mealIndex);
        }
    }
}
</script>

<style>
.container .my-meal
{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-image: linear-gradient(to top right, #c6f2d8, #ffffff);
    padding: 10px 20px;
    margin-bottom: 10px;
}

.container .meal h4
{
    margin: 0;
    padding: 0;
}
</style>