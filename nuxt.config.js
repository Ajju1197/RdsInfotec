export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Rds Info Tec',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
        ]
    },
    loading: "~/components/Load.vue",
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'bootstrap/dist/css/bootstrap.css',
        'bootstrap-vue/dist/bootstrap-vue.css',
      
    ],
    PageTransition: "fade",

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~plugins/bootstrap.js', "@/plugins/element-ui",
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxt/image',
        '@nuxtjs/fontawesome',
    ],
    fontawesome: {
       component:'fa',
          icons:{
              solid:true,
              brands:true,
          }
       
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/buefy
        'nuxt-buefy',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxt/image',
    ],
    image: {
        cloudinary: {
            baseURL: "https://res.cloudinary.com/nuxt/image/upload/",
        },
        presets: {
            cover: {
              modifiers: {
                fit: "cover",
                format: "webp",
              },
            },
          },
      }, 
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}