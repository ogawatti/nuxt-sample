module.exports = class MicroCMS {
  constructor (axios, baseUrl, apiKey) {
    this.$axios = axios
    this.baseUrl = baseUrl
    this.apiKey = apiKey
  }

  get options () { return { headers: { 'X-API-KEY': this.apiKey } } }

  news(id) {
    if (id) {
      return this._getResource(`${this.baseUrl}/news/${id}`)
    } else {
      return this._getResources(`${this.baseUrl}/news`)
    }
  }

  async _getResource(url) {
    return await this.$axios.$get(url, this.options)
  }

  async _getResources(url) {
    return (await this.$axios.$get(url, this.options)).contents
  }
}
