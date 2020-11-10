<template>
  <v-main>
    <title-bar title="Consulta de alunos"/>
    <v-container class="py-8 px-6" fluid>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Digite sua busca"
            single-line
            hide-details
          ></v-text-field>

          <v-btn
            class="ma-2"
            :loading="searchLoading"
            :disabled="searchLoading"
            color="secondary"
            :to="{ name: 'student-form', params: { id: 'new' }}"
            >
            CADASTRAR ALUNO
          </v-btn>
        </v-card-title>

        <v-data-table
          :headers="headers"
          :items="students"
          :search="search"
          :loading="searchLoading"
          sortBy="name"
        >

          <template v-slot:item.actions="{ item }">
            <v-icon
              middle
              class="mr-2"
              @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              middle
              @click="deleteItem(item)"
            >
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
    <confirm-dialog ref="confirm"/>
    <info-dialog ref="info"/>
  </v-main>
</template>

<script>

// import Vue from 'vue'
import TitleBar from '@/features/components/TitleBar'
import ConfirmDialog from '@/components/ConfirmDialog'
import InfoDialog from '@/components/InfoDialog'
import { mapActions, mapState } from 'vuex'
// import VueSweetalert2 from 'vue-sweetalert2'

// Vue.use(VueSweetalert2)

export default {
  name: 'StudentList',
  components: {
    TitleBar,
    ConfirmDialog,
    InfoDialog
  },
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
    ...mapState('student', ['students']),
    ...mapState('student', ['is_deleted'])
  },
  created () {
    this.ActionGetStudents()
  },
  methods: {
    ...mapActions('student', ['ActionGetStudents']),
    ...mapActions('student', ['ActionDeleteStudent']),

    editItem (item) {
      this.$router.push({ name: 'student-form', params: { id: item.id } })
    },

    async deleteItem (item) {
      await this.$refs.confirm.open(
        'Deletar',
        'Deseja deletar o registro deste aluno?',
        null,
        null,
        'Excluir'
      ).then((response) => {
        if (response) {
          this.ActionDeleteStudent({ id: item.id }).then(async () => {
            if (this.is_deleted.code === undefined) {
              await this.$refs.info.open(
                'Excluido',
                'Registro removido com sucesso!',
                null
              )
              window.history.go()
            }
          })
        }
      })
    }
  }
}
</script>
