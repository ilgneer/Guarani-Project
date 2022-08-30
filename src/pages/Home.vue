<template>
  <main>

    <div class="div-home">
      <a href="/"><img class="logo-home" src="https://raw.githubusercontent.com/ilgneer/Guarani-Project/main/src/assets/images/logo1.png"></a>
    </div>


    <div class="text-top">
      <p>GUARANI é uma Plataforma Digital que disponibiliza o Acesso Aberto às pesquisas de forma rápida e eficiente. A Política de Acesso Aberto ao Conhecimento Científico da FAPEMA foi instituída pela Portaria n° 32/2019 para garantir a transmissão do conhecimento científico e tecnológico do Maranhão à sociedade, em especial à comunidade científica, além de reforçar a responsabilidade sociocientífica regional.
      </p>
    </div>


  
    <v-app id="inspire">
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col>
          <v-card
      class="mx-auto"
      max-width="200"
    >
      <v-img
        class="white--text align-end"
        height="100px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Projetos</v-card-title>
      </v-img>

      <v-card-actions>
        <v-btn
          color="orange"
          text
        >
          Ver sobre
        </v-btn>
      </v-card-actions>
    </v-card>
        </v-col>
        <v-col order="12">
          <v-card
      class="mx-auto"
      max-width="200"
    >
      <v-img
        class="white--text align-end"
        height="100px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Dissertações</v-card-title>
      </v-img>

      <v-card-actions>
        <v-btn
          color="orange"
          text
        >
          Ver sobre
        </v-btn>
      </v-card-actions>
    </v-card>
        </v-col>
        <v-col order="1">
          <v-card
      class="mx-auto"
      max-width="200"
    >
      <v-img
        class="white--text align-end"
        height="100px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Teses</v-card-title>
      </v-img>

      <v-card-actions>
        <v-btn
          color="orange"
          text
        >
          Ver sobre
        </v-btn>
      </v-card-actions>
    </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
  
  <v-app id="inspire">
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col>
          <v-card
      class="mx-auto"
      max-width="200"
    >
      <v-img
        class="white--text align-end"
        height="100px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Perfis</v-card-title>
      </v-img>

      <v-card-actions>
        <v-btn
          color="orange"
          text
        >
          Ver sobre
        </v-btn>
      </v-card-actions>
    </v-card>
        </v-col>
        <v-col order="12">
          <v-card
      class="mx-auto"
      max-width="200"
    >
      <v-img
        class="white--text align-end"
        height="100px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Adryann</v-card-title>
      </v-img>

      <v-card-actions>
        <v-btn
          color="orange"
          text
        >
          Ver sobre
        </v-btn>
      </v-card-actions>
    </v-card>
        </v-col>
        <v-col order="1">
          <v-card
      class="mx-auto"
      max-width="200"
    >
      <v-img
        class="white--text align-end"
        height="100px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Ebooks</v-card-title>
      </v-img>

      <v-card-actions>
        <v-btn
          color="orange"
          text
        >
          Ver sobre
        </v-btn>
      </v-card-actions>
    </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
  </main>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>

  main {
    background-color: var(--color-background-home);
  }

  .div-home {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
}

  .logo-home {
    width: 700px;
 }

  .text-top p {
    color: white;
    margin: 13px 40px;
    text-align: center;
  }

  .text-top:hover {
    opacity: 0.8;
  }
 

</style>