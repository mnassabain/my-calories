<template>
    <div class="menu">
        <font-awesome-icon id="bars" icon="arrow-left" @click="closeMenu"></font-awesome-icon>
        <ul>
            <li><h3>Create meal</h3></li>
            <li><h3>Enter weight</h3></li>
            <li><h3>Modify goals</h3></li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'side-menu',
    methods: {
        closeMenu() {
            this.$emit('closeMenu');
        }
    }
}

</script>

<style>
.menu
{
    background-image: linear-gradient(to top right, #134E5E, #71B280);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    width: 40%;
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

#bars
{
    color: white;
    font-size: 1.7em;
    order: 1;
}
</style>
