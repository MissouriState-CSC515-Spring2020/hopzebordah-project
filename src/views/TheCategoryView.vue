<template>
    <b-row>
        <vue-headful
            title="image vuer category"
            description="category view"
        />
        <b-col class="pl-5 pr-5 pt-3 text-center">
            <h2>category: {{this.category}}</h2>
            <b-row>
                <b-col v-for="i in 10" :key="i" class="p-3" cols="12" sm="6" md="4" lg="3">
                    <image-detail
                        :asset="require('@/assets/asturias_gorge.jpeg')"
                        :title="getLipText(1)"
                        :desc="getLipText(2)"
                        :clickFunc="routeToSingleView"
                    />
                </b-col>
                <b-col cols="12">
                    <p>
                        category tags: [
                        <span v-for="tag in tags" :key="tag">{{ tag }}, </span>
                        ]
                    </p>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
import { LoremIpsum } from 'lorem-ipsum'

import ImageDetail from '@/components/ImageDetail'

const lip = new LoremIpsum({
    wordsPerSentence: {
        min: 1, max: 4
    }
})

export default {
    name: 'TheCategoryView',
    components: {
        ImageDetail
    },
    data() {
        return {
            category: this.$route.params.category,
            tags: [
                'earth', 
                'nature',
                'trees',
                'mountains',
                'fresh',
                'water'
            ]
        }
    },
    methods: {
        getLipText(numSentences) {
            return lip.generateSentences(numSentences);
        },
        routeToSingleView() {
            this.$router.push('/single')
        }
    }
}
</script>