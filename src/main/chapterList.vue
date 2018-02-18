<template>
	<div :class="siderBarClass">
		<div class="chapter-list-ul">

			<!-- 搜索 -->
			<div class="module-title">
				<br>
				<div id="search">
					<input type="text" placeholder="搜索" v-model="searchWord">
					<i class="fa fa-search"></i>
				</div>
			</div>

			<!-- 模块导航 -->
			<div class="navig">
				<span class="">
					<a href="javascript:;" title="">{{navInfo.first}}</a>
				</span>
				<span v-if="isShow.chapter">
					<span><i class="fa fa-angle-double-right"></i></span>
					<span><a href="javascript:;" title="">{{navInfo.sec}}</a></span>
				</span>
			</div>
			

			<!-- 列表显示 -->
			<div v-if="isShow.newDoc">
				<a href="javascript:;" class="list-group-item" v-for="(item,index) in showData">
					<i class="fa fa-book" style="color:#f6ce62">
					</i> &nbsp;
					{{item.doc_title}}
				</a>
			</div>

			<div v-if="isShow.booklist">
				<a href="javascript:;" class="list-group-item" v-for="(item,index) in showData">
					<i class="fa fa-book" style="color:#f6ce62">
					</i> &nbsp;
					{{item.bookName}}
				</a>
			</div>
			
			<div v-if="isShow.chapter">
				<a href="javascript:;" 
				class="list-group-item" 
				v-for="(item,index) in showData"
				@click="loadContent()">
					<i class="fa fa-book" style="color:#f6ce62">
					</i> &nbsp;
					{{item.title}}
				</a>
			</div>
			

		</div>
	</div>
</template>


<script>

import {mapGetters,mapMutations} from 'vuex';
import GlobalFunc from '../lib/globalFunc.js';


export default{
	data(){
		return {
			siderBarClass:'col-md-2 chapter-list', //组件样式
			//导航信息（关键词）
			navInfo:{
				first:'目录',
				sec:'',
				third:'',
			},
			searchWord:'',//搜索词条
			showData:'',//列表显示数据
			//显示开关
			isShow:{
				booklist:false,
				chapter:false,
				newDoc:false,
			},
		}
	},
	computed:{
		...mapGetters(['getBooklist','getChapterList','getNewDoc']),
	},
	watch:{
		getNewDoc:function(val){
			this.closeShow();
			this.navInfo.first="最新文档";
			this.isShow.newDoc=true;
			this.showData=val;
		},
		getBooklist:function(val){
			this.closeShow();
			this.navInfo.first="我的图书";
			this.isShow.booklist=true;
			this.showData=val;
		},
		getChapterList:function(val){
			this.closeShow();
			this.navInfo.sec="章节列表";
			this.isShow.chapter=true;
			this.showData=val;
		},
	},
	created:function(){
		
	},
	mounted:function(){
		GlobalFunc.heightSyn('.chapter-list-ul','#header');
	},
	updated:function(){
		
	},

	methods:{
		...mapMutations(['setEditorContent']),
		closeShow(){
			this.isShow.booklist=false;
			this.isShow.chapter=false;
			this.isShow.newDoc=false;
		},
		loadContent(){
			this.setEditorContent('haha');
		}
	}
}
	
</script>


<style>


	/*
	隐藏滚动条
	 */
	.navig{
		height:30px;
		border-bottom: 2px solid #eee
	}
	.navig span a{
		padding: 5px;
		display:inline-block;
		height: 30px;
		text-decoration: none
	}
	.navig span a:hover{
		background: #337AB7;
		color:white;
	}
	.col-md-2 .list-group-item{ -webkit-border-radius: 0;
		-moz-border-radius: 0;
		border-radius: 0;
		border: none;
	}
	.chapter-list{padding:0; 
		background-color: #eee;
		overflow-x:hidden;
		border-right: 2px solid #eee
	}
	.chapter-list-ul{
		background-color: #fff;
		margin: 0;
		width: 100%;
		padding: 0;
		overflow-y:auto;
		overflow-x:hidden;
	}
	#search{
		margin:0 auto;
		font-size: 13px;
		width: 90%;height: 30px;
		padding-top: 4px;
		padding-left: 20px;
		border:1px solid #eee;
		border-radius: 20px;
	}
	#search:hover{
		border:1px solid #ddd;
	}
	#search input{
		width: 75%;
		float: left;
		border:none;
		border-radius: 5px;
		outline: none;
	}
	#search i{
		padding: 5px;
		border-radius: 20px;
	}
	#search i:hover{
		background-color: #999;
		color: white
	}
</style>