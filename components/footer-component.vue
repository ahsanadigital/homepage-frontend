<template>
  <footer id="footer-main">
    <div class="container" id="footer-top">
      <div class="row py-5 justify-content-between align-items-center">
        <div class="col-md-7 mb-4 mb-md-0 text-center text-md-start">
          <h3 class="h1 mb-0">Mau Bikin Sekarang? Yuk langsung hubungi atau konsultasikan sekarang!</h3>
        </div>
        <div class="col-md-4 text-center">
          <nuxt-link to="/company/contact-us" class="btn btn-lg btn-ws-primary">Konsultasikan Sekarang</nuxt-link>
          <p class="mb-0 mt-3">*Konsultasi dapat dilakukan pada saat jam kerja kami.</p>
        </div>
      </div>
    </div>
    <div class="container" id="footer-bottom">
      <div class="row py-5">
        <div class="col-lg-5 mb-4 mb-lg-0">
          <nuxt-link to="/" class="mb-4 d-block w-max">
            <nuxt-img height="72" src="https://ik.imagekit.io/cakadi190/Logo_DKStudio/SVG/logo-duotone.svg" />
          </nuxt-link>

          <ul class="list-has-icon">
            <li><i class="fa-solid fa-building"></i>Jl. Swolobumi, Gg. Udowo (Kompleks Gedung MTA Perwakilan Kota Madiun), Kel. Demangan, Taman, Kota Madiun 63131, Jawa Timur</li>
            <li><i class="fa-solid fa-phone"></i><a href="https://wa.me/6285702880746">+6285702880746</a></li>
            <li><i class="fa-solid fa-envelope"></i><a href="mailto:halo@dasakreativa.web.id">halo@dasakreativa.web.id</a></li>
            <li><i class="fa-solid fa-globe"></i><nuxt-link to="/">https://www.dasakreativa.web.id</nuxt-link></li>
          </ul>
        </div>
        <div class="col-lg-7">
          <div class="row">
            <div class="col-md-4 col-6 mb-4 mb-lg-0">
              <div class="widget-panel">
                <h3 class="widget-title">Layanan Kami</h3>
                <ul class="list-has-icon default">
                  <li v-for="(link, index) in services" :key="index">
                    <a v-if="/(?:http[s]?:\/\/.)?(?:www\.)?[-a-zA-Z0-9@%._\+~#=]{2,256}\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/.test(link.link)" :href="link.link" class="nav-link">{{ link.name }}</a>
                    <nuxt-link v-else :to="link.link" class="nav-link">{{ link.name }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-6 mb-4 mb-lg-0">
              <div class="widget-panel">
                <h3 class="widget-title">Tautan Lain</h3>
                <ul class="list-has-icon default">
                  <li v-for="(link, index) in otherLinks" :key="index">
                    <a v-if="/(?:http[s]?:\/\/.)?(?:www\.)?[-a-zA-Z0-9@%._\+~#=]{2,256}\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/.test(link.link)" :href="link.link" class="nav-link">{{ link.name }}</a>
                    <nuxt-link v-else :to="link.link" class="nav-link">{{ link.name }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="widget-panel">
                <h3 class="widget-title">Pembayaran</h3>
                <div class="d-flex gap-2 flex-wrap justify-content-between" id="payment">
                  <nuxt-img src="/images/bank/bca-white.svg" />
                  <nuxt-img src="/images/bank/jago-white.svg" />
                  <nuxt-img src="/images/bank/btn-white.svg" />
                  <nuxt-img src="/images/bank/gopay-white.svg" />
                  <nuxt-img src="/images/bank/dana-white.svg" />
                  <nuxt-img src="/images/bank/ovo-white.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const services = [
  { name: 'Pengembang Website', link: '/services/web-development' },
  { name: 'Website Designer', link: '/services/ui-designer' },
  { name: 'Desain Media Digital', link: '/services/graphic-design' },
  { name: 'Desain Media Cetak', link: '/services/printing-design' },
  { name: 'Reparasi Komputer', link: '/services/computer-repair' },
];

const otherLinks = [
  { name: 'Tentang Kami', link: '/company/about-us' },
  { name: 'Portofolio Kami', link: '/portofolio' },
  { name: 'Aturan Pelayanan', link: '/company/terms-of-services' },
  { name: 'Kontak Kami', link: '/company/contact-us' },
  { name: 'Kebijakan Privasi', link: '/company/privacy-and-policy' },
  { name: 'Blog', link: 'https://blog.dasakreativa.web.id' },
]
</script>

<script>
export default {
  methods: {
    decodeString($string) {
      return String.fromCharCode(0x1 + $string)
    }
  }
}
</script>

<style lang="scss" scoped>
#payment {
  img {
    max-width: calc(50% - .5rem);

    @media screen and (max-width: 768px) {
      max-width: calc(33.3% - .5rem);
    }
  }
}
</style>

<style lang="scss">
footer#footer-main {
  background: var(--nui-gray-900);
  color: var(--nui-gray-500);
  padding: 2rem 0;

  @for $index from 1 through 6 {
    h#{$index}{
      color: var(--nui-gray-300) !important;
    }
  }

  a:not(.btn) {
    font-weight: 500;
    text-decoration: none;
    color: var(--nui-gray-400);
    transition: all .2s;

    &:hover {
      color: var(--nui-primary);
    }
  }

  #footer-top {
    border-bottom: 2px solid;
    border-image: repeating-linear-gradient(to right, var(--nui-dark), rgba(var(--nui-white-rgb), .5), var(--nui-dark)) 1;
  }

  ul.list-has-icon {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    list-style: none;
    padding: 0;
    margin: 0;

    &.default {
      li:before {
        font-family: 'Font Awesome 6 Free';
        font-weight: 900;
        content: '\f0c8';
        margin-top: .25rem;
        font-size: .5em;
      }
    }

    li {
      display: flex;
      gap: .5rem;

      .fa-solid,
      .fa-regular,
      .fa-brands,
      .fas,
      .fab,
      .far {
        margin-top: .25rem;
        min-width: 1.25rem;
        display: flex;
        justify-content: center;
      }
    }
  }

  .widget-panel {
    .widget-title {
      font-size: 1.325rem;
      margin-bottom: 1rem;
    }
  }
}
</style>
