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
  async fetchContents ({ commit }) {
    commit('setContents', await this.$api.news())
  },
  async fetchContent ({ commit }, id) {
    commit('setContent', await this.$api.news(id))
  }
}
