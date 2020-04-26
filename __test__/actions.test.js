import { shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import Action from '@/Actions.vue'

describe('Actions.vue', () => {
  const localVue = createLocalVue()
  const wrapper = shallowMount(Action, { store, localVue })

  it('for test', () => {
    expect(1).toBe(1)
  })
})