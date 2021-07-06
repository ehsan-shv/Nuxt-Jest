import { mount, RouterLinkStub } from '@vue/test-utils'

import Header from '~/components/Header/Header'

describe('Header', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Header, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
