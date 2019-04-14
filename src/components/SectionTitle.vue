<template>
    <div class="section-title-container">
        <h3>{{message}}</h3>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'SectionTitle',
    props: ['message'],
}
</script>

<style>
.section-title-container h3
{
    margin: 5px 0;
    padding: 0;
}

.section-title-container hr
{
    margin-bottom: 15px;
    border: 1px solid #2c3e50;
}
</style>
