<template>
  <section class="need-space bg-white" id="service">
    <div class="container-xl">
      <div class="text-center">
        <h3 class="mb-1 title">Layanan Kami</h3>
        <p class="mb-5">Yuk cek ricek dulu apa aja layanan kami...</p>
      </div>

      <div class="grid gap-3">
        <div class="g-col-12 g-col-sm-6 g-col-lg-4" v-for="(data, index) in services" :key="index">
          <nuxt-link :to="data.link" class="card card-body">
            <i class="fa-fw" :class="`text-white bg-${bsColor[index % 6]} ${data.icon}`"></i>
            <h3>{{ data.name }}</h3>
            <p class="mb-0" v-html="data.desc" />
          </nuxt-link>
        </div>
        <div class="g-col-12 g-col-sm-6 g-col-lg-4 text-center">
          <nuxt-img src="/images/home-image/service.svg" class="w-100" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#service {
  .card {
    text-decoration: none;
    transition: all .2s;

    &:hover {
      box-shadow: var(--nui-box-shadow);
      transform: translate(-.25rem, -.25rem);
    }
    &:focus {
      box-shadow: var(--nui-box-shadow-sm);
      transform: translate(-.125rem, -.125rem);
    }

    i {
      width: 4rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5em;
      border-radius: var(--nui-border-radius-lg);
      margin-bottom: 1rem;
    }
  }
}
</style>

<script setup>
const bsColor = ['primary', 'secondary', 'success', 'danger', 'info', 'warning', 'dark', 'tertiary', 'light', 'link'];

const services = [
  { desc: 'Bikin website gak perlu pusing, kita hadir di tengah masyarakat dengan kebutuhan digital yang tinggi bisa bantu kamu bikin web biar bisa dicari di google.', name: 'Pengembang Website', link: '/services/web-development', icon: 'fas fa-code' },
  { desc: 'Gausah bingung kalau kamu mau bikin web tapi harus ngerancang dulu. Kita siap bantu kamu bikin desain tampilan website yang modern, kece lagi cetar membahenol.', name: 'Website Designer', link: '/services/ui-designer', icon: 'fas fa-bezier-curve' },
  { desc: 'Bikin desain gak pake lama alias <em>sat set wat wet</em>, tinggal kirim <em>brief</em>nya bakalan kita bikinin sampe dipublikasikan ke sosial media kamu.', name: 'Desain Media Digital', link: '/services/graphic-design', icon: 'fas fa-swatchbook' },
  { desc: 'Bikin banner, pamflet, stiker, atau lainnya? Bisa kok, tinggal kirim desain atau <em>brief</em>nya nanti bakalan diproses sampe ke tangan kamu.', name: 'Desain Media Cetak', link: '/services/printing-design', icon: 'fas fa-print' },
  { desc: 'Pusing mikirin laptop rusak? Atau takut nantinya bakalan kena tipu sama tuser? Tenang kita ada buat kamu yang khawatir soal itu dan dijamin bakalan 100% nyala lagi.', name: 'Reparasi Komputer', link: '/services/computer-repair', icon: 'fas fa-desktop' },
];
</script>
