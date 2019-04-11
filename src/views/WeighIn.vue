<template>
    <div class="container">
        <h2>Weigh In</h2>
        <div class="form">
            
            <span>Enter new weight</span>

            <number-input :min="0" :step="0.1" size="small" 
                placeholder="Weight(kg)" inline center class="nb-input" 
                v-model="weight">
            </number-input>
            
            <button id="add-weight" @click="addWeight">
                Add weight
            </button>
            
        </div>
    </div>
</template>

<script>
import VueNumberInput from '@chenfengyuan/vue-number-input';
import moment from 'moment';

export default {
    name: 'weighIn',    
    components: {
        'number-input': VueNumberInput,
    },
    data: function() {
        return {
            weight: 0,
        }
    },
    methods: {
        addWeight() {
            if (this.weight <= 0)
            {
                return;
            }
            this.$store.commit('addWeight', {
                'date': new moment(), 
                'weight': this.weight
            });
            this.$router.push('/');
        }
    }
}
</script>

<style>
.container .form
{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container span
{
    margin-top: 1.2em;
    margin-bottom: 1.1em;
}


#add-weight
{
    border: none;
    margin-top: 30px;

    background-image: linear-gradient(to top right, #134E5E, #71B280);
    color: white;
    
    padding: 10px 25px;
    font-weight: bold;
    font-size: 1.1em;
}
</style>