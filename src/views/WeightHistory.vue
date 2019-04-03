<template>
    <div class="container">
        <h2>Weight History</h2>

        <apexchart width="300" height="400" type="line" :options="options" :series="series"></apexchart>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
    name: 'weightHistory',
    components: {
        'apexchart': VueApexCharts,
    },
    data: function() {
        return {
            options: {
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    type: "datetime",
                    categories: []
                },
                yaxis: {
                    forceNiceScale: true,
                    tickAmount: 1,
                },
            },
            series: [{
                name: 'Weight',
                data: []
            }],

            weightHistory: [],
        }
    },
    beforeMount() {
        this.weightHistory = this.$store.getters.weightHistory;
        console.log("before mount");
    },
    mounted() {
        this.weightHistory.forEach(element => {
            this.series[0].data.push(element.weight);
            this.options.xaxis.categories.push(element.date);
        });
        console.log(this.options.xaxis.categories);
        console.log(this.series[0].data);
    }
}
</script>

<style>

</style>
