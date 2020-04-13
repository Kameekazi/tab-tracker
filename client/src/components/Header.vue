<template>
  <v-app-bar fixed color="grey lighten-4" flat tile>
    <v-toolbar color="primary" fixed dense dark>
      <v-toolbar-title class="mr-4">
        <router-link tag="span" class="home" :to="{name: 'songs'}">TabTracker</router-link>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn color="primary" depressed dark :to="{name: 'songs'}">Browse</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          color="primary"
          depressed
          dark
          :to="{name: 'login'}"
        >Log In</v-btn>
        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          color="primary"
          depressed
          dark
          :to="{name: 'register'}"
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
    logout () {
      this.$gAuth.signOut()
        .then(() => {
          this.$store.dispatch('setToken', null)
          this.$store.dispatch('setUser', null)
          this.$router.push({
            name: 'songs'
          })
        })
        .catch(error => {
          this.error = error
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
