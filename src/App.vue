<template>
    <div id="app">

    <div class="header">
    <font-awesome-icon v-if="$route.name == 'home'" id="bars" icon="bars"></font-awesome-icon>
    <router-link to="/" v-else>
        <font-awesome-icon id="bars" icon="arrow-left"></font-awesome-icon>
    </router-link>
    <h1>MyCalories</h1>
    </div>

        <div class="main-container">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>

export default {
    name: 'app',
    components: {
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

*
{
    margin: 0;
    padding: 0;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    margin: 0;
    padding: 0;

    box-sizing: border-box;
}


.header
{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    margin-bottom: 15px;
    padding: 20px 20px;
    grid-area: header;
    background-image: linear-gradient(to top right, #134E5E, #71B280);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    position: fixed;
    top:0;
    left: 0;
    right: 0;
    z-index: 3;
}

.header h1
{
    color: white;
    font-size: 1.5em;
    
    order: 2;
}

.header #bars
{
    color: white;
    font-size: 1.7em;
    order: 1;
}

.main-container
{
    margin: 0;
    padding: 0px 25px;
    margin-top: 85px;
}

</style>