import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import router from './routes'
import MathJax, { initMathJax, renderByMathjax } from 'mathjax-vue'

function onMathJaxReady() {
  const el = document.getElementById('elementId')
  renderByMathjax(el)
}

initMathJax({}, onMathJaxReady)

Vue.use(MathJax)

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
