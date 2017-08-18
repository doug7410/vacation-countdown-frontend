import NewUser from '@/components/NewUser'
import Vue from 'vue'

// (function ($) {
//
// })(jQuery)

describe('NewUser.vue', () => {
  const mount = componentHelper(NewUser)

  it('should show the correct message and the correct input', () => {
    mount()
    expect($('.message').text()).to.contain('What is your name?')
    expect($('input[name=user-name]')).to.be.visible
    expect(document.activeElement.name).to.equal('user-name')
  })

  it('should go to the next question after filling in the user name and clicking next', done => {
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
})

