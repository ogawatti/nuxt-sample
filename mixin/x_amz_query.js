export default {
  computed: {
    xAmzQuery () {
      return Object.keys(this.$route.query)
                   .filter(key => key.startsWith('X-Amz-'))
                   .reduce((query, key) => {
                     query[key] = this.$route.query[key]
                     return query
                   }, {})
    },
    xAmzQueryString () {
      return Object.keys(this.xAmzQuery)
                   .map(key => `${key}=${this.$route.query[key]}`)
                   .join('&')
    }
  }
}
