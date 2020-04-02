<template>
  <v-container class="mt-10">
    <v-card class="elevation-12">
      <v-toolbar flat dense class="primary" dark>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <slot name="action"></slot>
      </v-toolbar>
      <slot>No slot content defined.</slot>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
