<template>
  <div id="app">

    <HeaderComp/>
    <HomePage/>

  </div>
</template>

<script>
import './styles/global.css'

import HeaderComp from './components/Header.vue'
import HomePage from './pages/Home.vue'



export default {
  name: 'App',
  components: {
    HeaderComp,
    HomePage
  }
}
</script>