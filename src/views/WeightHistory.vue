<template>
    <div class="weighthistory-container">

        <section-title message="Weight history"/>

        <!-- BUG: Page needs to be refreshed to display proper graph -->
        <apexchart width="275" height="300" type="line" :options="options" 
            :series="series" class="chart">
        </apexchart>

        <div class="history">
            
            <section-title message="Previous entries"/>

            <div class="weight-entry" 
                v-for="(entry, entryIndex) in weightHistory" 
                :key="entry.id">
                
                <div class="info">
                    
                    <h4>{{getDateString(entry.date)}}</h4>
                    <span>{{entry.weight}}kg</span>
                    
                </div>

                <font-awesome-icon icon="trash-alt" 
                    class="delete-button" 
                    @click="removeEntry(entryIndex)"/>
                
            </div>
        </div>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import moment from 'moment';
import SectionTitle from '@/components/SectionTitle';

export default {
    name: 'weightHistory',
    components: {
        'apexchart': VueApexCharts,
        'section-title': SectionTitle,
    },
    data: function() {
        return {
            options: {
                chart: {
                    id: 'vuechart-example',
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
            var index = this.weightHistory.length - entryIndex - 1;
            this.$store.commit('removeWeightEntry', index);
            this.weightHistory = this.$store.getters.weightHistory;
            this.series[0].data.splice(entryIndex, 1); 
        },
        getDateString(date) {
            return moment(date).format('MMMM Do, YYYY');
        }
    }
}
</script>

<style>
.weighthistory-container .history hr
{
    margin-bottom: 10px;
}

.weighthistory-container .weight-entry
{
    background-color: #E0FFF9;
    padding: 10px 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.weighthistory-container .weight-entry h4
{
    margin: 0;
    padding: 0;
}

.weighthistory-container .weight-entry .delete-button
{
    font-size: 1.2em;
}
</style>
