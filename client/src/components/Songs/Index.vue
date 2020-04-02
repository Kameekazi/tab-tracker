<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <song-search-panel />
        <songs-panel />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsService from '@/services/SongsService'
import SongSearchPanel from './SongsSearchPanel'
export default {
  components: {
    SongsPanel,
    SongSearchPanel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    // do a request to the backend for all the songs
    this.songs = (await SongsService.index()).data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
      window.scrollTo(0, 0)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song {
  overflow: hidden;
}
.song-title {
  font-size: 25px;
  margin-left: 40px;
}
.song-artist {
  font-size: 20px;
}
.song.genre {
  font-size: 18px;
}

.album-image {
  width: 100%;
  margin: 0 auto;
}
</style>
