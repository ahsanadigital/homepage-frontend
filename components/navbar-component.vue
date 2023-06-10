<template>
  <nav class="navbar py-3 py-lg-0 navbar-expand-lg navbar-light border-bottom bg-white fixed-top" id="navbar-home">
    <div class="container-xl">
      <nuxt-link class="navbar-brand" to="/">
        <nuxt-img src="https://ik.imagekit.io/cakadi190/Logo_DKStudio/SVG/logo-color.svg" style="height: 36px;width: auto;" />
      </nuxt-link>

      <div class="d-flex gap-2 d-lg-none">
        <div class="dropdown">
          <a href="javascript:void(0)" class="btn btn-link text-dark" data-bs-toggle="dropdown">
            <i class="fas fa-user"></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <nuxt-link class="dropdown-item" to="/register">Daftar</nuxt-link>
            </li>
            <li>
              <nuxt-link class="dropdown-item" to="/login">Masuk</nuxt-link>
            </li>
          </ul>
        </div>
        <button class="navbar-toggler" @click.prevent="showOffcanvasMenu()" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="offcanvas offcanvas-end text-bg-white" :class="showMenu ? 'show' : ''" tabindex="-1" :style="{ visibility: showMenu ? 'visible' : 'hidden' }" id="offCanvasNavbar" aria-labelledby="offCanvasNavbarLabel">
        <div class="offcanvas-header">
          <nuxt-link class="navbar-brand" to="/">
            <nuxt-img src="https://ik.imagekit.io/cakadi190/Logo_DKStudio/SVG/logo-color.svg" style="height: 36px;width: auto;" />
          </nuxt-link>
          <button type="button" class="btn-close btn-close-dark" @click.prevent="showOffcanvasMenu()" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-flex flex-column flex-lg-row">
          <ul class="navbar-nav flex-grow gap-2">
            <li class="nav-item" v-for="(link, index) in menuLink" :key="index">
              <a v-if="/(?:http[s]?:\/\/.)?(?:www\.)?[-a-zA-Z0-9@%._\+~#=]{2,256}\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/.test(link.link)" :href="link.link" :active="$route.path === link.link" :class="`nav-link${$route.path === link.link ? ' active' : ''}`">{{ link.name }}</a>
              <a v-else href="javascript:void(0)" @click="changeRouterAndClose(link.link)" :class="`nav-link${$route.path === link.link ? ' active' : ''}`">{{ link.name }}</a>
            </li>
          </ul>
          <ul class="navbar-nav justify-self-end flex-grow ms-0 ms-lg-auto mt-auto mt-lg-0">
            <li class="nav-item btn-group">
              <nuxt-link to="/register" class="btn btn-outline-success">Mendaftar</nuxt-link>
              <nuxt-link to="/login" class="btn btn-secondary">Masuk</nuxt-link>
            </li>
            <li class="text-center nav-menu mt-3 d-lg-none">
              <div>Hak Cipta {{ year }} <nuxt-link to="/">Dasa Kreativa Studio</nuxt-link>.</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
#navbar-home {
  .navbar-nav {
    align-items: center;

    @media screen and (max-width: 992px) {
      align-items: unset;
    }
  }

  .nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem .875rem;
    min-height: 72px;
    position: relative;
    transition: all .2s;

    &.active {
      color: var(--nui-primary);
    }

    @media screen and (max-width: 992px) {
      min-height: 48px;
      width: 100%;
      justify-content: start;
      padding: 0 1rem;
    }

    &::before {
      content: '';
      width: 0%;
      height: 3px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: var(--nui-primary);
      transition: all .2s;
    }

    &:hover {
      background: linear-gradient(to bottom, rgba(var(--nui-primary-rgb), .025), rgba(var(--nui-primary-rgb), .125));
      color: var(--nui-primary);

      &::before {
        width: 100%;
      }
    }
  }


  .navbar-toggler {
    padding: 0;
    border: 0;

    &:focus {
      box-shadow: unset;
    }
  }

  a {
    text-decoration: none;
  }
}
</style>

<script setup>
const menuLink = [
  { name: 'Beranda', link: '/' },
  { name: 'Tentang', link: '/company/about-us' },
  { name: 'Portofolio', link: '/portofolio' },
  { name: 'Layanan', link: '/services' },
  { name: 'Harga', link: '/services/pricing' },
  { name: 'Blog', link: 'https://blog.dasakreativa.web.id' },
];

const year = new Date().getFullYear();
</script>

<script>
export default {
  name: 'NavbarComponent',

  data() {
    return {
      showMenu: false,
    };
  },

  methods: {
    showOffcanvasMenu(){
      this.showMenu ? this.showMenu = false : this.showMenu = true;
    },
    changeRouterAndClose($link) {
      this.showOffcanvasMenu();
      this.$router.push($link);
    }
  }
}
</script>
