<template>
    <div class="pt-5 mt-5">
        <div class="text-center">
            <b-jumbotron header="404 🤠" lead="You seem to have stumbled upon something that doesn't exist.">
                <b-button @click="goBack()" variant="primary">&#171; Go back</b-button>
            </b-jumbotron>
        </div>
    </div>
</template>

<script>
export default {
    name: 'The404View',
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>