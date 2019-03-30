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
      <span>240g/320g</span>
      <span>80g/120g</span>
      <span>30g/55g</span>
    </div>


    <div class="meals">
      <h3>Todays meals</h3>
      <hr>
      <div class="meal">
        <h4>Tost</h4>
        <span>30g/20g/18g//354kcal</span>
      </div>
      <div class="meal">
        <h4>Tost</h4>
        <span>30g/20g/18g//354kcal</span>
      </div>
      <div class="meal">
        <h4>Tost</h4>
        <span>30g/20g/18g//354kcal</span>
      </div>
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
  padding: 0;

  box-sizing: border-box;

  display: grid;
  grid-template: 
    'date overall-calories'
    'pie-chart macros'
    'meals meals';
}

.overall-calories
{
  grid-area: overall-calories;
  margin: 0;
  justify-self: end;
  text-align: right;
  margin-right: 20px;
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
  margin-right: 20px;
  align-self: center;
  margin-bottom: 50px;
}

.macros span
{
  line-height: 1.5em;
}

.meals
{
  grid-area: meals;
  width: 90%;
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
  margin-left: 10px;
}

</style>
