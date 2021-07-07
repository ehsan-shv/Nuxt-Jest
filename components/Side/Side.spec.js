import { mount, createLocalVue } from '@vue/test-utils'
import Side from '@/components/Side/Side'
import Vuelidate from 'vuelidate'

const localVue = createLocalVue()

localVue.use(Vuelidate)

describe('Side', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Side, {
      localVue
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
