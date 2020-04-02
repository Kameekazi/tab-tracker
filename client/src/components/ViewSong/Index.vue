<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>
      <v-flex xs6>
        <you-Tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>
    <v-layout style="margin-top:-45px">
      <v-flex xs6>
        <tabs :tabs="song.tab" />
      </v-flex>
      <v-flex xs6>
        <lyrics :lyrics="song.lyrics" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongMetadata from './SongMetadata'
import YouTube from './Youtube'
import Lyrics from './Lyrics'
import Tabs from './Tabs'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tabs
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song {
  overflow: hidden;
}
</style>
