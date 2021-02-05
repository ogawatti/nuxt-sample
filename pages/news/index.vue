<template>
  <div class="news-list">
    <h2>News List</h2>

    <ul>
      <li
        v-for="(news, i) in newsList"
        :key="i"
        class="news-link"
      >
        <nuxt-link :to="`news/${news.id}`">
          {{ news.title }} ({{ news.id }})
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsList: [],
    }
  },
  mounted () {
    this.fetchNewsList()
  },
  methods: {
    fetchNewsList () {
      this.$store.dispatch('news/fetchContents').then(this.setNewsList)
    },
    setNewsList () {
      this.newsList = this.$store.state.news.contents
    }
  }
}
</script>