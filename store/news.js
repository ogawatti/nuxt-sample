export const state = () => ({
  contents: [],
  content: {}
})

export const mutations = {
  setContents (state, contents) {
    state.contents = contents
  },
  setContent (state, content) {
    state.content = content
  }
}

export const actions = {
  async fetchList ({ commit }) {
    const url = `${this.$config.microcmsBaseUrl}/news`
    const options = {
      headers: { 'X-API-KEY': this.$config.microcmsApiKey }
    }
    const response = await this.$axios.get(url, options)
    commit('setContents', response.data.contents)
  },
  async fetch ({ commit }, id) {
    const url = `${this.$config.microcmsBaseUrl}/news/${id}`
    const options = {
      headers: { 'X-API-KEY': this.$config.microcmsApiKey }
    }
    const response = await this.$axios.get(url, options)
    commit('setContent', response.data)
  }
}
