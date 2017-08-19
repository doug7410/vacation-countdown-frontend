import NewUser from '@/components/NewUser'

describe('NewUser.vue', () => {
  const mount = componentHelper(NewUser)

  it('should show the correct message and the correct input', () => {
    mount()
    expect($('.message').text()).to.contain('What is your name?')
    expect($('input[name=user-name]')).to.be.visible
    expect(document.activeElement.name).to.equal('user-name')
  })

  it('should ask the user for their name and go to vacation name next', done => {
    const vm = mount()
    $('input[name=user-name]').input('John')
    $('.next-question').click()

    vm.$nextTick(() => {
      expect($('.message').text()).not.to.contain('What is your name?')
      expect($('.message').text()).to.contain('Nice to meet you John. Where are you going?')
      expect($('input[name=user-name]')).not.to.be.visible
      expect($('input[name=vacation-name]')).to.be.visible
      expect(document.activeElement.name).to.equal('vacation-name')
      done()
    })
  }).timeout(100)

  it('should ask for the vacation name after user name is entered and then go to vacation date', done => {
    const vm = mount()
    vm.$data.userName = 'John'
    vm.$data.currentQuestion = 2

    vm.$nextTick(() => {
      $('input[name=vacation-name]').input('Iceland')
      $('.next-question').click()

      vm.$nextTick(() => {
        expect($('.message').text()).to.contain('Iceland sounds awesome John! When are you leaving?')
        expect($('input[name=user-name]')).not.to.be.visible
        expect($('input[name=vacation-name]')).not.to.be.visible
        expect($('input[name=vacation-date]')).to.be.visible
        expect(vm.$data.currentQuestion).to.equal(3)
        done()
      })
    })
  }).timeout(100)
})


