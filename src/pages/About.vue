<template>
  <main>
    <WelcomeComp />
    <div class="sobre">
      <h2>Sobre</h2>
      <p>
        A FAPEMA disponibiliza o Sistema Buriti para divulgar os trabalhos de
        pesquisadores, instituições de ensino e empresas, que têm ou tiveram
        projetos de pesquisas fomentados pela FAPEMA, apresentando dados
        relativos às etapas de demanda de bolsas (nº de solicitações) e de
        auxílios (recursos solicitados), bem como propostas aprovadas pela Fap
        do Maranhão. Ao acessar o Sistema, o usuário pode realizar consultas,
        utilizando diversas variáveis de busca. Os dados estão organizados em
        conformidade com as principais linhas de atuação. <br />
      </p>
      <p>
        A fonte utilizada é a Plataforma PATRONAGE e as informações advindas dos
        apoios aos auxílios e bolsas, assim como números finais dos relatórios
        técnicos. Com esta ferramenta, pesquisadores, professores, estudantes e
        profissionais de vários segmentos poderão encontrar as pesquisas
        produzidas em prol do desenvolvimento da sociedade.
      </p>
    </div>
    <FooterComp />
  </main>
</template>

<script>
import WelcomeComp from '../components/Welcome.vue'

export default {
  name: 'AboutPage',
  components: {
    WelcomeComp
  }
}
</script>

<style scoped>
/* .texto-sobre {
  margin: 160px 90px;
  color: var(--color-text-title);
}

.texto-about {

  margin: 90px;
  margin-bottom: -15rem;
} */

.sobre {
  display: flex;
  flex-direction: column;
  margin: 270px 160px;
  width: 100%vh;
  height: 280px;
  background-color: var(--color-background);
  border-radius: 10px;
  padding: 20px;
}

@media screen and (max-width: 700px) {
  .sobre {
    width: 80%;
    margin: auto;
    margin-top: 200px;
    height: 800px;
    padding: 20px;
  }
  .rodape {
    margin-top: 100vh;
  }
}

h2,
p {
  margin-bottom: 1.5rem;
}

h2 {
  color: var(--color-text-title);
}
</style>
