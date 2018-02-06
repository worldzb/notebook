/*
* @Author: worldzb
* @Date:   2018-01-18 19:44:27
* @Last Modified by:   worldzb
* @Last Modified time: 2018-02-07 00:13:35
*/
import Vue from 'vue';
import App from './App.vue';

import Vuex from 'vuex';
import store from './store/main.js';

import {editor} from './components/editor/editor/index.js';

import axios from 'axios';

Vue.prototype.$http = axios;

Vue.use(Vuex);
Vue.use(editor);


new Vue({
	el: '#app',
	store:store,
	render: h => h(App),
	components: { App }
});

