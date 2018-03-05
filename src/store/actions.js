/*
* @Author: worldzb
* @Date:   2018-02-22 13:14:15
* @Last Modified by:   worldzb
* @Last Modified time: 2018-02-23 20:14:50
*/

/**
 * 封装共有方法
 */
import Vue from 'vue';
import config from '../config/config.js';
import axios from 'axios';


const actions={
	//添加文档
	addDoc({commit,state},bookId){
		let affi='';
		if(bookId==""){
			affi=state.newDoc;
			affi.body.splice(0,0,{
				doc_title:'新建文档',
			});
			commit('setNewDoc',affi);
		}else{
			affi=state.chapterList;
			affi.body.splice(0,0,{
				doc_title:'新建文档',
			});
			commit('setChapterList',affi);
		}
	},
	addBook({commit,state},){
		let bkList=state.bookList;
		bkList.body.splice(0,0,{
			bookName:'世界周边',
			author:'yang',
		});
		axios.get(config.urls.createBook,{
			params:{
				bookName:'世界周边',
				author:'yang'
			}
		}).then((res)=>{

		});
	}
}



export default actions;