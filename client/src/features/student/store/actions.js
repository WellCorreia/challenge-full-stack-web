/*eslint-disable */
import * as types from './mutation-types'
import services from '@/http'

export const ActionGetStudents = ({ commit }) => {
  return services.student.getStudents().then((response) => {
    commit(types.SET_STUDENTS, response.data.student)
  });
}