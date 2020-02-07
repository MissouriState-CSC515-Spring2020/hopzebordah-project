<template>
    <div>
        <h1>HomeView</h1>
        <p>
        <router-link :to="'/category'">Router link to CategoryView</router-link>
        </p>
        <p>
        <router-link :to="'/single'">Router link to SingleView</router-link>
        </p>
    </div>
</template>

<script>
export default {
    name: 'HomeView'
}
</script>

<style scoped>

</style>