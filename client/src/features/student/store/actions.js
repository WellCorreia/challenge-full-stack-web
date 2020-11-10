import * as types from './mutation-types'
import services from '@/http'

/**
 * Método responsável por fazer a requisição para retornar todos os alunos.
 * @param {*} commit
 */
export const ActionGetStudents = ({ commit }) => {
  return services.student.getStudents().then((response) => {
    commit(types.SET_STUDENTS, response.data.student)
  }).catch((e) => {
    commit(types.SET_STUDENTS, e)
  })
}

/**
 * Método responsável por fazer a requisição para deletar um aluno.
 * @param {*} commit
 * @param {*} payload
 */
export const ActionDeleteStudent = ({ commit }, payload) => {
  return services.student.deleteStudent({ id: payload.id }).then((response) => {
    commit(types.SET_DELETE, response.data)
  }).catch((e) => {
    commit(types.SET_DELETE, e)
  })
}

/**
 * Método responsável por fazer a requisição para retornar um student
 * @param {*} commit
 * @param {*} payload
 */
export const ActionGetStudent = ({ commit }, payload) => {
  return services.student.getStudent({ id: payload.id }).then((response) => {
    commit(types.SET_STUDENT, response.data.student)
  }).catch((e) => {
    commit(types.SET_STUDENT, e)
  })
}

/**
 * Método responsável por fazer a requisição para editar um aluno.
 * @param {*} commit
 * @param {*} payload
 */
export const ActionEditStudent = ({ commit }, payload) => {
  return services.student.editStudent({ id: payload.id }, payload).then((response) => {
    commit(types.SET_STUDENT_EDIT, response.data)
  }).catch((e) => {
    commit(types.SET_STUDENT_EDIT, e)
  })
}

/**
 * Método responsável por fazer a requisição para cadastro do aluno.
 * @param {*} commit
 * @param {*} payload
 */
export const ActionCreateStudent = ({ commit }, payload) => {
  return services.student.createStudent(payload).then((response) => {
    commit(types.SET_STUDENT_CREATE, response.data)
  }).catch((e) => {
    commit(types.SET_STUDENT_CREATE, e)
  })
}
