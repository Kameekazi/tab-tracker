<template>
  <v-card color="grey lighten-4" flat tile>
    <v-toolbar color="primary" fixed dense dark>
      <v-toolbar-title class="mr-4">
        <span class="home" @click="navigateTo({name: 'root'})">TabTracker</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn color="primary" depressed dark>Browse</v-btn>
        <v-btn color="primary" depressed dark @click="navigateTo({name: 'login'})">LOG IN</v-btn>
        <v-btn color="primary" depressed dark @click="navigateTo({name: 'register'})">SIGN UP</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home:hover {
  cursor: pointer;
}
</style>
