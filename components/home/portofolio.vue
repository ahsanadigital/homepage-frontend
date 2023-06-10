<template>
  <section class="need-space" id="portofolio">
    <div class="container">
      <div class="row mb-4">
        <div class="col-xl-9 col-xs-6 col-md-8">
          <h4 class="subtitle">Portofolio</h4>
          <h3 class="title">Berikut Beberapa Portofolio Kami</h3>
          <p>Dengan tenaga ahli dibidangnya, maka akan tercipta sebuah mahakarya untuk membangun peradaban digital Indonesia yang semakin beragam.</p>
        </div>
      </div>

      <div class="row">
        <div v-if="portolist"></div>
        <div class="col-lg-3 col-sm-6 col-md-4 col-12" v-else v-for="(row, index) in 8" :key="index">
          <div class="portofolio-section">
            <img src="https://dummyimage.com/1920x1080/000/fff" class="image" alt="Dummy Image" />

            <p class="category">Kategori</p>
            <h3 class="title">Judul Proyek</h3>
          </div>
        </div>
      </div>

      <div class="text-center mt-3">
        <nuxt-link class="btn btn-primary" to="/portofolio">Selengkapnya</nuxt-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.portofolio-section {
  margin-bottom: 2rem;

  .image {
    border-radius: var(--nui-border-radius);
    max-width: 100%;
    margin-bottom: .5rem;
    display: block;
    position: relative;
  }

  .category {
    font-weight: 700;
    margin-bottom: .25rem;
    color:var(--nui-primary);
  }

  .title {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
}
</style>

<script setup>
const portolist = [];
</script>
