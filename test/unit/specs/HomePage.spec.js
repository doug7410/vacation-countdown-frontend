import HomePage from '@/components/HomePage'

describe('HomePage.vue', () => {
  const createComponentInstance = componentHelper(HomePage)

  it('should show the welcome message', () => {
    createComponentInstance()
    expect($('.greeting h1').text()).to.equal('Make your countdown!')
  })

  it('should go to the "/new/user_name" page when clicking "create your countdown"', () => {
    const vm = createComponentInstance()
    const spy = sinon.spy(vm.$router, 'push')
    $('.create-countdown').click()

    expect(spy).to.have.been.calledWith('/new/user')
  })
})
