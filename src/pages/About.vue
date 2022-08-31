<template>
  <main>
    <WelcomeComp/>
  </main>
</template>

<script>
import WelcomeComp from '../components/Welcome.vue'
import FooterComp from '..components/Footer.vue'

export default {
  name: 'AboutPage',
  components: {
    WelcomeComp,
    FooterComp
  }
}
</script>

<style scoped></style>
