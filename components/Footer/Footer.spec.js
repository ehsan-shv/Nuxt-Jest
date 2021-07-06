import { mount } from '@vue/test-utils'

import Footer from '~/components/Footer/Footer'

describe('Footer', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Footer, {
      propsData: { title: 'footer' }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
