<template>
  <div id="app">

    <div class="header">
      <font-awesome-icon id="bars" icon="bars"></font-awesome-icon>
      <h1>MyCalories</h1>
    </div>

    <div class="main-container">

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
        <div class="meal">
          <h4>Tost</h4>
          <span>30g-20g-18g <strong>354kcal</strong></span>
        </div>
        <div class="meal">
          <h4>Tost</h4>
          <span>30g-20g-18g <strong>354kcal</strong></span>
        </div>
        <div class="meal">
          <h4>Tost</h4>
          <span>30g-20g-18g <strong>354kcal</strong></span>
        </div>
        <div class="meal">
          <h4>Tost</h4>
          <span>30g-20g-18g <strong>354kcal</strong></span>
        </div>
        <div class="meal">
          <h4>Tost</h4>
          <span>30g-20g-18g <strong>354kcal</strong></span>
        </div>
      </div>

      <button id="create-meal"><font-awesome-icon icon="hamburger"/></button>
      <button id="add-meal" v-on:click="update()"><font-awesome-icon icon="plus"/></button>

    </div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'app',
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
        }
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
    }
  },
  methods: {
    update() {
      this.currentCalories = this.currentCarbs*4 + this.currentProtein*4 
        + this.currentFats*9;
    }
  }
}

</script>

<style>

*
{
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  margin: 0;
  padding: 0;

  box-sizing: border-box;
}

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

.meal
{
  background-color: #d6ffe6;
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

button
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
}

button#add-meal
{
  position: fixed;
  bottom: 30px;
  right: 30px;
}

button#create-meal
{
  position: fixed;
  bottom: 100px;
  right: 30px;
}

.header
{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  margin-bottom: 15px;
  padding: 20px 20px;
  grid-area: header;
  background-image: linear-gradient(to top right, #134E5E, #71B280);

  position: fixed;
  top:0;
  left: 0;
  right: 0;
  z-index: 3;
}

.header h1
{
  color: white;
  font-size: 1.5em;
  
  order: 2;
}

.header #bars
{
  color: white;
  font-size: 1.7em;
  order: 1;
}

.main-container
{
  margin: 0;
  padding: 0px 20px;
  margin-top: 90px;
  z-index: -1;

  display: grid;
  grid-template:
    'header header header'
    'date overall-calories overall-calories'
    'pie-chart macros macros'
    'meals meals meals';
}


</style>
