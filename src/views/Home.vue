<template>
  <div class="home">
    <div class="jumbotron">
      <h1>Bienvenue !</h1>
      <p class="lead">L'application d'écoute et de gestion de musique gratuite, via le catalogue Deezer !</p>
      <hr class="my-4">
      <p>Ecoutez gratuitement des extraits issus de la base de données de Deezer, et organisez vos favoris sur votre compte personnel !</p>
      <div class="text-center">
        <router-link class="btn btn-primary btn-lg" to="/register" role="button">Je m'inscris</router-link>
        <router-link class="btn btn-info btn-lg" to="/login" role="button">Je me connecte</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  computed: {
    loggedUser() {
      return this.$store.state.loggedUser 
    }
  },

  created() {
    this.$store.dispatch('getUser')
  }
}
</script>
