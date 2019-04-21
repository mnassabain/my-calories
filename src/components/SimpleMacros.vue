<template>
    <div class="macro-info">
        
        <div class="macro">
            <h4>Carbs</h4>
            <span>{{macros.carbs}}g</span>
        </div>

        <div class="macro">
            <h4>Protein</h4>
            <span>{{macros.protein}}g</span>
        </div>

        <div class="macro">
            <h4>Fats</h4>
            <span>{{macros.fats}}g</span>
        </div>

        <div class="macro">
            <h4>Calories</h4>
            <span>{{macros.calories}}kcal</span>
        </div>

    </div>
</template>

<script>
export default {
    name: 'SimpleMacros',
    props: [
        'macros',
    ],
}
</script>

<style>
.macro-info 
{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 15px;
}

.macro-info .macro
{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.macro-info .macro h4
{
    margin-bottom: 0px;
    padding: 0;
}
</style>