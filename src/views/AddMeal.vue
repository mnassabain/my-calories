<template>
    <div class="addmeal-container">
        
        <section-title message="My Meals"/>

        <p v-if="(myMeals.length == 0)">
            You haven't created any meals yet!
        </p>

        <meal-list :mealList="myMeals" expandable @addedMeal="addMeal"
            @expanded="expanded" :clicked="clicked"/>

    </div>
</template>

<script>
import SectionTitle from '../components/SectionTitle.vue';
import MealList from '../components/MealList';

export default {
    name: 'addmeal',
    components: {
        'section-title': SectionTitle,
        'meal-list': MealList,
    },
    data: function() {
        return {
            portionSize: 1,
            clicked: -1,

            myMeals: null,
        }
    },
    methods: {
        addMeal(meal, portionSize) {
            this.$store.commit('addMeal', {
                "name": meal.name,
                "carbs": meal.carbs,
                "protein": meal.protein,
                "fats": meal.fats,
                "calories": meal.calories,
                "portionSize" : portionSize,
            });

            this.$router.go(-1);
        },
        expanded(index) {
            this.clicked = index;
        }
    },
    beforeMount() {
        this.myMeals = this.$store.getters.myMeals;
    }
}
</script>

<style>

.addmeal-container .meal
{
    background-color: #E0FFF9;
    padding: 10px 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.addmeal-container .meal h4
{
    margin: 0;
    padding: 0;
}

.addmeal-container .meal .info
{
    margin: 0;
    padding: 0;
    background-color: inherit;
    z-index: 10;
}

.portion-size
{
    margin-top: 15px;
    display: flex;
}

#add-button
{
    background-color: #0D687A;
    border: none;
    color: white;
    font-weight: bold;
    padding: 8px 25px;
    margin-left: 5%;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.portion-size input[type=number]
{
    background-color: white;
    border: none;
    padding: 5px 15px;
    width: 20%;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* transitions */
.expand-enter-active, .expand-leave-active {
    transition: all 0.45s ease;
    max-height: 40px;
    overflow: hidden;
}

.expand-enter, .expand-leave-to {
    max-height: 0;
}
</style>