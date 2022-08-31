<template>
  <div id="app">
    <HeaderComp />
    <HomePage />
    <FooterComp />
  </div>
</template>

<script>
import './styles/global.css'

import HeaderComp from './components/Header.vue'
import FooterComp from './components/Footer.vue'
import HomePage from './pages/Home.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    HomePage,
    FooterComp
  }
}
</script>

<style>
.v-application--wrap {
  min-height: unset;
}
</style>
