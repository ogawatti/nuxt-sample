<template>
  <div class="container">
    <div>
      <h1 class="title">Sample Image</h1>
      <h4 class="subtitle">6016x3760 (4.2MB)</h4>
      <h6>{{ variable }}</h6>
      <sample-img />
    </div>
  </div>
</template>

<script>
import SampleImg from '~/components/SampleImg.vue'

export default {
  components: {
    SampleImg
  },
  data () {
    return {
      variable: process.env.VARIABLE
    }
  }
}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
