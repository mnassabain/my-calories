<template>
    <div class="addmeal-container">
        
        <!-- <h3>My meals</h3>
        <hr> -->
        
        <section-title message="My Meals"/>

        <div class="meal" v-for="(meal, mealIndex) in $store.getters.myMeals" 
            :key="meal.id" @click="togglePortionSize(mealIndex)">
            
            <div class="info">

                <h4>{{meal.name}}</h4>

                <span>{{meal.carbs}}g {{meal.protein}}g {{meal.fats}}g 
                    <strong>{{meal.calories}}kcal</strong>
                </span>
            </div>

            <transition name="expand">
            <div v-if="clicked == mealIndex" class="portion-size" key="kurac">
                <input type="number" v-model="portionSize" min="0" step="0.5" 
                    @click.stop/>
                <button id="add-button" @click="addMeal(meal)">Add</button>
            </div>
            </transition>


        </div>

    </div>
</template>

<script>
import SectionTitle from '../components/SectionTitle.vue';

export default {
    name: 'addmeal',
    components: {
        'section-title': SectionTitle,
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

            this.$router.go(-1);
        },
        togglePortionSize(index) {
            if (this.clicked != index) {
                this.clicked = index;
            }
            else {
                this.clicked = -1;
            }
        }
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

.hidden
{
    display: none !important;
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
/* .slide-down-enter, .slide-down-leave-to 
{
    transform: translateY(-100%);
}

.slide-down-enter-active, .slide-down-leave-active 
{
    transition: transform .45s ease;
} */


.expand-enter-active, .expand-leave-active {
    transition: all 0.45s ease;
    max-height: 40px;
    overflow: hidden;
}

.expand-enter, .expand-leave-to {
    max-height: 0;
}
</style>