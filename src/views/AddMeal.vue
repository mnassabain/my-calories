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