<template>
    <div>
        <b-nav vertical>
            <b-nav-item :to="'/category'">Categories</b-nav-item>
            <b-nav-item :to="'/single'">Single</b-nav-item>
        </b-nav>
    </div>
</template>

<script>
export default {
    name: 'TheSideNav'
}
</script>