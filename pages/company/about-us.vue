<template>
  <div id="about-page">
    <header id="masthead" class="header-main header-half">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h1>Tentang Kami</h1>
            <ul class="breadcrumb">
              <li class="breadcrumb-item"><nuxt-link to="/"><i class="fas fa-home"></i></nuxt-link></li>
              <li class="breadcrumb-item"><nuxt-link to="/company">Perusahaan</nuxt-link></li>
              <li class="breadcrumb-item active">Tentang Kami</li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <choose-component />
    <home-portofolio class="bg-light" />
  </div>
</template>

<script>
export default {
  name: 'AboutUsPage',
  layout: 'pages',

  head() {
    return {
      title: 'Tentang Kami - Dasa Kreativa Studio'
    }
  }
}
</script>
