<template>
  <div>
    <v-layout row>
      <v-flex xs6 sm6 md6>
        <v-text-field
          v-model="resource.name"
          :rules="nameRules"
          label="Nome"
          placeholder="Informe o nome completo"
          required
        ></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs6 sm6 md6>
        <v-text-field
          v-model="resource.email"
          :rules="emailRules"
          label="E-mail"
          placeholder="Informe apenas um e-mail"
          required
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs6 sm6 md6>
        <v-text-field
          v-model="resource.academic_record"
          :rules="academicRecordRules"
          label="Registro Acadêmico"
          :readonly="isEdit"
          placeholder="Informe o registro acadêmico"
          required
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs6 sm6 md6>
        <v-text-field
          v-model="resource.cpf"
          :rules="cpfRules"
          label="CPF"
          :readonly="isEdit"
          placeholder="Informe o número do documento"
          v-mask="'###.###.###-##'"
          required
        ></v-text-field>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  name: 'FormStudent',
  props: {
    resource: {
      type: Object,
      default: () => ({})
    },
    isEdit: {
      type: Boolean,
      default: () => (false)
    }
  },
  data () {
    return {
      nameRules: [
        v => !!v || 'O nome é obrigatório'
      ],
      academicRecordRules: [
        v => !!v || 'O registo acadêmico é obrigatório',
        v => (v && v.length >= 6 && v.length <= 8) || 'O registro acadêmico deve conter entre 6 e 8 dígitos'
      ],
      cpfRules: [
        v => !!v || 'O CPF é obrigatório',
        v => (v && v.length >= 14) || 'O CPF deve conter 11 dígitos'
      ],
      emailRules: [
        v => !!v || 'O e-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'O e-mail deve ser válido'
      ]
    }
  }
}
</script>
