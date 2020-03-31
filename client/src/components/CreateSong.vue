<template>
  <v-container class="mt-3">
    <v-layout fluid>
      <v-flex xs4>
        <panel title="Song Metadata">
          <div>
            <v-card-text>
              <v-text-field v-model="song.title" label="Title" :rules="isRequired"></v-text-field>
              <v-text-field v-model="song.artist" label="Artist" :rules="isRequired"></v-text-field>
              <v-text-field v-model="song.genre" label="Genre" :rules="isRequired"></v-text-field>
              <v-text-field v-model="song.album" label="Album" :rules="isRequired"></v-text-field>
              <v-text-field
                v-model="song.albumImageUrl"
                label="Album Image Url"
                :rules="isRequired"
              ></v-text-field>
              <v-text-field v-model="song.youtubeId" label="YouTube ID" :rules="isRequired"></v-text-field>
            </v-card-text>
          </div>
        </panel>
      </v-flex>

      <v-flex xs8>
        <panel title="Song Structure" class="ml-10">
          <div>
            <v-card-text>
              <v-container fluid>
                <v-textarea
                  clearable
                  clear-icon="cancel"
                  v-model="song.tab"
                  label="Tab"
                  :rules="isRequired"
                ></v-textarea>
                <v-textarea
                  clearable
                  clear-icon="cancel"
                  v-model="song.lyrics"
                  label="Lyrics"
                  :rules="isRequired"
                ></v-textarea>
              </v-container>
            </v-card-text>
          </div>
          <v-input
            class="mb-3 ml-2 .error--text"
            :error-messages="error"
            error
            enabled
            style="margin-top:-30px;"
          ></v-input>
          <v-btn class="mb-3" style="margin-top:-8px;" @click="create" color="primary">Create</v-btn>
        </panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Panel from '@/components/Panel'
import SongService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        tab: null,
        lyrics: null
      },
      error: null,
      isRequired: [value => !!value || 'Required.']
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      console.log(areAllFieldsFilledIn)
      if (!areAllFieldsFilledIn) {
        this.error = '*Please Fill in all the required fields.'
        return
      }

      try {
        await SongService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        // this.error(error.response.data.error)
        console.log(error)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
