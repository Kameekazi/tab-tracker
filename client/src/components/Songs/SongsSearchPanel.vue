<template>
  <panel title="Searched" style="margin-bottom:-50px">
    <v-container>
      <v-text-field v-model="search" label="Search by song title, artist, genre or album"></v-text-field>
    </v-container>
  </panel>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true, // same as using mounted
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
