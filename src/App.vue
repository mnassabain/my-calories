<template>
  <div id="app">

    <div class="date">
      <h3>March 30, 2019</h3>
    </div>

    <div class="overall-calories">
      <h2>1800 kcal</h2>
      <hr>
      <h3>2500 kcal</h3>
    </div>

    <div class="pie-chart">
      <apexchart width="200" type="pie" :options="options" :series="series"
        id="chart">
      </apexchart>
    </div>

    
    <div class="macros">
      <div class="macro">
        <font-awesome-icon icon="bread-slice"/>
        <span>240g/320g</span>
      </div>

      <div class="macro">
        <font-awesome-icon icon="drumstick-bite"/>
        <span>80g/120g</span>
      </div>
      
      <div class="macro">
        <font-awesome-icon icon="fish"/>
        <span>30g/55g</span>
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

    <button id="add-meal">+</button>

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
      
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  margin: 0;
  padding: 5px 20px;

  box-sizing: border-box;

  display: grid;
  grid-template: 
    'date overall-calories overall-calories'
    'pie-chart macros macros'
    'meals meals meals';
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
  margin: 0;
  padding: 0;
}

button#add-meal
{
  border: none;
  background-color: #58ACFA;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  font-size: 2em;
  position: fixed;
  bottom: 30px;
  right: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}


</style>
