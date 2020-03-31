<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <panel title="Login Form">
          <slot>
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
              <v-input :error-messages="error" error></v-input>
              <v-spacer />
              <v-btn @click="login" color="primary">Login</v-btn>
            </v-card-actions>
          </slot>
        </panel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      credentials: {
        email: '',
        password: ''
      },
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
    async login () {
      this.error = null

      const areAllFieldsFilledIn = Object
        .keys(this.credentials)
        .every(key => !!this.credentials[key])
      console.log(areAllFieldsFilledIn)
      if (!areAllFieldsFilledIn) {
        this.error = '*Please Fill in all the required fields.'
        return
      }
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
