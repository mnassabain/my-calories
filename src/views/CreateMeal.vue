<template>
    <div class="container">
        <h2>New meal</h2>

        <form>
            <div class="form-entry">
                <!-- <label for="name">Name</label> -->
                <input type="text" placeholder="Name">
            </div>

            <div class="macros">
                <number-input :min="0" size="small" placeholder="Carbs" inline center controls class="nb-input"></number-input>
                <number-input :min="0" size="small" placeholder="Protein" inline center controls class="nb-input"></number-input>
                <number-input :min="0" size="small" placeholder="Fats" inline center controls class="nb-input"></number-input>

                <br><br>

                <number-input size="small" placeholder="calories" :value="250" inline center readonly></number-input>
                
            </div>

            <button id="create-button">Create</button>

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

        }
    },
    methods: {

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


</style>