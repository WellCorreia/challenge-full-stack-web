import { createLocalVue } from '@vue/test-utils'
import * as types from '@/features/student/store/mutation-types'
import mutations from '@/features/student/store/mutations'
import initialState from '@/features/student/store/state'
import Vuex from 'vuex'

let localVue = createLocalVue()
localVue.use(Vuex)

describe('mutation', () => {
  let state

  beforeEach(() => {
    state = { ...initialState }
  })

  it('set a new student', () => {
    const student = {
      academic_record: '123456',
      name: 'Wellington Correia',
      email: 'wellington@gmail.com',
      cpf: '06012547895'
    }

    const store = new Vuex.Store({state, mutations});

    store.commit(types.SET_STUDENT, student)
    expect(state.student).toEqual(student)
  })

  it('set multiples students', () => {
    const students = [
      {
        academic_record: '987415',
        name: 'João Carlos Silva',
        email: 'carlos@gmail.com',
        cpf: '11111111111'
      },
      {
        academic_record: '951357',
        name: 'Juliana Carvalho',
        email: 'juliana@gmail.com',
        cpf: '22222222222'
      }
    ]

    const store = new Vuex.Store({state, mutations});

    store.commit(types.SET_STUDENTS, students)
    expect(state.students).toEqual(students)
  })

  it('set student created', () => {
    const students = [
      {
        id: 1,
        academic_record: '987415',
        name: 'João Carlos Silva',
        email: 'carlos@gmail.com',
        cpf: '33333333333'
      },
    ]

    const store = new Vuex.Store({state, mutations});

    store.commit(types.SET_STUDENT_CREATE, students)
    expect(state.is_created).toEqual(students)
  })

  it('set student edited', () => {
    const students = [
      {
        id: 1,
        academic_record: '987415',
        name: 'João Carlos Silva',
        email: 'carlos@gmail.com',
        cpf: '33333333333'
      },
    ]

    const store = new Vuex.Store({state, mutations});

    store.commit(types.SET_STUDENT_EDIT, students)
    expect(state.is_edited).toEqual(students)
  })

  it('set student deleted', () => {
    const students = [
      {
        academic_record: '987415',
        name: 'João Carlos Silva',
        email: 'carlos@gmail.com',
        cpf: '33333333333'
      },
    ]

    const store = new Vuex.Store({state, mutations});

    store.commit(types.SET_DELETE, students)
    expect(state.is_deleted).toEqual(students)
  })
})