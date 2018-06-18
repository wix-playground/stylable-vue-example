import Vue from 'vue';
import App from './app.vue';

Vue.config.productionTip = false;

const container = document.createElement('div');
container.id = 'app';

document.body.appendChild(container);

new Vue({
  render: h => h(App)
}).$mount('#app');
