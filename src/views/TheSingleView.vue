<template>
    <b-row>
        <b-col class="p-5 text-center">
            <image-detail
            :asset="require('@/assets/asturias_gorge.jpeg')"
            title="The Cares Gorge, Asturias, Spain"
            desc="This image was taken from above the beautiful Cares Gorge in the Picos de Europa mountain rage in northern Spain. "
            />
            <p>
                {{ this.genRandomId() }}
            </p>
        </b-col>
    </b-row>
</template>

<script>
import uuid from 'uuid'

import ImageDetail from '@/components/ImageDetail' 

export default {
    name: 'TheSingleView',
    components: {
        ImageDetail
    },
    methods: {
        genRandomId() {
            return uuid.v4();
        }
    }
}
</script>

<style scoped>

</style>