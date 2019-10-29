import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'  //для загрузки BOOTSTRAP

//для загрузки BOOTSTRAP
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
