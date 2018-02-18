/*
* @Author: worldzb
* @Date:   2018-01-19 00:02:23
* @Last Modified by:   worldzb
* @Last Modified time: 2018-02-18 21:06:08
*/

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
	newDoc:'',
	bookList:'',
	chapterList:'',
}

const actions={
	
}


//set
const mutations ={
	setBookList(state,arg){
		state.bookList=arg;
	},
	setNewDoc(state,arg){
		state.newDoc=arg;
	},
	setChapterList(state,arg){
		state.chapterList=arg;
	}
}

//get
const getters={
	getBooklist(state){
		return state.bookList.body;
	},
	getNewDoc(state){
		return state.newDoc.body;
	},
	getChapterList(state){
		return state.chapterList.body;
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