<template>
    <b-row>
        <vue-headful
            title="vid vuer single"
            description="single image vue"
        />
        <b-col class="pl-5 pr-5 pt-3 text-center">
            <div v-if="dataLoaded">
                <video-detail
                    :src="video.snippet.thumbnails.high.url"
                    :title="video.snippet.title"
                    :desc="video.snippet.description"
                    :clickFunc="sendUserToOriginalVideo"
                />
                <p>
                    video id: {{ video.id }}
                </p>
            </div>
        </b-col>
    </b-row>
</template>

<script>
import requestService from '@/services/requestService.js'

export default {
    name: 'TheSingleView',
    components: {
        VideoDetail: () => import('@/components/VideoDetail')
    },
    data() {
        return {
            dataLoaded: false,
            video: {}
        };
    },
    methods: {
        getVideo(id) {
            requestService.getVideoById(id)
            .then(response => {
                this.video = response.items[0]
                this.dataLoaded = true
                console.log(this.video)
            })
            .catch(e => {
                this.$bvToast.toast(`An error occurred fetching data. Sorry :/`, {
                    title: 'Error',
                    autoHideDelay: 4000
                })
            })
        },
        sendUserToOriginalVideo() {
            window.location.href = `https://www.youtube.com/watch?v=${this.$route.params['id']}`
        }
    },
    mounted() {
        this.getVideo(this.$route.params['id'])
    }
}
</script>

<style scoped>

</style>