/*
* @Author: worldzb
* @Date:   2018-01-19 00:02:23
* @Last Modified by:   yang
* @Last Modified time: 2018-02-07 10:38:41
*/

import Vue from 'vue';
import Vuex from 'vuex';
import {editorStore} from '../components/editor/editor';

//import state from './state.js';


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



const modules={
	editorStore
}

const store=new Vuex.Store({
	modules,
	state,
	actions,
	mutations,
	getters
});



export default store;