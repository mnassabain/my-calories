<template>
    <div class="modifygoals-container">
        
        <section-title message="Modify goals"/>

        <div class="fields">

            <span>Carbs</span>
            <input type="number" min="0" step="1" class="nb-input"
                v-model="carbs" @change="update">

            <span>Protein</span>
            <input type="number" min="0" step="1" class="nb-input"
                v-model="protein" @change="update">
            
            <span>Fats</span>
            <input type="number" min="0" step="1" class="nb-input"
                v-model="fats" @change="update">
            
            <span>Calories</span>
            <input type="number" min="0" step="1" class="nb-input rdonly" 
                readonly v-model="calories">

            <button id="update-goals" @click="updateGoals">
                Update
            </button>

        </div>

    </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';

export default {
    name: 'modifyGoals',
    components: {
        'section-title': SectionTitle,
    },
    data: function() {
        return {
            protein: 0,
            carbs: 0,
            fats: 0,
            calories: 0,
        }
    },
    methods: {
        update() {
            this.carbs = parseInt(this.carbs);
            this.protein = parseInt(this.protein);
            this.fats = parseInt(this.fats);
            this.calories = this.carbs*4 + this.protein*4 + this.fats*9;
        },
        updateGoals() {
            if (this.protein == 0 || this.carbs == 0 || this.fats == 0)
                return; 

            this.$store.commit('updateGoals', {
                'carbs': this.carbs,
                'protein': this.protein,
                'fats': this.fats,
                'calories': this.calories,
            });

            this.$router.go(-1);
        },
    }
}
</script>

<style>
.modifygoals-container .fields
{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.modifygoals-container .fields .nb-input
{
    margin-bottom: 20px;
    text-align: center;
    font-size: 1.1em;
    width: 30%;
    margin: 10px;
    margin-bottom: 15px;
    padding: 0.2em 0.4em;
}

.modifygoals-container .fields .rdonly
{
    font-size: 1.1em;
    padding: 0.5em 0.7em;
    border: none;
    background-color: #eeeeee;
}

.modifygoals-container .result
{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
}

.modifygoals-container .fields #update-goals
{
    margin-top: 25px;

    border: none;
    background: #0D687A;
    color: white;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    padding: 10px 20px;
    font-weight: bold;
    font-size: 1.1em;
}
</style>
