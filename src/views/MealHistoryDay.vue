<template>
    <div class="mealhistoryday-container">

        <section-title :message="formatDate(history.date)"/>

        <macros :macros="history.macros"/>

        <div class="meals">
            <section-title message="Meals"/>
            <meal-list :mealList="history.meals"/>
        </div>
        
    </div>
</template>

<script>
import moment from 'moment';
import SectionTitle from '../components/SectionTitle';
import MealList from '../components/MealList';
import SimpleMacros from '@/components/SimpleMacros';

export default {
    name: 'MealHistoryDay',
    components: {
        'section-title': SectionTitle,
        'meal-list': MealList,
        'macros': SimpleMacros,
    },
    data: function() {
        return {
            history: {},
        }
    },
    methods: {
        formatDate(date) {
            return moment(date).format('MMMM Do, YYYY');
        }
    },
    created() {
        this.history = this.$store.getters.mealHistory[this.$route.params.index];
    } 
}
</script>