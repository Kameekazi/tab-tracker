<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <panel title="Login Form">
          <slot>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="credentials.email"
                  label="Email"
                  name="email"
                  type="email"
                  :rules="emailrules"
                />

                <v-text-field
                  v-model="credentials.password"
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
              <v-btn icon id="signinButton" @click="googleSignIn">
                <svg
                  data-v-9fcfedee
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 48 48"
                  class="abcRioButtonSvg"
                >
                  <g data-v-9fcfedee>
                    <path
                      data-v-9fcfedee
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    />
                    <path
                      data-v-9fcfedee
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    />
                    <path
                      data-v-9fcfedee
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    />
                    <path
                      data-v-9fcfedee
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    />
                    <path data-v-9fcfedee fill="none" d="M0 0h48v48H0z" />
                  </g>
                </svg>
              </v-btn>
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
          email: this.credentials.email,
          password: this.credentials.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    async googleSignIn () {
      // const response = await AuthenticationService.gauth()
      // console.log('response', response)

      await this.$gAuth.signIn()
        .then(GoogleUser => {
          // On success do something, refer to https://developers.google.com/api-client-library/javascript/reference/referencedocs#googleusergetid
          console.log('user', GoogleUser)

          const basicProfile = GoogleUser.getBasicProfile()
          const authResponse = GoogleUser.getAuthResponse()
          const email = basicProfile.getEmail()
          const token = authResponse.id_token

          this.$store.dispatch('setToken', token)
          this.$store.dispatch('setUser', email)

          this.isSignIn = this.$gAuth.isAuthorized

          this.$router.push({
            name: 'songs'
          })
        })
        .catch(error => {
          console.log('error', error)
        })
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
