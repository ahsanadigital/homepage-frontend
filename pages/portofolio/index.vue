<template>
  <div id="portofolio-page">
    <header id="masthead" class="header-main header-half">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h1>Portofolio</h1>
            <ul class="breadcrumb">
              <li class="breadcrumb-item"><nuxt-link to="/"><i class="fas fa-home"></i></nuxt-link></li>
              <li class="breadcrumb-item active">Portofolio</li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <portofolio-content />
  </div>
</template>

<script>
export default {
  name: 'PortoPage',
  layout: 'pages',

  head() {
    return {
      title: 'Portofolio - Dasa Kreativa Studio'
    }
  }
}
</script>
