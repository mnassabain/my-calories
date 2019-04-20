<template>
    <div class="meal-container">

        <div class="info">
            <h4>{{info.name}}</h4>
            <span>
                {{info.carbs * info.portionSize}}g
                {{info.protein * info.portionSize}}g
                {{info.fats * info.portionSize}}g 
                <strong>
                    {{info.calories * info.portionSize}}kcal
                </strong>
            </span>
        </div>
        <font-awesome-icon icon="trash-alt" id="delete-button" 
            @click="removeMeal(index)"/>

    </div>
</template>

<script>
export default {
    name: 'meal',
    props: [
        'info',
        'index',
    ],
    methods: {
        removeMeal(index) {
            // this.$store.commit('removeTodaysMeal', index);
            this.$emit('removedMeal', index);
        }
    },
    beforeMount() {
        if (this.info.portionSize == undefined) {
            this.info.portionSize = 1;
        }
    }
}
</script>

<style>
.meal-container
{
    background-color: #E0FFF9;
    padding: 10px 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.meal-container .info h4
{
    margin: 0;
    padding: 0;
}

.meal-container #delete-button
{
    font-size: 1.2em;
}
</style>