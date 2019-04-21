<template>
    <div class="weighthistory-container">

        <section-title message="Weight history"/>

        <div class="chart-container">
            <line-chart :datax="dates" :datay="measurements"/>
        </div>

        <div class="history">
            
            <section-title message="Previous entries"/>

            <p v-if="(weightHistory.length == 0)">
                Enter your weight to track results.
            </p>

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
import moment from 'moment';
import SectionTitle from '@/components/SectionTitle';
import LineChart from '@/components/LineChart';

export default {
    name: 'weightHistory',
    components: {
        'section-title': SectionTitle,
        'line-chart': LineChart,
    },
    data: function() {
        return {
            weightHistory: [],
            dates: [],
            measurements: [],
        }
    },
    beforeMount() {
        this.weightHistory = this.$store.getters.weightHistory;

        this.weightHistory.forEach(element => {
            this.measurements.push(element.weight);
            this.dates.push(element.date);
        });
    },
    methods: {
        removeEntry(entryIndex) {
            var index = this.weightHistory.length - entryIndex - 1;
            /* remove from store */
            this.$store.commit('removeWeightEntry', index);

            /* get new one */
            this.weightHistory = this.$store.getters.weightHistory;
            
            /* remove from data arrays */
            this.measurements.splice(entryIndex, 1); 
            this.dates.splice(entryIndex, 1); 
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
