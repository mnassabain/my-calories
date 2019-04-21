<template>
    <div class="mealhistory-container">

        <section-title message="Meal history"/>

        <p v-if="(mealHistory.length == 0)">
            Every day at midnight we save your activity here.
        </p>

        <day v-for="(entry, entryIndex) in mealHistory" :key="entry.id"
            :entry="entry" :index="entryIndex"
            @clicked="viewDay">
        </day>
        
    </div>
</template>

<script>
import SectionTitle from '../components/SectionTitle';
import MealHistoryEntry from '@/components/MealHistoryEntry';

export default {
    name: 'mealHistory',
    components: {
        'section-title': SectionTitle,
        'day': MealHistoryEntry,
    },
    data: function() {
        return {
            mealHistory: [],
        }
    },
    methods: {
        clearMealHistory() {
            this.$store.commit('clearMealHistory');
            this.mealHistory = this.$store.getters.mealHistory;
        },
        viewDay(index) {
            this.$router.push('/mealHistory/' + index);
        }
    },
    beforeMount() {
        this.mealHistory = this.$store.getters.mealHistory;
    }
}
</script>

<style>
.mealhistory-container .day
{
    background-color: #E0FFF9;
    padding: 10px 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.mealhistory-container .day h4
{
    margin: 0;
    padding: 0;
}
</style>