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
            <form-student :resource="resource"/>
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
  </v-main>
</template>

<script type="module">
import { mapActions, mapState } from 'vuex'
import { VueMaskDirective } from 'v-mask'
import { cpf } from 'cpf-cnpj-validator'

// import VueSweetalert2 from 'vue-sweetalert2'

import Vue from 'vue'
import TitleBar from '@/features/components/TitleBar'
import FormStudent from '@/features/components/FormStudent'

Vue.directive('mask', VueMaskDirective)
// Vue.use(VueSweetalert2)

export default {
  name: 'StudentForm',
  components: {
    TitleBar,
    FormStudent
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
    beforeSave () {
      if (!this.$refs.form.validate()) {
        return false
      }
      if (!cpf.isValid(this.resource.cpf)) {
        // Vue.swal.fire('Informe um CPF válido.')
        return false
      }
      return true
    },

    save () {
      if (this.beforeSave()) {
        if (!this.isEdit) {
          this.ActionCreateStudent(this.resource).then(() => {
            if (this.is_created.status === 201) {
              // Vue.swal.fire({
              //   icon: 'success',
              //   title: 'Salvo',
              //   text: 'Salvo com sucesso!'
              // })
            } else if (this.is_created.body.errorType === 'found') {
              // Vue.swal.fire({
              //   icon: 'error',
              //   title: 'Error',
              //   text: 'Dados já registrados para outro aluno!'
              // })
            } else {
              // Vue.swal.fire({
              //   icon: 'error',
              //   title: 'Error',
              //   text: 'Falha ao salvar o aluno!'
              // })
            }
          })
        } else {
          this.ActionEditStudent(this.resource).then(() => {
            if (this.is_edited.status === 200) {
              // Vue.swal.fire({
              //   icon: 'success',
              //   title: 'Salvo',
              //   text: 'Atualizado com sucesso!'
              // })
            } else {
              // Vue.swal.fire({
              //   icon: 'error',
              //   title: 'Error',
              //   text: 'Falha ao salvar o aluno!'
              // })
            }
          })
        }
      }
    }
  }
}
</script>
