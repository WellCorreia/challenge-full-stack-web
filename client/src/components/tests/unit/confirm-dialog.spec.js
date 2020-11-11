import { shallowMount } from '@vue/test-utils'
import ConfirmDialog from '@/components/ConfirmDialog'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import Vue from 'vue'
Vue.use(Vuetify)

describe('ConfirmDialog', () => {
  const build = () => {
    const router = new VueRouter()
    const vuetify = new Vuetify()

    const wrapper = shallowMount(ConfirmDialog, {router, vuetify})

    return {
      wrapper
    }
  }

  it('renders the component', () => {
    const { wrapper } = build()
    expect(wrapper.html()).toMatchSnapshot()
  })

})