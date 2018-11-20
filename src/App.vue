<template>
  <div id="app">
    <NavBar />
    <main class="container">
      <router-view/>
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
} */

.navbar-nav.nav-right {
  margin-left: auto;
}

main.container {
  margin-top: 2rem;
}

.search-results {
  flex-wrap: wrap;
}

.search-results .card {
  min-width: 200px;
  max-width: 300px;
}
</style>
