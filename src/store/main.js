/*
* @Author: worldzb
* @Date:   2018-01-19 00:02:23
* @Last Modified by:   worldzb
* @Last Modified time: 2018-02-22 14:51:44
*/

import Vue from 'vue';
import Vuex from 'vuex';
import action from './actions.js'

Vue.use(Vuex);

const state={
	message:'',//全部通知信息
	newDoc:'',//最新文章列表
	bookList:'',//图书列表
	chapterList:'',//章节列表
	editorTitle:'',//文章标题
}

//action
const actions=action;


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
	},
	setMessage(state,arg){
		state.message=arg;
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
	},
	getMessage(){
		return state.message;
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