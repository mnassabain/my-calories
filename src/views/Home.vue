<template>

    <div class="container">

        <div class="date">
            <h3>{{getCurrentDate()}}</h3>
        </div>

        <div class="overall-calories">
            <h2>{{current.calories}} kcal</h2>
            <hr>
            <h3>{{goals.calories}} kcal</h3>
        </div>

        <pie-chart :series="series" class="pie-chart"/>
        
        <div class="macros">

            <div class="macro">
                <font-awesome-icon icon="bread-slice"/>
                <span><span class="current">{{current.carbs}}g</span>/{{goals.carbs}}g</span>
            </div>

            <div class="macro">
                <font-awesome-icon icon="drumstick-bite"/>
                <span><span class="current">{{current.protein}}g</span>/{{goals.protein}}g</span>
            </div>
            
            <div class="macro">
                <font-awesome-icon icon="fish"/>
                <span><span class="current">{{current.fats}}g</span>/{{goals.fats}}g</span>
            </div>

        </div>


        <div class="meals">
            <section-title message="Todays meals"/>

            <p v-if="(todaysMeals.length == 0)"> <!-- if no meals today -->
                Press the '+' button to add a meal.
            </p>

            <meal v-for="(meal, mealIndex) in todaysMeals" :key="meal.id"
                :info="meal" :index="mealIndex" @removedMeal="update">
            </meal>

        </div>

        <router-link to="/addMeal" id="add-meal">
            <font-awesome-icon icon="plus"/>
        </router-link>

    </div>

</template>


<script>
import moment from 'moment';
import Meal from '../components/Meal.vue';
import SectionTitle from '../components/SectionTitle.vue';
import PieChart from '../components/PieChart.vue';

export default {
    name: 'home',
    components: {
        'meal': Meal,
        'section-title': SectionTitle,
        'pie-chart': PieChart,
    },

    data: function() {
        return {
            series: [],

            goals: {},

            current: {
                carbs: 0,
                protein: 0,
                fats: 0,
                calories: 0,
            },

            todaysMeals: null,

            lastDate: null,
            checkDate: null,
        }
    },
    methods: {
        update() {
            /* set everything to 0 */
            this.current.calories = this.current.carbs = this.current.protein = 
                this.current.fats = 0;

            /* get values */
            this.todaysMeals.forEach(element => {
                this.current.carbs += element.carbs * element.portionSize;                
                this.current.protein += element.protein * element.portionSize;
                this.current.fats += element.fats * element.portionSize;
                this.current.calories += element.calories * element.portionSize;
            });

            /* update graph */
            this.series = [
                this.current.protein*4, this.current.fats*9, 
                this.current.carbs*4,
            ];
        },
        getCurrentDate() {
            var date = moment(this.$store.getters.date);
            return date.format('MMMM Do, YYYY');
        }
    },
    beforeMount() {
        this.todaysMeals = this.$store.getters.todaysMeals;
        this.goals = this.$store.getters.goals;
        this.update();
        
        /* check if the date is defined - if not, enter new date */
        var storedDate = this.$store.getters.date;
        if (storedDate == '') {
            storedDate = new moment().format();
            this.$store.commit('updateDate', storedDate)
        }

        /* check if today is a new day */
        this.lastDate = new moment(storedDate);
        this.checkDate = new moment();

        if (this.checkDate.dayOfYear() != this.lastDate.dayOfYear()) {

            if (this.todaysMeals.length != 0) 
            {
                this.$store.commit('addTodaysMeals', {
                    'date': this.lastDate.format(),
                    'meals': this.todaysMeals,
                    'macros': {
                        'carbs': this.current.carbs,
                        'protein': this.current.protein,
                        'fats': this.current.fats,
                        'calories': this.current.calories,
                    }
                });

                this.$store.commit('clearTodaysMeals');
            }

            this.$store.commit('updateDate', this.checkDate.format());

            this.todaysMeals = [];
            this.current.calories = this.current.carbs = this.current.protein = 
                this.current.fats = 0;
        }
    },
    mounted() {
        this.series = [
            this.current.protein*4, this.current.fats*9, this.current.carbs*4,  
        ];
    }
}
</script>


<style scoped>
.container *
{
    z-index: 1;
}


.overall-calories
{
    grid-area: overall-calories;
    margin: 0;
    justify-self: end;
    text-align: right;
    /* margin-top: 10px; */
}

.overall-calories h2
{
    margin: 0;
    /* margin: 5px 0; */
    padding: 0;
}


.overall-calories h3
{
    opacity: 0.8;
    margin: 5px 0;
    padding: 0;
}

.overall-calories hr
{
    margin: 0;
    padding: 0;
    border: none;
    border: 1px solid #32434d99;
}

.pie-chart
{
    grid-area: pie-chart;
    margin: 0;
    padding: 0;
    margin-top: -30px;
    margin-left: -20px;
}

.chart
{
    margin: 0;
    padding: 0;
}

.macros
{
    grid-area: macros;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-self: center;
    margin-bottom: 50px;
}

.macro span
{
    line-height: 1.5em;
    font-size: 0.9em;
    padding: 0;
    margin: 0;
}

.macro span .current
{
    margin: 0;
    padding: 0;
    font-size: 1.2em;
    font-weight: bold;
}

.macro
{
    display: flex;
    width: 90%;
    height: 1.7em;
    justify-content: space-between;
    align-items: center;
}

.meals
{
    grid-area: meals;
    width: 100%;
    justify-self: center;
}

.meals p
{
    width: 100%;
    /* text-align: center; */
}

.date
{
    grid-area: date;
    margin: 0;
    /* margin: 15px 0; */
    padding: 0;
}

#add-meal
{
    border: none;
    background-color: #58ACFA;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    color: white;
    font-weight: bold;
    font-size: 2em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

#add-meal
{
    position: fixed;
    bottom: 30px;
    right: 30px;
    font-size: 1.5em;
    background-color: #0D687A;
    /* background-image: linear-gradient(to top right, #134E5E, #71B280); */
}

.container
{
    margin: 0;
    padding: 0;
    z-index: -1;

    display: grid;
    grid-template:
        'header header header'
        'date overall-calories overall-calories'
        'pie-chart macros macros'
        'meals meals meals';
}

/* transtions */
.slide-down-enter, .slide-down-leave-to 
{
    transform: translateX(100%);
}

.slide-down-enter-active, .slide-down-leave-active 
{
    transition: transform .45s ease;
}

</style>
