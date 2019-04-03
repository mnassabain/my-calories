<template>
    <div class="container">
        <h2>Modify goals</h2>

        <div class="fields">
            <number-input :min="0" size="small" placeholder="Carbs" inline center class="nb-input" v-model="carbs" @change="update"></number-input>
            <number-input :min="0" size="small" placeholder="Protein" inline center class="nb-input" v-model="protein" @change="update"></number-input>
            <number-input :min="0" size="small" placeholder="Fats" inline center class="nb-input" v-model="fats" @change="update"></number-input>
        </div>

        <div class="result">
            <number-input readonly inline center size="small" v-model="calories"></number-input>

            <button id="update-goals" @click="updateGoals">Update</button>
        </div>
    </div>
</template>

<script>
import VueNumberInput from '@chenfengyuan/vue-number-input';

export default {
    name: 'modifyGoals',
    components: {
        'number-input': VueNumberInput,
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
            this.calories = this.carbs*4 + this.protein*4 + this.fats*9;
        },
        updateGoals() {
            if (this.protein == 0 || this.carbs == 0 || this.fats == 0)
                return; 

            this.$store.commit('updateGoals', {
                'carbs': this.carbs,
                'protein': this.protein,
                'fats': this.fats,
                'calories': this.calories,
            });

            this.$router.push('/');
        }
    }
}
</script>

<style>
.container .fields
{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container .fields .nb-input
{
    margin-bottom: 20px;
}

.container .result
{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
}

.container .result #update-goals
{
    margin-top: 50px;

    border: none;
    background-image: linear-gradient(to top right, #134E5E, #71B280);
    color: white;
    
    padding: 10px 20px;
    font-weight: bold;
    font-size: 1.1em;
}
</style>
