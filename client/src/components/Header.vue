<template>
  <v-app-bar fixed color="grey lighten-4" flat tile>
    <v-toolbar color="primary" fixed dense dark>
      <v-toolbar-title class="mr-4">
        <span class="home" @click="navigateTo({name: 'root'})">TabTracker</span>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn color="primary" depressed dark @click="navigateTo({name: 'songs'})">Browse</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          color="primary"
          depressed
          dark
          @click="navigateTo({name: 'login'})"
        >Log In</v-btn>
        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          color="primary"
          depressed
          dark
          @click="navigateTo({name: 'register'})"
        >Sign Up</v-btn>
        <v-btn
          v-if="$store.state.isUserLoggedIn"
          color="primary"
          depressed
          dark
          @click="logout"
        >Log Out</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
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
