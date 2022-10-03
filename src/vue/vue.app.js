import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import Hello from './main.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue',
    BootstrapVue,
    render: r => r(Hello)
  }
});

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];