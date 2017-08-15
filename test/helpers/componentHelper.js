import Vue from 'vue'

let div

beforeEach(() => {
  // create a dom element for the component to mount to
  div = document.createElement('div')
  document.body.appendChild(div)
})

afterEach(() => {
  // clean up the document nodes after each test
  Array.prototype.forEach.call(document.querySelectorAll('body *:not([type="text/javascript"])'), node => {
    node.parentNode.removeChild(node)
  })
})

window.componentHelper = function (component) {
  return () => {
    return new Vue(component).$mount(div)
  }
}

