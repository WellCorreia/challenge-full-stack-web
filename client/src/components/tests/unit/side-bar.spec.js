import { shallowMount } from '@vue/test-utils'
import SideBar from '@/components/base/SideBar'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import Vue from 'vue'
Vue.use(Vuetify)

describe('SideBar', () => {
  const build = () => {
    const router = new VueRouter()
    const vuetify = new Vuetify()

    const wrapper = shallowMount(SideBar, {router, vuetify, stubs: ['router-view']})

    return {
      wrapper
    }
  }

  it('renders the component', () => {
    const { wrapper } = build()
    expect(wrapper.html()).toMatchSnapshot()
  })

})