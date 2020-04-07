// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '@/components/globals/Panel'
import GAuth from 'vue-google-oauth2'

Vue.config.productionTip = false
Vue.use(VueYouTubeEmbed)

const gauthOption = {
  clientId: '1008166535731-dhluh4tlm9hm7phul01p5vu3d5v3sc0q.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'consent',
  fetch_basic_profile: false
}
Vue.use(GAuth, gauthOption)

sync(store, router)
/* eslint-disable no-new */

Vue.component('panel', Panel)

new Vue({
  vuetify,
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')
