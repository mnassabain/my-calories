<template>
    <div class="container">

        <section-title message="New meal"/>

        <form>

            <span>Enter meal name</span>
            <div class="form-entry">
                <input type="text" v-model="mealName" 
                    v-bind:class="{redline: missingName}" placeholder="Name">
            </div>

            <div class="macros">

                <div class="macro">
                    <span>Carbs</span>
                    <input type="number" min="0" placeholder="Carbs" 
                        class="nb-input" v-model="carbs" @change="update">
                </div>            

                <div class="macro">
                    <span>Protein</span>
                    <input type="number" min="0" placeholder="Protein" 
                    class="nb-input" v-model="protein" @change="update">
                </div>

                <div class="macro">
                    <span>Fats</span>
                    <input type="number" min="0" placeholder="Fats" 
                        class="nb-input" v-model="fats" @change="update">
                </div>

            </div>

            <span>Calories</span>
            <input type="number" min="0" placeholder="Calories" 
                class="show-kcals" v-model="calories" readonly>

            <button type="button" id="create-button" @click="create">
                Create
            </button>

        </form>
    </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';

export default {
    name: 'createmeal',
    components: {
        'section-title': SectionTitle,
    },
    data: function() {
        return {
            carbs: 0,
            protein: 0,
            fats: 0,
            calories: 0,
            mealName: '',
            missingName: false,
        }
    },
    methods: {
        update() {
            this.carbs = parseInt(this.carbs);
            this.protein = parseInt(this.protein);
            this.fats = parseInt(this.fats);
            this.calories = this.carbs * 4 + this.protein * 4 + this.fats * 9; 
        },

        create() {
            if (this.mealName == '')
            {
                this.missingName = true;
                return;
            }

            this.$store.commit('createMeal', {
                'name': this.mealName ,
                'carbs': this.carbs,
                'protein': this.protein,
                'fats': this.fats,
                'calories': this.calories,
            });

            this.$router.go(-1);
        }
    }    
}
</script>

<style>

form
{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-entry
{
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 15px;
    margin-bottom: 15px;
}

.form-entry label
{
    font-size: 1em;
    margin-bottom: 5px;
}

.form-entry input
{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    /* width: 100%; */
    /* background-color: #efefefef; */
    font-size: 1.1em;
    padding: 7px 10px;
    transition: border-bottom 0.2s ease;
    background-color: #ffffff;
    padding: 0.3em 0.5em;
    text-align: center;
}

form .macros
{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

form .macros .macro
{
    display: flex;
    flex-direction: column;
    align-items: center;
}

form .macros .nb-input
{
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 1.1em;
    padding: 0.3em 0.5em;
    text-align: center;
    width: 40%;
}

.show-kcals
{
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 1.1em;
    padding: 0.3em 0.5em;
    text-align: center;
    width: 40%;

    border: none;
    background-color: #eeeeee;
}

#create-button
{
    margin-top: 30px;

    border: none;
    color: white;
    
    padding: 10px 25px;
    font-weight: bold;
    font-size: 1.1em;

    background-color: #0D687A;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.redline
{
    border: 1px solid #c92c2c !important;
}


</style>