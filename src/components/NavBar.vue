<template>  
  <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
    <router-link to="/" class="navbar-brand">
      <i class="fa fa-headphones"></i>
      Deezweb
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
        aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav nav-right">
        <router-link to="/search" class="nav-item nav-link active">
          <i class="fa fa-search"></i> 
          Recherche
        </router-link>
        <router-link to="#" class="nav-item nav-link">
          <i class="fa fa-heart"></i> 
          Mes favoris
        </router-link>
        <router-link to="/login" class="nav-item nav-link">
          <i class="fa fa-sign-in"></i> 
          Connexion
        </router-link>
        <router-link to="/register" class="nav-item nav-link">
          <i class="fa fa-user-plus"></i> 
          Inscription
        </router-link>
      </div>
    </div>
  </nav>
</template>
