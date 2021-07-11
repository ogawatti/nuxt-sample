<template>
  <div v-if="uri" class="uri">
    {{ uri }}
  </div>
</template>

<script>
import { API } from 'aws-amplify'

export default {
  data () {
    return {
      uri: ''
    }
  },
  computed: {
    apiName () {
      return this.$config.uriApiName
    },
    apiPath () {
      return [this.$config.uriApiPath, this.uuid].join('/')
    },
    uuid () {
      return this.$route.params.uuid
    }
  },
  mounted () {
    if (this.uuid) {
      this.setUri()
    } else {
      this.$nuxt.error({ statusCode: 404 })
    }
  },
  methods: {
    setUri () {
      API.get(this.apiName, this.apiPath).then((response) => {
        if (response?.uri) {
          this.uri = response.uri
        } else {
          console.log('=== error ===')
          console.log(response)
          this.$nuxt.error({ statusCode: 404 })
        }
      }).catch((error) => {
        console.log('=== error ===')
        console.log(error)
        this.$nuxt.error({ statusCode: 500 })
      })
    }
  }
}
</script>