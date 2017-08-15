import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

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
    component.router = new VueRouter({})
    return new Vue(component).$mount(div)
  }
}

