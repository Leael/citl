<template>

  <div class="flex flex-row">
  <try v-if="link" :videoId='link'></try>

  <form action="">
    <!-- <input type="text" v-model="link"> -->
    <button @click.prevent="checkURL">
      URL
    </button>
    <button class="bg-red-500" @click.prevent="link = 'VD-ecJSUfZ0'">Link</button>
  </form>
</div>
</template>


<script>
import Try from '@/components/Try'
  export default {
    components: {
      Try
    },
    data() {
      return {
        link: ''
      }
    },

    methods: {
      checkURL() {
        const link = encodeURI('https://www.youtube.com/watch?v=drnImHtctZ0?gams=123')
        const url = new URLSearchParams(link);
        const videoId = url.get('gams');
        console.log(window.location.search)
        console.log(videoId);
      }
    }
  }
</script>