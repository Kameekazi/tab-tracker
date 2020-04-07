<template>
  <panel title="Song Metadata">
    <router-link
      slot="action"
      :to="{name:'song-edit',
      params(){
        return {
          songId: song.id
          }
          }
      }"
    >
      <v-btn icon v-if="$store.state.isUserLoggedIn">
        <v-icon>edit</v-icon>
      </v-btn>
    </router-link>
    <slot>
      <v-layout>
        <v-flex xs6>
          <v-container>
            <div class="song-title">{{song.title}}</div>
            <div class="song-artist">{{song.artist}}</div>
            <div class="song-genre">{{song.genre}}</div>
          </v-container>
        </v-flex>
        <v-flex xs6>
          <v-container>
            <img :src="song.albumImageUrl" class="mt-1 album-image" />
            <br />
            <div class="song-album">{{song.album}}</div>
          </v-container>
        </v-flex>
      </v-layout>
    </slot>
  </panel>
</template>

<script>
export default {
  props: [
    'song'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-title {
  font-size: 25px;
}
.song-artist {
  font-size: 20px;
}
.song-genre {
  font-size: 18px;
}
.song-album {
  font-size: 15px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
