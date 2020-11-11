import { shallowMount } from '@vue/test-utils'
import InfoDialog from '@/components/InfoDialog'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import Vue from 'vue'
Vue.use(Vuetify)

describe('InfoDialog', () => {
  const build = () => {
    const router = new VueRouter()
    const vuetify = new Vuetify()

    const wrapper = shallowMount(InfoDialog, {router, vuetify})

    return {
      wrapper
    }
  }

  it('renders the component', () => {
    const { wrapper } = build()
    expect(wrapper.html()).toMatchSnapshot()
  })

})