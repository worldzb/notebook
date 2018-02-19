/*
* @Author: worldzb
* @Date:   2018-01-19 00:02:23
* @Last Modified by:   worldzb
* @Last Modified time: 2018-02-19 16:24:19
*/

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
	newDoc:'',//最新文章列表
	bookList:'',//图书列表
	chapterList:'',//章节列表
	editorTitle:'',//文章标题
}

//action
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
	},
	setEditorTitle(state,arg){
		state.editorTitle=arg;
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
	},
	getEditorTitle(state){
		return state.editorTitle;
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