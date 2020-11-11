<template>
  <v-app id="inspire">
    <v-navigation-drawer permanent app>
        <v-img
        max-height="150"
        max-width="250"
        src="../../assets/logo-grupoa.png"
      ></v-img>

      <v-divider/>

        <div align="center" class="modulo">
          Módulo Acadêmico
        </div>

      <v-divider/>
      <v-list shaped>
        <v-list-item-group
          v-model="selectedItem"
          color="primary">

          <v-list-item
            v-for="(item, i) in links"
            :key="i">

            <v-list-item-icon>
              <v-icon middle v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content @click="$router.push({ name: 'student', params: {} })">
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'SideBar',
  data: () => ({
    drawer: false,
    selectedItem: 0,
    links: [
      {
        icon: 'mdi-account',
        title: 'Aluno',
        to: '/student'
      }
    ]
  })
}
</script>
<style>

.modulo {
  background-color: #999999;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
}
font-menu {
  font-size: 20px;
}

</style>
