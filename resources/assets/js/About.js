import Vue from 'vue';

import App from './components/About.vue';

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
window._Bus={axios:axios, bus: new Vue()};

import Vuetify from 'vuetify';
Vue.use(Vuetify);

window._Vue=new Vue({el:'#app', App, render: h=> h(App)});