<template>
  <section class="need-space" id="portofolio-page-content">
    <div class="container">
      <div class="row mb-4">
        <div class="col-xl-9 col-xs-6 col-md-8">
          <h4 class="subtitle">Portofolio</h4>
          <h3 class="title">Berikut Beberapa Portofolio Kami</h3>
          <p>Dengan tenaga ahli dibidangnya, maka akan tercipta sebuah mahakarya untuk membangun peradaban digital Indonesia yang semakin beragam.</p>
        </div>
      </div>

      <div class="grid gap-3">
        <div class="g-col-sm-6 g-col-md-4 g-col-12" v-for="(row, index) in 9" :key="index">
          <div class="portofolio-section">
            <img src="https://dummyimage.com/1920x1080/000/fff" class="image" alt="Dummy Image" />

            <p class="category">Kategori</p>
            <h3 class="title">Judul Proyek</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortofolioContentComponent'
}
</script>

<style lang="scss" scoped>
.portofolio-section {
  margin-bottom: 1rem;

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
