import { shallowMount } from '@vue/test-utils'
import StudentForm from '@/features/student/StudentForm'
import TitleBar from '@/features/components/TitleBar'
import FormStudent from '@/features/components/FormStudent'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import Vue from 'vue'
Vue.use(Vuetify)

describe('StudentForm', () => {
  const build = () => {

    const router = new VueRouter()
    const vuetify = new Vuetify()
    
    const wrapper = shallowMount(StudentForm, {
      router,
      vuetify,
      mocks: {
        $route: {
          params: { id: 'new' }
        }
      }
    })

    return {
      wrapper,
      titleBar: () => wrapper.findComponent(TitleBar),
      formStudent: () => wrapper.findComponent(FormStudent)
    }
  }

  it('renders the component', () => {
    const { wrapper } = build()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders main child components', () => {
    const { titleBar, formStudent } = build()
    expect(titleBar().exists()).toBe(true)
    expect(formStudent().exists()).toBe(true)
  })

  it('passes a binded student prop to title bar component', () => {
    const { wrapper, titleBar } = build()
    wrapper.setData({
      title: 'Cadastro de aluno'
    })
    expect(wrapper.vm.title).toBe(wrapper.vm.title)
  })

  it('passes a binded student prop to student form component', () => {
    const { wrapper, formStudent } = build()
    wrapper.setData({
      resource: {
        academic_record: '123456',
        name: 'Wellington Correia',
        email: 'wellington@gmail.com',
        cpf: '06012547895'
      }
    })
    expect(formStudent().vm.resource).toBe(wrapper.vm.resource)
  })

})