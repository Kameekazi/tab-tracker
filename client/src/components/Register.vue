<template>
  <v-content>
    <v-container fluid>
      <v-row align="center" justify="center" no-gutters style="margin-top:50px">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Registration form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="email"
                  label="Email"
                  name="email"
                  type="email"
                  :rules="emailrules"
                />

                <v-text-field
                  v-model="password"
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  :rules="passRules"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <br />
              <v-input :error-messages="error" error disabled></v-input>
              <v-spacer />
              <v-btn @click="register" color="primary">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: '',
      emailrules: [
        value => !!value || 'Required.',
        value => (value || '').length <= 20 || 'Max 20 characters',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      ],
      passRules: [
        value => !!value || 'Required.',
        value => (value || '').length <= 20 || 'Max 20 characters',
        value => (value || '').length >= 8 || 'Min 8 characters'
      ]
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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
