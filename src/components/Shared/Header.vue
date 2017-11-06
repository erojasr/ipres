<template>

  <!-- Fixed navbar -->
  <div class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">iPresupuesto</a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li><router-link to="/" class="active">Presupuesto</router-link></li>
          <li><router-link to="/cards">Tajetas</router-link></li>
          <li><router-link to="/automatic">Cargos Automaticos</router-link></li>
          <li><router-link to="/configuration">Configuracion</router-link></li>
        </ul>
      </div><!--/.nav-collapse -->
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
