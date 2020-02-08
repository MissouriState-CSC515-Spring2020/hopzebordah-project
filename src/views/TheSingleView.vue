<template>
    <b-row>
        <b-col class="p-5 text-center">
            <image-detail 
            :asset="require('@/assets/asturias_gorge.jpeg')"
            title="The Cares Gorge, Picos de Europa, Asturias, Spain"
            desc="This image was taken from above the beautiful Cares Gorge in the Picos de Europa mountain rage in northern Spain. "
            />
        </b-col>
    </b-row>
</template>

<script>
import ImageDetail from '@/components/ImageDetail' 

export default {
    name: 'TheSingleView',
    components: {
        ImageDetail
    }
}
</script>

<style scoped>

</style>