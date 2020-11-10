import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import SideBar from '@/components/base/SideBar'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import Vue from 'vue'
Vue.use(Vuetify)

describe('App', () => {
  const build = () => {
    const router = new VueRouter()
    const vuetify = new Vuetify()

    const wrapper = shallowMount(App, {router, vuetify})

    return {
      wrapper,
      sideBar: () => wrapper.findComponent(SideBar)
    }
  }

  it('renders the component', () => {
    const { wrapper } = build()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders main child components', () => {
    const { sideBar } = build()
    expect(sideBar().exists()).toBe(true)
  })

})