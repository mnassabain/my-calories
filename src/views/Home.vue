<template>

    <div class="container">

        <div class="date">
            <h3>March 30, 2019</h3>
        </div>

        <div class="overall-calories">
            <h2>{{currentCalories}} kcal</h2>
            <hr>
            <h3>{{goalCalories}} kcal</h3>
        </div>

        <div class="pie-chart">
            <apexchart width="200" type="pie" :options="options" :series="series"
                id="chart">
            </apexchart>
        </div>

        
        <div class="macros">

            <div class="macro">
                <font-awesome-icon icon="bread-slice"/>
                <span>{{currentCarbs}}g/{{goalCarbs}}g</span>
            </div>

            <div class="macro">
                <font-awesome-icon icon="drumstick-bite"/>
                <span>{{currentProtein}}g/{{goalProtein}}g</span>
            </div>
            
            <div class="macro">
                <font-awesome-icon icon="fish"/>
                <span>{{currentFats}}g/{{goalFats}}g</span>
            </div>
        
        </div>


        <div class="meals">
            <h3>Todays meals</h3>
            <hr>

            <div class="meal" v-for="meal in todaysMeals" :key="meal.id">
                <h4>{{meal.name}}</h4>
                <span>{{meal.carbs * meal.portionSize}}g-{{meal.protein * meal.portionSize}}g-{{meal.fats * meal.portionSize}}g <strong>{{meal.calories * meal.portionSize}}kcal</strong></span>
            </div>

        </div>

        <router-link to="/addMeal" id="add-meal" v-on:click="addMeal()"><font-awesome-icon icon="plus"/></router-link>

    </div>

</template>


<script>
import VueApexCharts from 'vue-apexcharts';


export default {
    name: 'home',
    components: {
        'apexchart': VueApexCharts
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
            },
            series: [800, 300, 700],
            labels: ["Carbohydrates", "Protein", "Fat"],

            /* other */
            currentCalories: 1750,
            goalCalories: 2500,

            currentCarbs: 270,
            goalCarbs: 350,

            currentProtein: 80,
            goalProtein: 120,

            currentFats: 30,
            goalFats: 55,

            /* meals */
            todaysMeals: [
                {
                    "name": "Tost",
                    "carbs": 30,
                    "protein": 15,
                    "fats": 10,
                    "calories": 270,
                    "portionSize" : 1,
                },
                {
                    "name": "Tost",
                    "carbs": 30,
                    "protein": 15,
                    "fats": 10,
                    "calories": 270,
                    "portionSize" : 1.5,
                }
            ],
        }
    },
    methods: {
        update() {
            this.currentCalories = this.currentCarbs*4 + this.currentProtein*4 
                + this.currentFats*9;
        },
        addMeal(meal) {
            this.todaysMeals.push({
                "name": meal.name,
                "carbs": meal.carbs,
                "protein": meal.protein,
                "fats": meal.fats,
                "calories": meal.calories,
                "portionSize": meal.portionSize 
            });

            this.currentCarbs += meal.carbs * meal.portionSize;
            this.currentProtein += meal.protein * meal.portionSize;
            this.currentFats += meal.fats * meal.portionSize;

            this.update();
        }
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
}

.meal h4
{
    margin: 0;
    padding: 0;
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
