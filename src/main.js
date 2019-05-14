import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import './registerServiceWorker'
import dotted_line from './components/dotted.vue'
import './stylus/main.styl'
import VueScrollReveal from 'vue-scroll-reveal';
import router from './router'

import {store} from './store/store'
Vue.config.productionTip = false

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  reset: false,
  scale: 1,
  //delay: '400',
  distance: '100px',
  //mobile: false
});
Vue.component( 'dotted_line',dotted_line);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
