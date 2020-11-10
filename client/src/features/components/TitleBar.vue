<template>
  <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar dense>

      <v-toolbar-title>{{title}}</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    title: {
      type: String,
      default: () => ('')
    }
  },
  data () {
    return {
      drawer: true
    }
  }
}
</script>
