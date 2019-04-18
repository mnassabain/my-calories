<template>
    <div class="weighin-container">
        
        <section-title message="Weigh In"/>
        
        <div class="form">
            
            <span>Enter new weight</span>

            <input type="number" min="0" step="0.1" class="nb-input" 
                v-model="weight" @change="updateWeight">
            
            <button id="add-weight" @click="addWeight">
                Add weight
            </button>
            
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import SectionTitle from '@/components/SectionTitle'

export default {
    name: 'weighIn',    
    components: {
        'section-title': SectionTitle,
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
                'date': new moment().format(), 
                'weight': this.weight
            });
            this.$router.go(-1);
        },
        updateWeight() {
            this.weight = parseFloat(this.weight);
        }
    }
}
</script>

<style>
.weighin-container .form
{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.weighin-container span
{
    margin-top: 1.2em;
    margin-bottom: 1.1em;
}

.weighin-container .nb-input
{
    text-align: center;
    font-size: 1.1em;
    width: 30%;
    padding: 0.2em 0.4em;
}

#add-weight
{
    border: none;
    margin-top: 30px;

    /* background-image: linear-gradient(to top right, #134E5E, #71B280); */
    background-color: #0D687A;
    color: white;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    padding: 10px 25px;
    font-weight: bold;
    font-size: 1.1em;
}
</style>