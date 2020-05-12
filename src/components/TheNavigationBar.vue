<template>
    <div>
        <b-navbar toggleable="md" type="light" variant="light">

            <b-navbar-brand href="/">vid vuer</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <b-navbar-nav>
                    <b-nav-item :to="'/home'">home</b-nav-item>
                    <b-nav-item-dropdown text="categories" right>
                        <b-dropdown-item :to="{name: 'Category', params: {category: 'nature'}}">nature</b-dropdown-item>
                        <b-dropdown-item :to="{name: 'Category', params: {category: 'wildlife'}}">wildlife</b-dropdown-item>
                        <b-dropdown-item :to="{name: 'Category', params: {category: 'people'}}">people</b-dropdown-item>
                        <b-dropdown-item :to="{name: 'Category', params: {category: 'city'}}">city</b-dropdown-item>
                    </b-nav-item-dropdown>
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