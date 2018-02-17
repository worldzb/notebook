/*
* @Author: worldzb
* @Date:   2018-01-19 00:02:23
* @Last Modified by:   worldzb
* @Last Modified time: 2018-02-18 01:20:30
*/

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
	bookList:'',

}

const actions={
	
}

const mutations ={
	asynBookList(state,arg){
		state.bookList=arg;
	}
}

const getters={
	gBooklist(state){
		return state.bookList.body;
	}
}

let modules={
	//editorStore
}

const store=new Vuex.Store({
	state,
	actions,
	mutations,
	getters,
	modules
})


export default store;