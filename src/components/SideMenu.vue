<template>
    <div class="menu">
        <font-awesome-icon id="bars" icon="arrow-left" @click="closeMenu"></font-awesome-icon>
        <ul>
            <li><router-link to="/createMeal" class="menu-link" @click.native="closeMenu">Create meal</router-link></li>
            <li><router-link to="/weighIn" class="menu-link" @click.native="closeMenu">Enter weight</router-link></li>
            <li><router-link to="/weightHistory" class="menu-link" @click.native="closeMenu">Track weight</router-link></li>
            <li><router-link to="/modifyGoals" class="menu-link" @click.native="closeMenu">Modify goals</router-link></li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'side-menu',
    methods: {
        closeMenu() {
            this.$emit('closeMenu');
        },
    }
}

</script>

<style>
.menu
{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-image: linear-gradient(to top right, #134E5E, #71B280);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    width: 45%;
    padding: 20px 20px;
}

.menu ul
{
    margin-top: 20px;
    list-style-type: none;
}

.menu h2
{
    color: white;   
}

.menu hr
{
    color: white;
    border: 1px solid white;
}


.menu ul li
{
    color: white;
    font-size: 1.1em;
    margin-bottom: 15px;
}

.menu .menu-link
{
    text-decoration: none;
    color: white;

    font-size: 1.2em;
    font-weight: bold;
}

.menu h3
{
    text-decoration: none;
    color: white;
}

#bars
{
    color: white;
    font-size: 1.7em;
    order: 1;
}
</style>
