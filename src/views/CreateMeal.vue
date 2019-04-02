<template>
    <div class="container">
        <h2>New meal</h2>

        <form>
            <div class="form-entry">
                <!-- <label for="name">Name</label> -->
                <input type="text" placeholder="Name" v-model="mealName" v-bind:class="{redline: missingName}">
            </div>

            <div class="macros">
                <number-input :min="0" size="small" placeholder="Carbs" inline center controls class="nb-input" v-model="carbs" @change="update"></number-input>
                <number-input :min="0" size="small" placeholder="Protein" inline center controls class="nb-input" v-model="protein" @change="update"></number-input>
                <number-input :min="0" size="small" placeholder="Fats" inline center controls class="nb-input" v-model="fats" @change="update"></number-input>

                <br><br>

                <number-input size="small" placeholder="calories" :value="calories" inline center readonly></number-input>
                
            </div>

            <button type="button" id="create-button" @click="create">Create</button>

        </form>
    </div>
</template>

<script>
import VueNumberInput from '@chenfengyuan/vue-number-input';

export default {
    name: 'createmeal',
    components: {
        'number-input': VueNumberInput,
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

            this.$router.push({name: 'home'});
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

    width: 100%;
    /* background-color: #efefefef; */
    border: none;
    font-size: 1em;
    padding: 7px 10px;
    border-bottom: 3px solid #134E5E;
    transition: border-bottom 0.2s ease;
}

.form-entry input:focus
{
    border-bottom :3px solid #71B280;
}

form .macros
{
    display: flex;
    flex-direction: column;
    align-items: center;
}

form .macros .nb-input
{
    margin-top: 20px;
}

#create-button
{
    margin-top: 30px;

    border: none;
    background-image: linear-gradient(to top right, #134E5E, #71B280);
    color: white;
    
    padding: 15px 40px;
    font-weight: bold;
    font-size: 1.2em;
}

.redline
{
    border-bottom: 3px solid #a23d3d !important;
}


</style>