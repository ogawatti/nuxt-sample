<template>
  <div class="news">
    <h2>{{ news.title }}</h2>
    <b-badge v-for="(label, i) in news.labels" :key="i" :variant="label.color[0]">
      {{ label.id }}
    </b-badge>
    <hr>
    <span v-html="news.body"></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      news: {}
    }
  },
  mounted () {
    this.fetchNews()
  },
  methods: {
    fetchNews () {
      this.$store.dispatch('news/fetchContent', this.$route.params.id).then(this.setNews)
    },
    setNews () {
      this.news = this.$store.state.news.content
    }
  }
}
</script>