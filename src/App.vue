<template>
  <div id="app">
    <the-navigation-bar></the-navigation-bar>
    <b-container fluid>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import TheNavigationBar from './components/TheNavigationBar.vue'

export default {
  name: 'app',
  components: {
    TheNavigationBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
