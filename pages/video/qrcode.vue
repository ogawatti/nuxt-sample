<template>
  <div>
    <canvas id="qrcode"></canvas>

    <client-only>
      <p>
        <a :href="videoPageUrl">{{ videoPageUrl }}</a>
      </p>
    </client-only>
  </div>
</template>

<script>
import XAmzQuery  from '@/mixin/x_amz_query.js'
const QRCode = require('qrcode')

export default {
  mixins: [XAmzQuery],
  computed: {
    videoPageBaseUrl () {
      return process.client
        ? process.env.NODE_ENV === 'development'
          ? 'https://ogawatti.net/video/'
          : `https://${location.host}/video/`
        : ''
    },
    videoPageUrl () {
      return [this.videoPageBaseUrl, this.xAmzQueryString].join('?')
    }
  },
  mounted () {
    QRCode.toCanvas(document.getElementById('qrcode'), this.videoPageUrl, function (error) {
      if (error) console.error(error)
      console.log('success!');
    })
  }
}
</script>