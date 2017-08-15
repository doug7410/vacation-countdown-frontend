import HomePage from '@/components/HomePage'

describe('HomePage.vue', () => {
  const createComponentInstance = componentHelper(HomePage)

  it('should show the welcome message', () => {
    const vm = createComponentInstance()
    expect($('.greeting h1').text()).to.equal('Make your countdown!')
  })
})
