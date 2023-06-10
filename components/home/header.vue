<template>
  <header id="masthead">
    <navbar-component />

    <div class="container-xl">
      <div class="grid gap-4 align-items-center">
        <div class="g-col-12 g-col-md-6 text-center text-md-start">
          <h1 class="font-heading text-xl">Be Creative and Authentic</h1>
          <p class="text-md">Mari, kita bangun dan berkembang bersama membentuk peradaban digital yang kreatif, orisinal, dan aman bersama kami.</p>

          <div class="d-flex gap-2 justify-content-center justify-content-md-start">
            <a href="javascript:void(0)" @click="hyperLinkJump('about')" class="btn btn-lg btn-outline-success">Selengkapnya</a>
            <a href="" class="btn btn-lg btn-secondary">Memulai</a>
          </div>
        </div>
        <div class="g-col-12 g-col-md-6">
          <nuxt-img src="/images/home-image/heading.svg" class="w-100" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { jumpToElement } from '@/js/hyperlink.js';

export default {
  name: 'HeaderHomeComponent',

  methods: {
    /**
     * Click to element scroll
     * @param {string} $target the ID target element without hashtag (#)
     * @since 1.1.0
     * @author Dasa Kreativa Studio <dasakreativa@gmail.com>
     * @see https://stackoverflow.com/a/57308429
     */
    hyperLinkJump($target) {
      jumpToElement($target);
    }
  }
}
</script>

<style lang="scss" scoped>
#masthead {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh);
}
</style>
