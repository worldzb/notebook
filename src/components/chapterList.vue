<template>
	<div :class="siderBarClass">
		<div class="chapter-list-ul">
			<div class="module-title">
				<br>
				<div id="search">
					<input type="text" placeholder="搜索">
					<i class="fa fa-search"></i>
				</div>
			</div>
			<div class="navig">
				<span class="" @click="openBook(0,true)"><a href="javascript:;" title="">图书列表</a></span>
				<span v-if="isShow.chapterList">
					<span><i class="fa fa-angle-double-right"></i></span>
					<span><a href="javascript:;" title="">章节列表</a></span>
				</span>
				<!-- <span v-if="isShow.chapterList">
					<span><i class="fa fa-angle-double-right"></i></span>
					<span><a href="javascript:;" title="">章节列表</a></span>
				</span> -->
			</div>
			<div v-if="isShow.booklist">
				<a href="javascript:;" class="list-group-item" v-for="(item,index) in gBooklist" @click="openBook(index,false)">
					<i class="fa fa-book" style="color:#f6ce62">
					</i>
					{{item.BookName}}
				</a>
			</div>
			<div v-if="isShow.chapterList">
				<a href="javascript:;" class="list-group-item" v-for="(item,index) in chapterList">
					<i class="fa fa-newspaper-o">
					</i>
					{{item.Title}}
				</a>
			</div>
		</div>
	</div>
</template>


<script>

import {mapState,mapGetters,mapActions} from 'vuex';
import GlobalFunc from '../lib/globalFunc.js';


export default{
	data(){
		return {
			siderBarClass:'col-md-2 chapter-list',
			isModuleActive:[true],
			chapterList:{},
			isShow:{
				booklist:true,
				chapter:false,
			}
		}
	},
	computed:{
		...mapGetters(['gBooklist']),
	},
	watch:{
		gBooklist:(val)=>{
			console.log(val);
		}
	},
	created:function(){
		
	},
	mounted:function(){
		GlobalFunc.heightSyn('.chapter-list-ul','#header');
		console.log();
	},
	updated:function(){
		
	},

	methods:{
		openBook(index,bool){
			this.chapterList=this.gBooklist[index].MainBody;
			this.isShow.booklist=bool;
			this.isShow.chapterList=!bool;
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
	border:1px solid #eee;
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