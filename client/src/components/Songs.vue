<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <panel title="Songs">
          <!-- <v-btn @click="createSong" icon> -->
          <router-link slot="action" :to="{name:'songs-create'}">
            <v-btn icon>
              <v-icon>add</v-icon>
            </v-btn>
          </router-link>

          <slot>
            <div
              v-for="song in songs"
              :key="song.id"
            >{{ song.title }} - {{song.artist}} - {{song.album}}</div>
          </slot>
        </panel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    // do a request to the backend for all the songs
    this.songs = (await SongsService.index()).data
  }
  // ,
  // methods: {
  //   createSong () {
  //     this.$router.push({
  //       name: 'songs-create'
  //     })
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
