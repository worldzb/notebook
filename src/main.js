/*
* @Author: worldzb
* @Date:   2018-01-18 19:44:27
* @Last Modified by:   worldzb
* @Last Modified time: 2018-01-20 23:39:53
*/
import Vue from 'vue';
import App from './App.vue';
import store from './store/main.js';
import wdEditor from './components/editor/editor/index.js';
import axios from 'axios';

Vue.use(wdEditor);
Vue.prototype.$http = axios;

new Vue({
	el: '#app',
	store,
	render: h => h(App),
});
