import * as types from './mutation-types'

export default {
  [types.SET_STUDENTS] (state, payload) {
    state.students = payload
  },
  [types.SET_STUDENT] (state, payload) {
    state.student = payload
  },
  [types.SET_STUDENT_CREATE] (state, payload) {
    state.is_created = payload
  },
  [types.SET_STUDENT_EDIT] (state, payload) {
    state.is_edited = payload
  },
  [types.SET_DELETE] (state, payload) {
    state.is_deleted = payload
  }
}
