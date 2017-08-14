import Vue from 'vue'
import HomePage from '@/components/HomePage'

describe('HomePage.vue', () => {
  it('should show the welcome message', () => {
    const Constructor = Vue.extend(HomePage)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.greeting h1').textContent)
      .to.equal('Make your countdown!')
  })
})
