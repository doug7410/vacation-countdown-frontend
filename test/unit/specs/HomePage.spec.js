import HomePage from '@/components/HomePage'

describe('HomePage.vue', () => {
  const createComponentInstance = componentHelper(HomePage)

  it('should show the welcome message', () => {
    const vm = createComponentInstance()
    expect(vm.$el.querySelector('.greeting h1').textContent)
      .to.equal('Make your countdown!')
  })
})
