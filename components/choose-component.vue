<template>
  <section id="why-choose-us" class="need-space bg-white">
    <div class="container">
      <h3 class="text-center mb-5 title">Kenapa Harus Memilih Kami?</h3>

      <div class="grid gap-4">
        <div class="g-col-lg-4 g-col-sm-6 g-col-12" v-for="(list, index) in listings" :key="index">
          <div class="widget-wrapper">
            <i :class="`widget-icon fas ${list.icon}`"></i>
            <h3 class="widget-title">{{ list.title }}</h3>
            <p>{{ list.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const listings = [
  { title: 'Harga Yang Bersahabat', icon: 'fa-tags', description: 'Dengan harga yang murah, akan mempermudah anda dalam mengembangkan usaha lebih berkembang lagi.' },
  { title: 'Garansi Penuh', icon: 'fa-bug', description: 'Garansi penuh terhadap proyek apabila ditemukan bug *sesuai dengan perjanjian yang tertera.' },
  { title: 'Terpercaya', icon: 'fa-check', description: 'Kami sudah terpercaya sejak 2021 untuk pengerjaan semua kebutuhan digital maupun non-digital.' },
  { title: 'Metode Pengerjaan', icon: 'fa-list-check', description: 'Pengerjaan proyek yang kami lakukan akan melampirkan laporan proses pengerjaan dari awal hingga akhir pengerjaan.' },
  { title: 'Fleksibilitas', icon: 'fa-shuffle', description: 'Pengerjaan bisa disesuaikan dengan kebutuhan anda yang segera launching website atau sedang mempersiapkan produknya.' },
  { title: 'Dukungan Proyek', icon: 'fa-headset', description: 'Dukungan penuh untuk proyek anda dengan membuat grup percakapan untuk pengerjaan supaya lebih terkoordinasi (apabila diperlukan).' },
];
</script>

<script>
export default {
  name: 'PortoComponent'
}
</script>

<style lang="scss" scoped>
#why-choose-us {
  .widget-wrapper {
    .widget-icon {
      font-size: 2.25rem;
      color: rgba(var(--nui-primary-rgb));
      width: 5rem;
      height: 5rem;
      border-radius: 50rem;
      border: 2px solid var(--nui-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      &::after {
        position: absolute;
        bottom: -.625rem;
        right: -.625rem;
        background: rgba(var(--nui-primary-rgb), .125);
        border-radius: 50rem;
        width: 5rem;
        height: 5rem;
        content: '';
      }
    }

    .widget-title {
      margin: 1.5rem 0 .75rem 0;
      font-size: 1.5rem;
    }

    @media screen and (max-width: 768px) {
      text-align: center;
      .widget-icon {
        margin: 0 auto;
      }
    }
  }
}
</style>
