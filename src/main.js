/*
* @Author: worldzb
* @Date:   2018-01-18 19:44:27
* @Last Modified by:   worldzb
* @Last Modified time: 2018-01-19 21:56:26
*/
import Vue from 'vue';
import App from './App.vue';
import store from './store/main.js';
import wdEditor from './components/editor/editor/index.js';

Vue.use(wdEditor);

new Vue({
	el: '#app',
	store,
	render: h => h(App),
});
