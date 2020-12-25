import MicroCMS from '~/lib/microcms'

export default ({ $axios, $config }, inject) => {
  const microcms = new MicroCMS($axios, $config.microcmsBaseUrl, $config.microcmsApiKey)
  inject('api', microcms)
}
