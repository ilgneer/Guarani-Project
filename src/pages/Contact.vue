<template>
  <main>
    <WelcomeComp />
    <div class="texto-contato">
      <h2>Entre em contato</h2>
      <form
        action="https://formsubmit.co/mendesilgner@gmail.com"
        method="POST"
        class="form"
      >
        <input type="text" name="Nome" placeholder="Nome Completo" required />
        <input type="email" name="Email" placeholder="Email" required />
        <textarea
          name="Mensagem"
          placeholder="Digite aqui"
          cols="30"
          rows="10"
        ></textarea>
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="http://localhost:8080/" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  </main>
</template>

<script>
import WelcomeComp from '../components/Welcome.vue'

export default {
  name: 'ContactPage',
  components: {
    WelcomeComp
  }
}
</script>

<style scoped>
h2 {
  color: var(--color-text-title);
  margin-bottom: 1.5rem;
}

.texto-contato {
  display: flex;
  flex-direction: column;
  margin: 150px 160px;
  width: 100%vh;
  height: 500px;
  background-color: var(--color-background);
  border-radius: 10px;
  padding: 20px;
}

.form {
  width: 100%;
  max-width: 32rem;
}

.form input,
.form textarea,
.form button {
  display: block;
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
}

.form textarea,
.form input {
  border: 2px solid var(--color-text-title);
  border-radius: 8px;
  transition: border-color, box-shadow 0.2s;
}

.form textarea {
  min-height: 13rem;
  resize: none;
}

.form input:hover,
.form input:focus,
.form textarea:hover,
.form textarea:focus {
  outline: none;
  border-color: #0d2e1d;
  box-shadow: 0 0 0 3px #2b472b;
}

.form button {
  display: block;
  padding: 1rem;
  background: var(--color-background-home);
  color: #fff;
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}

.form button:hover,
.form button:focus {
  outline: none;
  background: #0d2e1d;
}

@media screen and (max-width: 700px) {
  .texto-contato {
    width: 80%;
    margin: auto;
    margin-top: 200px;
    height: 520px;
    padding: 20px;
  }
}
</style>
