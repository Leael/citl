<template>
  <div>
    <iframe id="ytplayer" type="text/html" width="640" height="360"
  :src="this.youtubeUrl"
  frameborder="0" />
  </div>
</template>

<script>
export default {
    data () {
      return {
        // youtubeUrl: `http://www.youtube.com/embed/${this.videoId}?autoplay=0`
        youtubeUrl: `http://www.youtube.com/embed/${this.videoId}?autoplay=0`
      }
    },
    props: {
      "videoId": {
        type: String,
        required: true
      }
    }
}
</script>

<style>

</style>