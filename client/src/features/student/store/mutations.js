import * as types from './mutation-types'

export default {
  [types.SET_STUDENTS] (state, payload) {
    state.students = payload
  }
}
