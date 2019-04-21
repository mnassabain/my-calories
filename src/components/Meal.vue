<template>
    <div class="meal-container" @click="togglePortionSize()">

        <!-- name, nutrients, etc. -->
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

        <!-- delete icon -->
        <font-awesome-icon v-if="removable" icon="trash-alt" id="delete-button" 
            @click="removeMeal(index)"/>

        <!-- expandable to choose portion size -->
        <transition name="expand">
        <div v-if="expandable && clicked == index" class="portion-size">
            <input type="number" v-model="portionSize" min="0" step="0.5" 
                @click.stop/>
            <button id="add-button" @click="addMeal(info)">Add</button>
        </div>
        </transition>

    </div>
</template>

<script>
export default {
    name: 'meal',
    props: [
        'info',
        'index',
        'removable',
        'expandable',
        'clicked',
    ],
    data: function() {
        return {
            portionSize: 1,
        }
    },
    methods: {
        removeMeal(index) {
            this.$emit('removedMeal', index);
        },
        addMeal(meal) {
            this.$emit('addedMeal', meal, this.portionSize);
        },
        togglePortionSize() {
            this.$emit('expanded', this.index);
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

    display: grid;
    grid-template: 
        'info delete-button'
        'portion-chooser n'
}

.meal-container .info h4
{
    margin: 0;
    padding: 0;
}

.meal-container #delete-button
{
    font-size: 1.2em;
    grid-area: delete-button;
    justify-self: end;
    align-self: center;
}

.portion-size
{
    grid-area: portion-chooser;
    margin-top: 15px;
    display: flex;
}

#add-button
{
    background-color: #0D687A;
    border: none;
    color: white;
    font-weight: bold;
    padding: 8px 25px;
    margin-left: 5%;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.portion-size input[type=number]
{
    background-color: white;
    border: none;
    padding: 5px 15px;
    width: 20%;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}



/* transitions */
.expand-enter-active, .expand-leave-active {
    transition: all 0.45s ease;
    max-height: 40px;
    overflow: hidden;
}

.expand-enter, .expand-leave-to {
    max-height: 0;
}
</style>