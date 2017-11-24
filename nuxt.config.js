module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: '黑市案内所',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0' },
      { hid: 'description', name: 'description', content: '勾搭2.0' }
    ],
    script: [
      { src: '/activity/gouda/api.config.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#00007f' },
  css: [
    { src: '~/assets/css/main.scss', lang: 'scss' },
    { src: 'mint-ui/lib/style.min.css' }
  ],
  plugins: [
    { src: '~/plugins/mintui.js', ssr: false }
  ],
  ssr: false,
  router: {
    base: '/activity/gouda/'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    publicPath: '/activity/gouda/',
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
