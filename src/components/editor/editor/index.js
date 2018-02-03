/*
* @Author: worldzb
* @Date:   2017-12-10 16:03:48
* @Last Modified by:   worldzb
* @Last Modified time: 2018-02-03 22:38:44
*/
import editorCom from './editor.vue'
import Vue from 'vue';
import Vuex from 'vuex';
import store from '../store/main.js';

Vue.use(Vuex);
const editor={
	install:(Vue,options)=>{
		Vue.component("wd-editor",editorCom);
		Vue.$store=()=>{
			return store;
		}
	}
}

if (typeof window !== 'undefined' && window.Vue) { window.Vue.use(editor); }
export default editor;
