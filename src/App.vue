<template>
  <div id="app">
    
    <div class="overall-calories">
      <h2>1800 kcal</h2>
      <hr>
      <h3>2500 kcal</h3>
    </div>

    <div class="pie-chart">
      <apexchart width="230" type="pie" :options="options" :series="series"
        id="chart">
      </apexchart>
    </div>

    <div class="macros">
      <span>240g/320g</span>
      <span>80g/120g</span>
      <span>30g/55g</span>
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
      },
      series: [800, 300, 700],
      labels: ["Carbohydrates", "Protein", "Fat"]
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
    'overall-calories overall-calories'
    'pie-chart macros'
    'meals meals';
}

.overall-calories
{
  grid-area: overall-calories;
  margin: 0;
  width: 33%;
  justify-self: end;
  text-align: right;
  margin-right: 20px;
  margin-top: 10px;
}

h2
{
  margin: 5px 0;
  padding: 0;
}


h3
{
  opacity: 0.8;
  margin: 5px 0;
  padding: 0;
}

hr
{
  margin: 0;
  padding: 0;
}

.pie-chart
{
  grid-area: pie-chart;
  margin: 0;
  padding: 0;
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
  margin-bottom: 70px;
}

.macros span
{
  line-height: 1.5em;
}

</style>
