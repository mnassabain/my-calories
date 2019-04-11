<template>

    <div class="container">

        <div class="date">
            <h3>{{getCurrentDate()}}</h3>
        </div>

        <div class="overall-calories">
            <h2>{{current.calories}} kcal</h2>
            <hr>
            <h3>{{goals.calories}} kcal</h3>
        </div>

        <div class="pie-chart">
            <apexchart width="200" type="pie" :options="options" 
                :series="series" id="chart">
            </apexchart>
        </div>

        
        <div class="macros">

            <div class="macro">
                <font-awesome-icon icon="bread-slice"/>
                <span>{{current.carbs}}g/{{goals.carbs}}g</span>
            </div>

            <div class="macro">
                <font-awesome-icon icon="drumstick-bite"/>
                <span>{{current.protein}}g/{{goals.protein}}g</span>
            </div>
            
            <div class="macro">
                <font-awesome-icon icon="fish"/>
                <span>{{current.fats}}g/{{goals.fats}}g</span>
            </div>

        </div>


        <div class="meals">
            <h3>Todays meals</h3>
            <hr>

            <div class="meal" v-for="(meal, mealIndex) 
                in $store.getters.todaysMeals" :key="meal.id">
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
                <font-awesome-icon icon="trash-alt" class="delete-button" 
                    @click="removeMeal(mealIndex)"/>
            </div>

        </div>

        <router-link to="/addMeal" id="add-meal" v-on:click="addMeal()">
            <font-awesome-icon icon="plus"/>
        </router-link>

    </div>

</template>


<script>
import VueApexCharts from 'vue-apexcharts';
import moment from 'moment';

export default {
    name: 'home',
    components: {
        'apexchart': VueApexCharts,
    },

    data: function() {
        return {
            /* pie chart */
            options: {
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                grid:
                {   
                    padding: {top: 0, bottom: 0, right: 0, left: 0},
                    margin: {top: 0, bottom: 0, right: 0, left: 0},
                },
                colors: [ '#c4f1be', '#76f7bf', '#35524a',],
                labels: ["Carbohydrates", "Protein", "Fat"],
            },
            series: [],

            /* other */
            goals: {},

            current: {
                carbs: 0,
                protein: 0,
                fats: 0,
                calories: 0,
            },

            /* meals */
            todaysMeals: null,
        }
    },
    methods: {
        update() {
            /* get values */
            this.todaysMeals.forEach(element => {
                this.current.carbs += element.carbs * element.portionSize;                
                this.current.protein += element.protein * element.portionSize;
                this.current.fats += element.fats * element.portionSize;
                this.current.calories += element.calories * element.portionSize;
            });
        },
        removeMeal(mealIndex) {
            this.$store.commit('removeTodaysMeal', mealIndex);
            this.current.calories = this.current.carbs = this.current.protein = 
                this.current.fats = 0;
            this.update();
        },
        getCurrentDate() {
            var date = moment(this.$store.getters.date);
            return date.format('MMMM Do, YYYY');
        }
    },
    beforeMount() {
        this.todaysMeals = this.$store.getters.todaysMeals;
        this.goals = this.$store.getters.goals;
        this.update();
        
        /* check if today is a new day */
        var lastDate = this.$store.getters.date;

        var checkDate = new moment();

        if (checkDate.dayOfYear() != moment(lastDate).dayOfYear()) {

            if (this.todaysMeals.length != 0)
            {
                this.$store.commit('addTodaysMeals', {
                    'date': lastDate,
                    'meals': this.todaysMeals,
                    'macros': {
                        'carbs': this.current.carbs,
                        'protein': this.current.protein,
                        'fats': this.current.fats,
                        'calories': this.current.calories,
                    }
                });

                this.$store.commit('clearTodaysMeals');
            }

            this.$store.commit('updateDate', checkDate);

            this.todaysMeals = [];
            this.current.calories = this.current.carbs = this.current.protein = 
                this.current.fats = 0;
        } 

    },
    mounted() {
        this.series = [
            this.current.carbs*4, this.current.protein*4, this.current.fats*9
        ];
    }
}
</script>


<style scoped>
.overall-calories
{
    grid-area: overall-calories;
    margin: 0;
    justify-self: end;
    text-align: right;
    margin-top: 10px;
}

.overall-calories h2
{
    margin: 5px 0;
    padding: 0;
}


.overall-calories h3
{
    opacity: 0.8;
    margin: 5px 0;
    padding: 0;
}

.overall-calories hr
{
    margin: 0;
    padding: 0;
}

.pie-chart
{
    grid-area: pie-chart;
    margin: 0;
    padding: 0;
    margin-top: -30px;
    margin-left: -20px;
}

.chart
{
    margin: 0;
    padding: 0;
}

.macros
{
    grid-area: macros;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-self: center;
    margin-bottom: 50px;
}

.macro span
{
    line-height: 1.5em;
}

.macro
{
    display: flex;
    width: 90%;
    height: 1.7em;
    justify-content: space-between;
    align-items: center;
}

.meals
{
    grid-area: meals;
    width: 100%;
    justify-self: center;
}

.meals h3
{
    margin: 5px 0;
    padding: 0;
}

.meals hr
{
    margin-bottom: 15px;
}

.meal
{
    background-image: linear-gradient(to top right, #c6f2d8, #ffffff);
    padding: 10px 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.meal h4
{
    margin: 0;
    padding: 0;
}

.meal .delete-button
{
    font-size: 1.2em;
}

.date
{
    grid-area: date;
    margin: 15px 0;
    padding: 0;
}

#add-meal
{
    border: none;
    background-color: #58ACFA;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    color: white;
    font-weight: bold;
    font-size: 2em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

#add-meal
{
    position: fixed;
    bottom: 30px;
    right: 30px;
    font-size: 1.5em;
    background-image: linear-gradient(to top right, #134E5E, #71B280);
}

.container
{
    margin: 0;
    padding: 0;
    z-index: -1;

    display: grid;
    grid-template:
        'header header header'
        'date overall-calories overall-calories'
        'pie-chart macros macros'
        'meals meals meals';
}

</style>
