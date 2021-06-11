<template>
  <div class="presigned">
    <client-only>
      <video :src="videoUrl" controls width="350" playsinline />
    </client-only>
  </div>
</template>

<script>
import XAmzQuery  from '@/mixin/x_amz_query.js'

export default {
  mixins: [XAmzQuery],
  computed: {
    videoBaseUrl () {
      return `https://${this.$config.videoHost}${this.$config.videoPath}`
    },
    videoUrl () {
      return [this.videoBaseUrl, this.xAmzQueryString].join('?')
    }
  }
}
</script>