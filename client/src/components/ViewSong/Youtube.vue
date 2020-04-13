<template>
  <panel title="Music Video">
    <slot>
      <v-container>
        <youtube :video-id="youtubeId" player-width="500" player-height="257"></youtube>
      </v-container>
    </slot>
  </panel>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
