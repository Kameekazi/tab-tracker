<template>
  <div id="app">
    <v-app>
      <page-header />
      <!-- <img src="./assets/logo.png" /> -->
      <router-view />
    </v-app>
  </div>
</template>

<script>
import pageHeader from '@/components/Header'
export default {
  name: 'App',
  components: {
    pageHeader
  }
}
</script>

<style>
html {
  /* overflow-y: hidden; */
  /* overflow: hidden; */
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
