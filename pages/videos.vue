<template>
  <div class="presigned">
    <client-only>
      <video :src="videoUrl" controls width="800" />
    </client-only>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    videoBaseUrl () {
      return `https://${this.$config.videoHost}${this.$config.videoPath}`
    },
    videoXAmzQueryString () {
      return Object.keys(this.$route.query)
                   .filter(key => key.startsWith('X-Amz-'))
                   .map(key => `${key}=${this.$route.query[key]}`)
                   .join('&')
    },
    videoUrl () {
      return [this.videoBaseUrl, this.videoXAmzQueryString].join('?')
    }
  }
}
</script>