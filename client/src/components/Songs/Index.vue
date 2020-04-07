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
import SongSearchPanel from './SongsSearchPanel'
export default {
  components: {
    SongsPanel,
    SongSearchPanel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
