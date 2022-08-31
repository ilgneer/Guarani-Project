<template>
  <div class="container">
    <div>
  <v-app>
        <v-card class="mx-auto" max-width="200">
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
  </v-app>
    </div>

    <div>
  <v-app>
        <v-card class="mx-auto" max-width="200">
          <v-img
            class="white--text align-end"
            height="100px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Dissertações</v-card-title>
          </v-img>

          <v-card-actions>
            <v-btn color="orange" text> Ver sobre </v-btn>
          </v-card-actions>
        </v-card>
  </v-app>
    </div>

    <div>
  <v-app>
        <v-card class="mx-auto" max-width="200">
          <v-img
            class="white--text align-end"
            height="100px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Teses</v-card-title>
          </v-img>

          <v-card-actions>
            <v-btn color="orange" text> Ver sobre </v-btn>
          </v-card-actions>
        </v-card>
  </v-app>
    </div>

    <div>
  <v-app>
        <v-card class="mx-auto" max-width="200">
          <v-img
            class="white--text align-end"
            height="100px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Perfis</v-card-title>
          </v-img>

          <v-card-actions>
            <v-btn color="orange" text> Ver sobre </v-btn>
          </v-card-actions>
        </v-card>
  </v-app>
    </div>

    <div>
  <v-app>
        <v-card class="mx-auto" max-width="200">
          <v-img
            class="white--text align-end"
            height="100px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Tinder</v-card-title>
          </v-img>

          <v-card-actions>
            <v-btn color="orange" text> Ver sobre </v-btn>
          </v-card-actions>
        </v-card>
  </v-app>
    </div>

    <div>
  <v-app>
        <v-card class="mx-auto" max-width="200">
          <v-img
            class="white--text align-end"
            height="100px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Ebooks</v-card-title>
          </v-img>

          <v-card-actions>
            <v-btn color="orange" text> Ver sobre </v-btn>
          </v-card-actions>
        </v-card>
  </v-app>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardsComp',
  props: {
    CardsComp: String
  }
}
</script>

<style scoped>


.container {
  width: 100%;
  margin-top: 110px;
  display: grid;
  /* aqui eu determino é são 3 colunas de tamanhos iguas, cada coluna tem uma fração */
  grid-template-columns: repeat(3, 1fr);
  /* esssa é a altura das linhas, se vc quiser pode apaga-la caso não queira uma altura definida */
  grid-auto-rows: 200px;
  /* espaço entre um elemento interno e outro */
  grid-gap: 5px 8px;
  /* margem interna que afasta os elementos da borda do grid */
  padding: 20px 10px;

}

.theme--light.v-application {
  background: var(--background-color);
}


@media screen and (max-width: 700px){
  .container {
      margin-top: 150px;
      grid-template-columns: 100%;
      width: 100%;

    }

}

</style>