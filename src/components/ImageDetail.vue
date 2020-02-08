<template>
    <b-row>
        <b-col class="mx-auto">
            <img class="w-50" :src="asset" alt="image detail"/>
            <div class="w-50 mx-auto mt-3">
                <h3>
                    {{ title }}
                </h3>
                <p>
                    {{ desc }}
                </p>
            </div>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'ImageDetail',
    props: ['asset', 'title', 'desc']
}
</script>

<style scoped>
img {
    border-radius: 10px;
}
</style>