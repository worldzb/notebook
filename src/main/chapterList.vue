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
				<span class="" @click="showMyBook()">
					<a href="javascript:;" title="">{{navInfo.first}}</a>
				</span>
				<span v-if="isShow.chapter">
					<span class="booklist">
						<span class="dropdown-toggle" data-toggle="dropdown">
							<a href="javascript:;">
								<i class="fa fa-angle-double-right"></i>
							</a>
						</span>
						<ul class="dropdown-menu createDocItem" role="menu">
							<li v-for="(item,index) in getBooklist">
								{{item.bookName}}
							</li>
						</ul>
					</span>
					<span><a href="javascript:;" title="">{{navInfo.sec}}</a></span>
				</span>
			</div>
			

			<!-- 列表显示 -->
			<div v-if="isShow.newDoc">
				<a href="javascript:;" 
				:class="isActive.showData[index]?'list-group-item active':'list-group-item'"  
				v-for="(item,index) in showData"
				@click="loadContent(item.cotent_id,index)">
					<span>
						<i class="fa fa-book" style="color:#f6ce62">
						</i> &nbsp;
						{{item.doc_title}}
					</span>
					<span class="pull-right" v-if="isActive.showData[index]">
						<span class="angle-down dropdown-toggle more" data-toggle="dropdown">
							<i class="fa fa-angle-down"></i>
						</span>
						<ul class="dropdown-menu createDocItem" role="menu" style='width:150px;'>
							<li>
								<i class="fa fa-file-text-o"></i> &nbsp;
								新建文档
							</li>
							<li>
								<i>m</i> &nbsp;
								Markdown
							</li>
							<li>
								<i class="fa fa-refresh"></i> &nbsp;
								重命名
							</li>
							<li>
								<i class="fa fa-long-arrow-right"></i> &nbsp;
								移动到
							</li>
							<li>
								<i class="fa fa-trash-o"></i> &nbsp;
								删除
							</li>
						</ul>
					</span>
				</a>

			</div>

			<div v-if="isShow.booklist">
				<a href="javascript:;" 
				:class="isActive.showData[index]?'list-group-item active':'list-group-item'" 
				v-for="(item,index) in showData"
				@click='switchModule(index)'>
					<span>
						<i class="fa fa-book" style="color:#f6ce62">
						</i> &nbsp;
						{{item.bookName}}
					</span>
					<span>
						<i></i>
					</span>
				</a>
			</div>
			
			<div v-if="isShow.chapter">
				<a href="javascript:;" 
				:class="isActive.showData[index]?'list-group-item active':'list-group-item'" 
				v-for="(item,index) in showData"
				@click="loadContent(item.cotent_id,index)">
					<span>
						<i class="fa fa-book" style="color:#f6ce62">
						</i> &nbsp;
						{{item.doc_title}}
					</span>
					<span class="pull-right" v-if="isActive.showData[index]">
						<span class="angle-down dropdown-toggle more" data-toggle="dropdown">
							<i class="fa fa-angle-down"></i>
						</span>
						<ul class="dropdown-menu createDocItem" role="menu" style='width:150px;'>
							<li>
								<i class="fa fa-file-text-o"></i> &nbsp;
								新建文档
							</li>
							<li>
								<i>m</i> &nbsp;
								新建Markdown
							</li>
							<li>
								<i class="fa fa-refresh"></i> &nbsp;
								重命名
							</li>
							<li>
								<i class="fa fa-long-arrow-right"></i> &nbsp;
								移动到
							</li>
							<li>
								<i class="fa fa-trash-o"></i> &nbsp;
								删除
							</li>
						</ul>
					</span>	
				</a>
			</div>
		</div>
	</div>
</template>


<script>

import {mapGetters,mapMutations} from 'vuex';
import GlobalFunc from '../lib/globalFunc.js';
import config from '../config/config.js';

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
			//列表切换 activ
			isActive:{
				showData:[],
			}
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
		showData:function(val){
			this.isActive.showData=[];
			for(let i=0;i<val.length;i++){
				this.isActive.showData.push(false);
			}
		}
	},
	created:function(){
		
	},
	mounted:function(){
		GlobalFunc.heightSyn('.chapter-list-ul','#header');
	},
	updated:function(){
		
	},

	methods:{
		...mapMutations(['setEditorContent','setEditorTitle']),
		closeShow(){
			this.isShow.booklist=false;
			this.isShow.chapter=false;
			this.isShow.newDoc=false;
		},
		loadContent($index,$indexItem){
			let that=this;

			this.$http.get(config.urls.getContent,{
				params:{
					id:$index
				}
			}).then(function(res){
				let red=eval(res);
				that.setEditorTitle(red.data.body[0].title);
				that.setEditorContent(red.data.body[0].content);
			});
			this.switchModule($indexItem);
		},
		switchModule($index){
			for(let i=0;i<this.isActive.showData.length;i++){
				this.$set(this.isActive.showData,i,false);
			}
			this.$set(this.isActive.showData,$index,true);
		},
		showMyBook(){
			if(this.navInfo.first=="我的图书"){
				this.closeShow();
				this.isShow.booklist=true;
				this.showData=this.getBooklist;
			}
		}

	}
}
	
</script>


<style scoped>
	::-webkit-scrollbar{
	  display:block;
	} 

	/*
	隐藏滚动条
	 */
	.navig{
		height:30px;
		display: inline-block;
		/* border-bottom: 2px solid #eee */
	}
	.navig span{
		float: left;
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
	.booklist{
		position: relative;
	}
	.booklist ul{
		cursor: pointer;
		max-height: 300px;
		overflow-y: auto;
	}
</style>