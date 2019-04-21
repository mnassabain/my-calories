<template>
    <div class="weight-entry">
        
        <div class="info">
            
            <h4>{{getDateString(entry.date)}}</h4>
            <span>{{entry.weight}}kg</span>
            
        </div>

        <font-awesome-icon icon="trash-alt" 
            class="delete-button" @click="removeEntry()"/>
        
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'WeightEntry',
    props: [
        'entry',
        'index',
    ],
    methods: {
        getDateString(date) {
            return moment(date).format('MMMM Do, YYYY');
        },
        removeEntry() {
            this.$emit('removed', this.index);
        }
    }
}
</script>

<style>
.weight-entry
{
    background-color: #E0FFF9;
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