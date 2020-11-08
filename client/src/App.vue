<template>
  <v-app>
    <side-bar>
      <router-view/>
    </side-bar>
  </v-app>
</template>

<script>
import SideBar from './components/base/SideBar.vue'
export default {
  name: 'App',

  components: {
    SideBar
  },

  data: () => ({
    //
  })
}
</script>
