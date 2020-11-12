import { createLocalVue } from '@vue/test-utils'
import * as actions from '@/features/student/store/actions'
import initialState from '@/features/student/store/state'
import http from '@/http'
import generateCpf from 'gerar-cpf'
import faker from 'faker'
import sinon from 'sinon'
import Vuex from 'vuex'

let localVue = createLocalVue()
localVue.use(Vuex)

describe('Actions', () => {
  let state
  let student = {}
  beforeEach(() => {
    state = { ...initialState }
    student = {
      academic_register: generateCpf(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      cpf: generateCpf(),
}
  })
  it('get all students', async () => {

    const commit = sinon.spy()
    await actions.ActionGetStudents({ commit, state })
    expect(commit.args).toBeTruthy()
  })

  it('create a new student', async () => {

    const commit = sinon.spy()
    await actions.ActionCreateStudent({ commit }, student)
    expect(commit.args).toBeTruthy()
  })

  it('create a new student and get it', async () => {
    const newStudent = await http.student.createStudent(student)
    
    const commit = sinon.spy()
    await actions.ActionGetStudent({ commit }, newStudent.body.student)
    expect(commit.args).toBeTruthy()
  })

  it('create a new student and delete it', async () => {
    const newStudent = await http.student.createStudent(student)
    const commit = sinon.spy()
    await actions.ActionDeleteStudent({ commit }, newStudent.body.student)
    expect(commit.args).toBeTruthy()
  })

  it('create a new student and edit it', async () => {
    const newStudent = await http.student.createStudent(student)
    
    
    newStudent.body.student.name = 'Carlos de Nobrega'

    const commit = sinon.spy()
    await actions.ActionEditStudent({ commit }, newStudent.body.student)
    expect(commit.args).toBeTruthy()
  })

})