<template>
  <panel title="Songs">
    <!-- <v-btn @click="createSong" icon> -->
    <router-link slot="action" :to="{name:'songs-create'}" style="text-decoration: none">
      <v-btn icon v-if="$store.state.isUserLoggedIn">
        <v-icon>add</v-icon>
      </v-btn>
    </router-link>

    <slot>
      <div class="song" v-for="song in songs" :key="song.id">
        <v-layout>
          <v-flex xs6>
            <v-container>
              <div class="song-title">
                {{ song.title }}
                <v-btn
                  icon
                  @click="navigateTo({
                          name: 'song',
                          params: {
                            songId: song.id
                          }
                        })"
                >
                  <v-icon>slideshow</v-icon>
                </v-btn>
              </div>
              <div class="song-artist">{{song.artist}}</div>
              <div class="song-genre">{{song.genre}}</div>
            </v-container>
          </v-flex>
          <v-flex xs6>
            <v-container>
              <img :src="song.albumImageUrl" class="mt-1 album-image" />
            </v-container>
          </v-flex>
        </v-layout>
      </div>
    </slot>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {

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
  },
  watch: {
    '$route.query.search': {
      immediate: true, // same as using mounted
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
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
