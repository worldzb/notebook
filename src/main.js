/*
* @Author: worldzb
* @Date:   2018-01-18 19:44:27
* @Last Modified by:   yang
* @Last Modified time: 2018-02-07 10:28:59
*/
import Vue from 'vue';
import App from './App.vue';
import {editor} from './components/editor/editor';

import Vuex from 'Vuex';
import store from './store/main.js';


import axios from 'axios';
Vue.prototype.$http = axios;

Vue.use(Vuex);
Vue.use(editor);


new Vue({
	el: '#app',
	store,
	render: h => h(App),
	components: { App }
});

