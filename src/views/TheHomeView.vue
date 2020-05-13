<template>
    <b-row>
        <vue-headful
            title="vid vuer home"
            description="home view"
        />
        <b-col class="pl-5 pr-5 pt-3 text-center">
            <h2>vid vuer</h2>
            <b-row>
                <b-col v-for="video in results.items" :key="video.id.videoId" class="p-3" cols="12" sm="6" md="4" lg="3">
                    <video-detail
                        :src="video.snippet.thumbnails.high.url"
                        :title="video.snippet.title"
                        :desc="video.snippet.description"
                        :clickFunc="() => {
                            routeToSingleVideoView(video.id.videoId)
                        }"
                    />
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
import requestService from '@/services/requestService.js'

export default {
    name: 'TheHomeView',
    components: {
        VideoDetail: () => import('@/components/VideoDetail')
    },
    data() {
        return {
            results: {}
        }
    },
    methods: {
        getVideosByKeyword(keyword) {
            requestService.searchVideosByKeyword(keyword)
            .then(response => {
                this.results = response
            })
            .catch(e => {
                this.$bvToast.toast(`An error occurred fetching data. Sorry :/`, {
                    title: 'Error',
                    autoHideDelay: 4000
                })
            })
        },
        getVideo(index) {
            return this.results.items[index]
        },
        routeToSingleVideoView(videoId) {
            this.$router.push(`/video/${videoId}`)
        }
    },
    mounted() {
        this.getVideosByKeyword('hiking')
    }
}
</script>

<style scoped>

</style>