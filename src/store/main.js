/*
* @Author: worldzb
* @Date:   2018-01-19 00:02:23
* @Last Modified by:   worldzb
* @Last Modified time: 2018-01-22 00:27:01
*/


import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
//import state from './state.js';
Vue.use(Vuex);

let state={
	bookList:'',
}

const actions={
	asynBookList:({commit},arg)=>{
		commit('asynBookList',arg);
	}
}

const mutations ={
	asynBookList(state,arg){
		state.bookList=arg;
	}
}

const getters={
	gBooklist(state){
		return state.bookList;
	},
	
}


const store=new Vuex.Store({
	state,
	actions,
	mutations,
	getters
});







export default store;