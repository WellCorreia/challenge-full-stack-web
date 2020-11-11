<template>
  <v-main>
    <title-bar :title="title"/>
    <v-container class="py-8 px-6" >
      <v-card class="py-8 px-6">
        <v-form
          @submit.prevent="save()"
          ref="form"
          v-model="valid"
          lazy-validation
          >
            <form-student :resource="resource" :isEdit="isEdit"/>
            <v-layout offset-md-7>
              <v-flex col-md-6 >
                <v-btn
                  block
                  class="mr-4"
                  color="red"
                  :to="{ name: 'student'}"
                >
                  Cancelar
                </v-btn>
              </v-flex>

              <v-flex col-md-6 >
                <v-btn
                  block
                  class="mr-4"
                  color="green"
                  type="submit"
                >
                  Salvar
                </v-btn>
              </v-flex>

            </v-layout>
          </v-form>
      </v-card>
    </v-container>
    <info-dialog ref="info"/>
  </v-main>
</template>

<script type="module">

import InfoDialog from '@/components/InfoDialog'
import { mapActions, mapState } from 'vuex'
import { VueMaskDirective } from 'v-mask'
import { cpf } from 'cpf-cnpj-validator'

import Vue from 'vue'
import TitleBar from '@/features/components/TitleBar'
import FormStudent from '@/features/components/FormStudent'

Vue.directive('mask', VueMaskDirective)

export default {
  name: 'StudentForm',
  components: {
    TitleBar,
    FormStudent,
    InfoDialog
  },
  data () {
    return {
      title: 'Cadastro de aluno',
      search: null,
      searchLoading: false,
      valid: true,
      isEdit: false,
      resource: {}
    }
  },
  computed: {
    ...mapState('student', [
      'student',
      'is_created',
      'is_edited'
    ])
  },
  async created () {
    const id = await this.$route.params.id
    if (this.$route.params.id !== 'new') {
      this.isEdit = true
      this.ActionGetStudent({ id }).then(() => {
        this.resource = this.student
      })
    }
  },
  methods: {
    ...mapActions('student', [
      'ActionCreateStudent',
      'ActionGetStudent',
      'ActionEditStudent'
    ]),

    /**
     * Método responsável por validar o formulário antes de salvar.
     */
    async beforeSave () {
      if (!this.$refs.form.validate()) {
        return false
      } else if (!cpf.isValid(this.resource.cpf)) {
        await this.$refs.info.open('Falha', 'Informe um CPF válido.', null)
        return false
      } else {
        return true
      }
    },
    /**
     * Método responsável por fazer a requisição de persistencia dos dados.
     */
    async save () {
      const isValid = await this.beforeSave()
      if (isValid) {
        if (!this.isEdit) {
          this.ActionCreateStudent(this.resource).then(async () => {
            if (this.is_created.status === 201) {
              await this.$refs.info.open('Salvo', 'Salvo com sucesso!', null)
            } else if (this.is_created.body.errorType === 'found') {
              await this.$refs.info.open('Erro', 'Dados já registrados para outro aluno!', null)
            } else {
              await this.$refs.info.open('Salvo', 'Falha ao salvar o aluno!', null)
            }
          })
        } else {
          this.ActionEditStudent(this.resource).then(async () => {
            if (this.is_edited.status === 200) {
              await this.$refs.info.open('Salvo', 'Atualizado com sucesso!', null)
            } else {
              await this.$refs.info.open('Salvo', 'Falha ao atualizar o aluno!', null)
            }
          })
        }
      }
    }
  }
}
</script>
