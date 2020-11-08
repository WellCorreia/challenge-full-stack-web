<template>
  <v-main>
    <v-container class="py-8 px-6" fluid>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="students"
          :search="search"
          :loading="searchLoading"
        >
          <template v-slot:item.actions="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              small
              @click="deleteItem(item)"
            >
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Student',
  data () {
    return {
      search: null,
      searchLoading: false,
      headers: [
        {
          text: 'Registro Acadêmico',
          align: 'left',
          sortable: false,
          value: 'academic_record'
        },
        {
          text: 'Nome',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        {
          text: 'CPF',
          align: 'left',
          sortable: false,
          value: 'cpf'
        },
        {
          text: 'Ações',
          align: 'center',
          value: 'actions',
          sortable: false
        }
      ]
    }
  },
  computed: {
    ...mapState('student', ['students'])
  },
  created () {
    this.searchLoading = true
    this.ActionGetStudents().then(() => {
      this.searchLoading = false
    })
  },
  methods: {
    ...mapActions('student', ['ActionGetStudents']),

    editItem (item) {
      this.editedIndex = this.students.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.students.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    }
  }
}
</script>
