<template>
    <div class="menu">
        
        <ul>

            <li class="delimiter"><hr></li>

            <li>
                <router-link to="/createMeal" class="menu-link" 
                    @click.native="closeMenu">
                        Create meal
                </router-link>
            </li>

            <li>
                <router-link to="/myMeals" class="menu-link" 
                    @click.native="closeMenu">
                        Meal list
                </router-link>
            </li>

            <li>
                <router-link to="/mealHistory" class="menu-link" 
                    @click.native="closeMenu">
                        Meal History
                </router-link>
            </li>

            <li class="delimiter"><hr></li>

            <li>
                <router-link to="/weighIn" class="menu-link" 
                    @click.native="closeMenu">
                        Enter weight
                </router-link>
            </li>

            <li>
                <router-link to="/weightHistory" class="menu-link" 
                    @click.native="closeMenu">
                        Track weight
                </router-link>
            </li>

            <li class="delimiter"><hr></li>

            <li>
                <router-link to="/modifyGoals" class="menu-link" 
                    @click.native="closeMenu">
                        Modify goals
                </router-link>
            </li>

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
    margin-top: 50px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    /* background-image: linear-gradient(to top right, #134E5E, #71B280); */
    background-color: #0F7084;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    padding: 20px 20px;
}

.menu ul
{
    margin-top: 20px;
    list-style-type: none;

    display: flex;
    flex-direction: column;
    align-items: center;
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

.menu ul li.delimiter
{
    width: 90%;
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
