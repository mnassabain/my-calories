<template>
    <div class="pie-chart-container">
        <apexchart width="200" type="pie" :options="options" 
            :series="series" id="chart">
        </apexchart>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
    name: 'PieChart',
    components: {
        'apexchart': VueApexCharts,
    },
    props: [
        'series',
    ],
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
                },
                colors: ['#FCEC52', '#ADE25D', '#628395'],
                labels: ['Protein', 'Fats', 'Carbs'],
            },
        }
    }
}
</script>

<style>

</style>
