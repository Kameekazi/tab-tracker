<template>
  <div class="text-center">
    <v-sheet color="red" elevation-15>Hello, world! I'm a simple v-sheet</v-sheet>
  </div>
  <!-- <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <input v-model="email" type="email" name="email" placeholder="email" />
          <br />
          <input v-model="password" type="password" name="password" placeholder="password" />
          <br />
          <div class="error" v-html="error"></div>
          <br />
          <button @click="register">Register</button>
        </div>
      </div>
    </v-flex>
  </v-layout>-->
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
