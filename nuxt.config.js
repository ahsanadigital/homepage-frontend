const baseUrl = `${process.env.BASE_SECURE === true ? 'https://' : 'http://'}${process.env.BASE_URL}`;
const apiUrl = `${process.env.API_SECURE === true ? 'https://' : 'http://'}${process.env.API_URL}`;

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  components: true,

  loadingIndicator: {
    name: 'rotating-plane',
    color: '#1825b1',
    background: '#eee',
  },
  loading: {
    name: 'circle',
    failedColor: '#eb445a',
    color: '#1825b1',
    height: '5px',
    throttle: 0,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'id'
    },
    title: 'Dasa Kreativa Studio - Jasa Layanan Desain Grafis, Web Developer, dan Reparasi Komputer di Kota Madiun',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Dasa Kreativa Studio adalah perusahaan yang menyediakan jasa layanan desain grafis, web developer, dan reparasi komputer di Kota Madiun.' },
      // Facebook Open Graph
      { hid: 'og:site_name', property: 'og:site_name', content: 'Dasa Kreativa Studio - Jasa Layanan Desain Grafis, Web Developer, dan Reparasi Komputer di Kota Madiun' },
      { hid: 'og:title', property: 'og:title', content: 'Dasa Kreativa Studio - Jasa Layanan Desain Grafis, Web Developer, dan Reparasi Komputer di Kota Madiun' },
      { hid: 'og:description', property: 'og:description', content: 'Dasa Kreativa Studio adalah perusahaan yang menyediakan jasa layanan desain grafis, web developer, dan reparasi komputer di Kota Madiun.' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.example.com/image.jpg' },
      { hid: 'og:url', property: 'og:url', content: `${baseUrl}/image-og.png` },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: `${baseUrl}/image-og.png` },
      // Twitter Card
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Dasa Kreativa Studio - Jasa Layanan Desain Grafis, Web Developer, dan Reparasi Komputer di Kota Madiun' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Dasa Kreativa Studio adalah perusahaan yang menyediakan jasa layanan desain grafis, web developer, dan reparasi komputer di Kota Madiun.' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://www.example.com/image.jpg' },
      { hid: 'twitter:url', name: 'twitter:url', content: `${baseUrl}/image-og.png` },
      // Pinterest Rich Pins
      { hid: 'pinterest:title', property: 'pinterest:title', content: 'Dasa Kreativa Studio - Jasa Layanan Desain Grafis, Web Developer, dan Reparasi Komputer di Kota Madiun' },
      { hid: 'pinterest:description', property: 'pinterest:description', content: 'Dasa Kreativa Studio adalah perusahaan yang menyediakan jasa layanan desain grafis, web developer, dan reparasi komputer di Kota Madiun.' },
      { hid: 'pinterest:image', property: 'pinterest:image', content: 'https://www.example.com/image.jpg' },
      { hid: 'pinterest:url', property: 'pinterest:url', content: `${baseUrl}/image-og.png` }
    ],
    link: [
      { rel: 'cannonical', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/scss/app.scss',
    '@/css/global-style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    '@/plugins/fonts.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://image.nuxtjs.org/getting-started/installation
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://www.npmjs.com/package/@nuxtjs/dotenv
    '@nuxtjs/dotenv',
    // https://sitemap.nuxtjs.org/guide/setup
    '@nuxtjs/sitemap',
    '@nuxtjs/router',
  ],

  // https://sitemap.nuxtjs.org/usage/sitemap-index
  sitemap: {
    hostname: baseUrl,
    routes: [
      '/company',
      '/company/about-us',
      '/company/terms-of-services',
      '/company/privacy-and-policy',
      '/company/portofolio',
      '/services',
      '/services/web-development',
      '/services/ui-designer',
      '/services/printing-design',
      '/services/computer-repair',
    ],
    gzip: true,
  },

  env: {
    FULL_BASE_URL: `${process.env.BASE_SECURE == true ? 'https://' : 'http://'}${process.env.BASE_URL}`,
    FULL_API_URL: `${process.env.API_SECURE == true ? 'https://' : 'http://'}${process.env.BASE_API}`,
  },

  image: {
    domains: ['assets.dasakreativa.web.id', 'backend.dasakreativa.web.id', '.gravatar.com', 'localhost:8000', 'ik.imagekit.io']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.FULL_API_URL,
    withCredentials: process.env.SECURE_CREDENTIALS
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: process.env.BASE_LANG
    }
  },

  server: {
    // port: 3000, // default: 3000
    // host: '0.0.0.0' // default: localhost
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null,
    babel: {
      compact: true
    }
  }
}
