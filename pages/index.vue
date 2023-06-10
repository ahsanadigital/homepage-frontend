<template>
  <div id="home">
    <home-about />
    <home-service />
    <choose-component />
    <home-portofolio />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'home',

  data() {
    return {
      baseURL: `${process.env.BASE_SECURE === true ? 'https://' : 'http://'}${process.env.BASE_URL}`,
    }
  },

  head() {
    return {
      title: 'Dasa Kreativa Studio - Jasa Layanan Desain Grafis, Web Developer, dan Reparasi Komputer di Kota Madiun',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Dasa Kreativa Studio adalah perusahaan yang menyediakan jasa layanan desain grafis, web developer, dan reparasi komputer di Kota Madiun.' },
        // Facebook Open Graph
        { hid: 'og:site_name', property: 'og:site_name', content: 'Dasa Kreativa Studio - Jasa Layanan Desain Grafis, Web Developer, dan Reparasi Komputer di Kota Madiun' },
        { hid: 'og:title', property: 'og:title', content: 'Dasa Kreativa Studio - Jasa Layanan Desain Grafis, Web Developer, dan Reparasi Komputer di Kota Madiun' },
        { hid: 'og:description', property: 'og:description', content: 'Dasa Kreativa Studio adalah perusahaan yang menyediakan jasa layanan desain grafis, web developer, dan reparasi komputer di Kota Madiun.' },
        { hid: 'og:image', property: 'og:image', content: `${this.baseURL}/image-og.png` },
        { hid: 'og:url', property: 'og:url', content: `${this.baseURL}/image-og.png` },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: `${this.baseURL}/image-og.png` },
        // Twitter Card
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Dasa Kreativa Studio - Jasa Layanan Desain Grafis, Web Developer, dan Reparasi Komputer di Kota Madiun' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Dasa Kreativa Studio adalah perusahaan yang menyediakan jasa layanan desain grafis, web developer, dan reparasi komputer di Kota Madiun.' },
        { hid: 'twitter:image', name: 'twitter:image', content: `${this.baseURL}/image-og.png` },
        { hid: 'twitter:url', name: 'twitter:url', content: `${this.baseURL}/image-og.png` },
        // Pinterest Rich Pins
        { hid: 'pinterest:title', property: 'pinterest:title', content: 'Dasa Kreativa Studio - Jasa Layanan Desain Grafis, Web Developer, dan Reparasi Komputer di Kota Madiun' },
        { hid: 'pinterest:description', property: 'pinterest:description', content: 'Dasa Kreativa Studio adalah perusahaan yang menyediakan jasa layanan desain grafis, web developer, dan reparasi komputer di Kota Madiun.' },
        { hid: 'pinterest:image', property: 'pinterest:image', content: `${this.baseURL}/image-og.png` },
        { hid: 'pinterest:url', property: 'pinterest:url', content: `${this.baseURL}/image-og.png` }
      ],
      link: [
        { rel: 'cannonical', href: this.baseURL },
      ]
    }
  }
})
</script>
