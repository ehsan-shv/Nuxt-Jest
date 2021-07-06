import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Main from '~/components/Main/Main'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: 'nuxt-jest'
  }
})

describe('Main', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Main, {
      localVue,
      store
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
