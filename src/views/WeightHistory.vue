<template>
    <div class="container">
        <h2>Weight History</h2>

        <apexchart width="300" height="400" type="line" :options="options" :series="series"></apexchart>

        <div class="history">
            <h3>Previous entries</h3>
            <hr>
            <div class="weight-entry" v-for="(entry, entryIndex) in weightHistory" :key="entry.id">
                <div class="info">
                    <h4>{{getDateString(entry.date)}}</h4>
                    <span>{{entry.weight}}kg</span>
                </div>
                <font-awesome-icon icon="trash-alt" class="delete-button" @click="removeEntry(entryIndex)"/>
            </div>
        </div>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import moment from 'moment';

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
    },
    mounted() {
        this.weightHistory.forEach(element => {
            this.series[0].data.push(element.weight);
            this.options.xaxis.categories.push(element.date);
        });
    },
    methods: {
        removeEntry(entryIndex) {
            this.$store.commit('removeWeightEntry', entryIndex);
            this.weightHistory = this.$store.getters.weightHistory;
        },
        getDateString(entry) {
            return moment(entry.date).format('MMMM Do YYYY');
        }
    }
}
</script>

<style>
.history hr
{
    margin-bottom: 10px;
}

.weight-entry
{
    background-image: linear-gradient(to top right, #c6f2d8, #ffffff);
    padding: 10px 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.weight-entry h4
{
    margin: 0;
    padding: 0;
}

.weight-entry .delete-button
{
    font-size: 1.2em;
}
</style>
