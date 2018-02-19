/*
* @Author: worldzb
* @Date:   2018-01-18 19:44:27
* @Last Modified by:   worldzb
* @Last Modified time: 2018-02-19 15:55:17
*/

import Vue from 'vue';
//import Vuex from 'vuex';
import App from './App.vue';
import {editor,editorStore} from './components/editor/editor/index.js';
import store from './store/main.js';
import axios from 'axios';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(editor);
store.registerModule('editor',editorStore);	//注册组件store


//Vue.prototype.$http = axios;

new Vue({
	el: '#app',
	store,
	template: '<App/>',
	render: h => h(App),
	components: { App }
});

