<template>
    <div class="container">
        <h2>{{formatDate(history.date)}} log</h2>

        <div class="macro-info">
            <div class="macro">
                <h4>Carbs</h4>
                <span>{{history.macros.carbs}}g</span>
            </div>

            <div class="macro">
                <h4>Protein</h4>
                <span>{{history.macros.protein}}g</span>
            </div>

            <div class="macro">
                <h4>Fats</h4>
                <span>{{history.macros.fats}}g</span>
            </div>

            <div class="macro">
                <h4>Calories</h4>
                <span>{{history.macros.calories}}kcal</span>
            </div>
        </div>

        <div class="meals">
            <h3>Meal list</h3>
            <hr id="meal-list">
            <div class="meal" v-for="meal in history.meals" :key="meal.id">
                <div class="info">
                    <h4>{{meal.name}}</h4>
                    <span>
                        {{meal.carbs * meal.portionSize}}g-
                        {{meal.protein * meal.portionSize}}g-
                        {{meal.fats * meal.portionSize}}g 
                        <strong>
                            {{meal.calories * meal.portionSize}}kcal
                        </strong>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'MealHistoryDay',
    data: function() {
        return {
            history: {}
        }
    },
    methods: {
        formatDate(date) {
            return moment(date).format('MMMM Do, YYYY');
        }
    },
    created() {
        this.history = this.$store.getters.mealHistory[this.$route.params.index];
    } 
}
</script>

<style>
.macro-info 
{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 15px;
}

.macro-info .macro
{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.macro-info .macro h4
{
    margin-bottom: 0px;
    padding: 0;
}

#meal-list
{
    margin-bottom: 15px;
}

</style>