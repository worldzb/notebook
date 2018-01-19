/*
* @Author: worldzb
* @Date:   2018-01-19 00:02:23
* @Last Modified by:   worldzb
* @Last Modified time: 2018-01-19 18:39:19
*/


import Vue from 'vue';
import Vuex from 'vuex';

//import state from './state.js';
Vue.use(Vuex);



let state={
	count:'vuex',
}

const actions={
	incre:({commit},a)=>{
		//alert('actions');
		commit('incre',a);
	}
}

const mutations ={
	incre(state,a){
		state.count=a;
	}
}

const getters={
	download(state){
		return state.count;
	}
}


const store=new Vuex.Store({
	state,
	actions,
	mutations,
	getters
});







export default store;