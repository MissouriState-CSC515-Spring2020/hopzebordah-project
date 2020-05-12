<template>
    <b-row>
        <b-col class="mx-auto text-center">
            <img class="w-75" @click="clickFunc()" :src="src" alt="image detail"/>
            <div class="w-75 mx-auto mt-3">
                <h5>
                    {{ title }}
                </h5>
                <hr/>
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
    props: ['src', 'title', 'desc', 'clickFunc']
}
</script>

<style scoped>
img {
    border-radius: 10px;
}
</style>