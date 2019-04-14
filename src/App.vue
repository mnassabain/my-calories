<template>
    <div id="app">

        <div class="header">
            <font-awesome-icon v-if="$route.name == 'home'" 
                id="bars" class="nav-button" icon="bars" @click="toggleMenu">
            </font-awesome-icon>
            
            
            <font-awesome-icon v-else id="arrow" class="nav-button" 
                icon="arrow-left" @click="$router.go(-1)">
            </font-awesome-icon> 

            <h1>MyCalories</h1>
        </div>

        <div class="main-container">
            <router-view></router-view>
        </div>

    <transition name="slide-down">
        <side-menu v-if="menuVisible" @closeMenu="toggleMenu"></side-menu>
    </transition>

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
        toggleMenu() {
            this.menuVisible = !this.menuVisible;
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
    padding-bottom: 70px;

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
    /* background-image: linear-gradient(to top right, #134E5E, #71B280); */
    background-color: #0B5563;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */

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
    padding-top: 100px;
    /* margin-top: 85px; */
}

/* transitions */
.slide-down-enter, .slide-down-leave-to 
{
    transform: translateY(-100%);
}

.slide-down-enter-active, .slide-down-leave-active 
{
    transition: transform .45s ease;
}

</style>