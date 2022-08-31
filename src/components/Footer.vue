<template>
  <footer class="rodape">
    <v-app id="inspire">
      <v-footer dark padless>
        <v-card
          flat
          tile
          class="indigo darken-4 lighten-1 white--text text-center"
        >
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
            Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
            accumsan id ultrices nunc. Sed at orci sed massa consectetur
            dignissim a sit amet dui. Duis commodo vitae velit et faucibus.
            Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Guarani Project 🏹</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-app>
  </footer>
</template>

<script>
export default {
  name: 'FooterComp',
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
  })
}
</script>

<style scoped>
.rodape {
  /* 65vh é ideal */
  margin-top: 100vh;
}

/* Caso App.vue não funcione, arrumar o footer */
/* ::v-deep .v-application--wrap {
  margin-top: 30px;
  min-height: fit-content;
} */

.v-application .indigo.darken-4 {
  background-color: var(--color-background-nav) !important;
  border-color: var(--color-background-nav) !important;
}

.theme--light.v-application {
  background: var(--background-color);
}

@media screen and (max-width: 700px) {
  .rodape {
    margin-top: 190vh;
    width: 100%;
  }
}
</style>
