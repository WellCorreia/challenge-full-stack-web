import { shallowMount, createLocalVue } from '@vue/test-utils'
import StudentList from '@/features/student/StudentList'
import TitleBar from '@/features/components/TitleBar'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(Vuetify)

let localVue = createLocalVue()
localVue.use(Vuex)

describe('StudentList', () => {
  let router = new VueRouter()
  let vuetify = new Vuetify()
  let actions
  let store

  beforeEach(() => {
    actions = {
      ActionGetStudents: jest.fn(),
    }
    router = new VueRouter()
    vuetify = new Vuetify()

    store = new Vuex.Store({
      modules: {
        student: {
          state: { student: {} },
          actions,
          namespaced: true
        }
      }
    })
  })
  
  it('renders the component', () => {
    const wrapper = shallowMount(StudentList, { store, localVue })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders main child components', () => {
    const wrapper = shallowMount(StudentList, { store, localVue })
    const titleBar = wrapper.findComponent(TitleBar)
    expect(titleBar.exists()).toBe(true)
  })

})