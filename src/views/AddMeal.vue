<template>
    <div class="container">
        <h2>My meals</h2>
        <div class="meal" v-for="(meal, mealIndex) in $store.getters.myMeals" 
            :key="meal.id" 
            @click="togglePortionSize(mealIndex)">
            <h4>{{meal.name}}</h4>
            <span>{{meal.carbs}}g-{{meal.protein}}g-{{meal.fats}}g <strong>{{meal.calories}}kcal</strong></span>
            <div v-if="clicked == mealIndex" class="portion-size">
                <input type="number" :value="portionSize" min="0" step="0.5"/>
                <button id="add-button" @click="addMeal(meal)">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'addmeal',
    components: {
    },
    data: function() {
        return {
            portionSize: 1,
            clicked: -1,
        }
    },
    methods: {
        addMeal(meal) {
            this.$store.commit('addMeal', {
                "name": meal.name,
                "carbs": meal.carbs,
                "protein": meal.protein,
                "fats": meal.fats,
                "calories": meal.calories,
                "portionSize" : this.portionSize,
            });

            this.$router.push({name: 'home'});
        },
        togglePortionSize(index) {
            this.clicked = index;
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

.hidden
{
    display: none !important;
}

.portion-size
{
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
}

#add-button
{
    background-color: #134E5E;
    border: none;
    color: white;
    font-weight: bold;
    padding: 8px 25px;
}

.portion-size input[type=number]
{
    background-color: white;
    border: none;
    padding: 5px 15px;
    width: 30%;
}
</style>
