<template>
  <div>
    <canvas id="qrcode"></canvas>

    <client-only>
      <p>
        {{ videoPageUrl }}
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
      return process.env.NODE_ENV === 'development'
        ? 'https://ogawatti.net/videos/'
        : `https://${location.host}/videos/`
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