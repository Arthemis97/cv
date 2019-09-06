
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js', type: 'text/javascript'},
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/velocity/1.4.1/velocity.min.js', type: 'text/javascript'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/main', ssr: false},
    {src: '~/plugins/animejs', ssr: false},
    {src: '~/plugins/fullpage', ssr: false},
    {src: '~/plugins/particles', ssr: false},
    {src: '~/plugins/typer', ssr: false},
    {src: '~/plugins/icons', ssr: false},
    {src: '~/plugins/perfect-scroll', ssr: false},
    {src: '~/plugins/vue-picture-swipe', ssr: false},
    {src: '~/plugins/vue-modal', ssr: false},
    {src: '~/plugins/vtooltip', ssr: false},
    {src: '~/plugins/timeline', ssr: false}
    // {src: '~/plugins/velocity', ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'velocity-animate',
      'fullpage',
      'animejs',
      'typer',
      'icons',
      'timeline',
      'main'
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
