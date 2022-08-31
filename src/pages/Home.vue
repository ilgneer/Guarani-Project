<template>
  <main>
    

    <WelcomeComp/>
    <CardsComp />
    <FooterComp />
  

    <!-- <v-app id="inspire">
      <div class="content">
        <v-card class="mx-auto" max-width="200" v-for="i in 3" :key="i" >
          <v-img
            class="white--text align-end"
            height="100px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Projetos</v-card-title>
          </v-img>

          <v-card-actions>
            <v-btn color="orange" text> Ver sobre </v-btn>
          </v-card-actions>
        </v-card>
      </div>

      <div class="content">
        <v-card class="mx-auto" max-width="200" v-for="i in 3" :key="i" >
          <v-img
            class="white--text align-end"
            height="100px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Projetos</v-card-title>
          </v-img>
          <v-card-actions>
            <v-btn color="orange" text> Ver sobre </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-app> -->
  </main>
</template>

<script>
import CardsComp from '../components/Cards.vue'
import WelcomeComp from '../components/Welcome.vue'

export default {
  name: 'HomePage',
  components: {
    CardsComp,
    WelcomeComp
  }
}
</script>

<style scoped>

