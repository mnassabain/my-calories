<template>
    <div class="meal-history-entry" @click="clicked">
        
        <h4>{{formatDate(entry.date)}}</h4>
        <span>
            {{entry.macros.carbs}}g
            {{entry.macros.protein}}g
            {{entry.macros.fats}}g 
            
            <strong>{{entry.macros.calories}}kcal</strong>
        </span>

    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'MealHistoryEntry',
    props: [
        'entry',
        'index',
    ],
    methods: {
        formatDate(date) {
            var d = new moment(date);
            return d.format('MMMM Do, YYYY');
        },
        clicked() {
            this.$emit('clicked', this.index);
        }
    }
}
</script>

<style>
.meal-history-entry
{
    background-color: #E0FFF9;
    padding: 10px 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.meal-history-entry h4
{
    margin: 0;
    padding: 0;
}
</style>