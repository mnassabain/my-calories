<template>
    <div class="mymeals-container">

        <section-title message="My meals"/>

        <p v-if="(myMeals.length == 0)">
            You haven't created any meals yet!
        </p>

        <my-meals :mealList="myMeals" @removedMeal="removeMeal" removable/>

    </div>
</template>

<script>
import SectionTitle from '../components/SectionTitle';
import MealList from '../components/MealList';

export default {
    name: 'MyMeals',
    components: {
        'section-title': SectionTitle,
        'my-meals': MealList,
    },
    data() {
        return {
            myMeals: null,
        }
    },
    methods: {
        removeMeal(mealIndex) {
            this.$store.commit('removeMeal', mealIndex);
        }
    },
    beforeMount() {
        this.myMeals = this.$store.getters.myMeals;
    }
}
</script>