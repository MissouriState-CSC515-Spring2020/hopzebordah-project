<template>
    <div>
        <b-navbar toggleable="md" type="light" variant="light">

            <b-navbar-brand href="/">Image Viewr</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <b-navbar-nav>
                    <b-nav-item :to="'/home'">Home</b-nav-item>
                    <b-nav-item :to="{name: 'Category', params: {category: 'nature'}}">Categories</b-nav-item>
                </b-navbar-nav>

            </b-collapse>

        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'TheNavigationBar'
}
</script>

<style scoped>

</style>