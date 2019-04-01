<template>
    <div class="container">
        <h2>New meal</h2>

        <form>
            <div class="form-entry">
                <label for="name">Name</label>
                <input type="text">
            </div>

            <number-input :value="0" center controls class="nb-input"></number-input>


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
}

.form-entry
{
    display: flex;
    flex-direction: column;

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

    width: 90%;
    background-color: #efefefef;
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

.nb-input
{
    width: 33%;
}

</style>