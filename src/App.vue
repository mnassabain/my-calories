<template>
    <div id="app">

    <div class="header">
    <font-awesome-icon v-if="$route.name == 'home' && !menuVisible" id="bars" class="nav-button" icon="bars" @click="showMenu"></font-awesome-icon>
    <router-link to="/" v-else>
        <font-awesome-icon id="arrow" class="nav-button" icon="arrow-left"></font-awesome-icon>
    </router-link>
    <h1>MyCalories</h1>
    </div>

        <div class="main-container">
            <router-view></router-view>
        </div>

    <side-menu v-if="menuVisible" @closeMenu="hideMenu"></side-menu>

    </div>
</template>

<script>
import SideMenu from './components/SideMenu.vue';

export default {
    name: 'app',
    components: {
        'side-menu': SideMenu,
    },

    data: function() {
		return {
            menuVisible: false,
        }
    },

    methods: {
        showMenu: function() {
            this.menuVisible = true;
        },
        
        hideMenu: function() {
            this.menuVisible = false;
        }
    },
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

.header .nav-button
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