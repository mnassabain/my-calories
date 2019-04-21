<template>
    <div class="line-chart-container">
        <apexchart width="275" height="300" type="line" :options="options" 
            :series="series" class="chart">
        </apexchart>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
    name: 'LineChart',
    components: {
        'apexchart': VueApexCharts,
    },
    props: [
        'datax',
        'datay',
    ],
    data: function() {
        return {
            options: {
                chart: {
                    toolbar: {
                        show: false,
                    },
                },
                xaxis: {
                    type: "datetime",
                    categories: []
                },
                yaxis: {
                    forceNiceScale: true,
                    tickAmount: 1,
                },
                grid:
                {   
                    padding: {top: 0, bottom: 0, right: 0, left: 0},
                    margin: {top: 0, bottom: 0, right: 0, left: 0},
                },
                colors: ['#0D687A'],
            },
            series: [{
                name: 'Weight',
                data: []
            }],

            weightHistory: [],
        }
    },
    beforeMount() {
        this.series[0].data = this.datay;
        this.options.xaxis.categories = this.datax;
    }
}
</script>

<style>

</style>
