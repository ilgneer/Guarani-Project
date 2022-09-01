<template>
  <div id="app">
    <HeaderComp />
    <router-view path="$router.key" />
    <FooterComp />
  </div>
</template>

<script>
import './styles/global.css'

import HeaderComp from './components/Header.vue'
import FooterComp from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp,
  }
}
</script>

<style>
.v-application--wrap {
  min-height: unset;
}
</style>
