<template>
	<div :class="siderBarClass">
		<div class="sider-bar-ul">

			<div class="module-title">
				<div>
					<br>
					<span class="createDoc dropdown-toggle" data-toggle="dropdown">
						<i class="fa fa-plus"></i>
						&nbsp;
						<span>新建文档</span>
					</span>
					<ul class="dropdown-menu createDocItem" role="menu">
						<li>
							<i class="fa fa-file-text-o"></i> &nbsp;
							新建笔记
						</li>
						<li>
							<i>m</i> &nbsp;
							新建Markdown
						</li>
						<li>
							<i class="fa fa-book"></i> &nbsp;
							新建图书
						</li>
					</ul>
				</div>
			</div>


			<a href="javascript:;" :class="isModuleActive[0].self?'list-group-item active':'list-group-item'" @click="switchModule(0,null)">
				<i class="fa fa-newspaper-o">
				</i>
				&nbsp;&nbsp;最新文档
				<i v-show="isload.newDoc" class="fa fa-spinner fa-pulse"></i>
			</a>

			<!-- 最近文档 下拉列表-->
			<!-- <div class="new-doc">
				<a href="javascript:;" 
					:class="isModuleActive[0].child[index]?'list-group-item doc-list active':'list-group-item doc-list'" 
					title="" 
					v-for="(item,index) in newDocList"
					@click="switchModule(0,index)">
					<i class="fa fa-file-text"></i>&nbsp;
					{{item.doc_title}}
				</a>
			</div> -->
			
			<!-- 我的图书 -->
			<a href="javascript:;" 
			:class="isModuleActive[1].self?'list-group-item active':'list-group-item'" @click="switchModule(1)">
			<i class="fa fa-book"></i>&nbsp;&nbsp;我的图书 <i v-show="isload.mybook" class="fa fa-spinner fa-pulse"></i>
			</a>

			<div class="new-doc" v-if=''>
				<a href="javascript:;" 
				:class="isModuleActive[1].child[index]?'list-group-item doc-list active':'list-group-item doc-list'" 
				title="" 
				v-for="(item,index) in bookList" 
				@click='getBookChapter(index,item.id)'>
					<span>
						<i class="fa fa-book"></i>&nbsp;
						{{item.bookName}}
					</span>
					<!-- <span class="rename">
						<i class="fa fa-book"></i>&nbsp;
						<input type="text" name="" v-model='item.bookName'>
					</span> -->

					<!-- 图书设置 -->
					<span class="pull-right" v-if="isModuleActive[1].child[index]">
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
							<li>
								<i class="fa fa-info"></i> &nbsp;
								详细信息
							</li>
						</ul>
					</span>
				</a>
			</div>

			

			<a href="javascript:;" :class="isModuleActive[2].self?'list-group-item active':'list-group-item'" @click="switchModule(2,null)">
				<i class="fa fa-calendar"></i>&nbsp;&nbsp;日记
			</a>
			<a href="javascript:;" :class="isModuleActive[3].self?'list-group-item active':'list-group-item'" @click="switchModule(3,null)">
				<i class="fa fa-trash"></i>&nbsp;&nbsp;回收站
			</a>
		</div>
	</div>
</template>


<script>

import Vue from 'vue';
import {mapGetters,mapMutations,mapActions} from 'vuex';
import GlobalFunc from '../lib/globalFunc.js';
import config from '../config/config.js';


export default{
	data(){
		return {
			//加载状态
			isload:{
				mybook:false,
				newDoc:false,
			},
			isShow:{

			},
			siderBarClass:"col-md-2 sider-bar",
			isModuleActive:[{self:true},{self:false},{self:false},{self:false}],
			switchList:{},
			bookList:'',
			newDocList:'',
		}
	},
	created:function(){
		
	},
	mounted:function(){
		GlobalFunc.heightSyn('.sider-bar','#header');
	},
	updated:function(){
		
	},
	computed:{
		...mapGetters(['getBooklist','getEditorContent']),
	},
	watch:{
		
	},
	/**
	 * 方法列表
	 */
	methods:{
		//...mapActions(['asynBookList']),
		...mapMutations(['setNewDoc','setBookList','setChapterList']),
		//获取最近文档
		getNewDoc(){
			let that=this;
			this.isload.newDoc=true;//加载动画开启
			//console.log(config.urls.getNewDoc);
			this.$http.get(config.urls.getNewDoc,{
				params:{

				}
			}).then((res)=>{ 
				let red=eval(res);
				that.newDocList=red.data.body;
				that.setNewDoc(red.data);
				let arr=[];
				for(let i=0;i<that.newDocList.length;i++){
					arr[i]=false;
				}
				this.isModuleActive[0].child=arr;
				this.isload.newDoc=false;//加载动画关闭，加载完成
				//console.log(res);
			})
		},

		//获取我的图书
		getMyBook(){
			let that=this;
			this.isload.mybook=true;
			this.$http.get(config.urls.getMyBook,{

			}).then((res)=>{
				let red=eval(res);
				that.bookList=red.data.body;
				that.isload.mybook=false;
				//数据同步到全局
				that.setBookList(red.data);
				
				let arr=[];
				for(let i=0;i<that.bookList.length;i++){
					arr[i]=false;
				}
				this.isModuleActive[1].child=arr;
			});
		},


		//模块切换
		switchModule(indexParent,indexChild){
			for(let i=0;i<this.isModuleActive.length;i++){
				this.$set(this.isModuleActive,i,{self:false,child:[]});
			}
			if(indexChild==null){
				this.$set(this.isModuleActive,indexParent,{self:true,child:[]});
				switch(indexParent){
					case 0:
						this.getNewDoc();
						break;
					case 1:
						this.getMyBook();
						break;
				}
			}else{
				for(let i=0;i<this.isModuleActive[indexParent].child.length;i++){
					this.$set(this.isModuleActive[indexParent].child,i,false);
				}
				this.$set(this.isModuleActive[indexParent].child,indexChild,true);//只是child局部更新
				this.$set(this.isModuleActive,indexParent,{self:false,child:this.isModuleActive[indexParent].child});
			}
			//console.log(this.isModuleActive[indexParent].child)
		},

		//获取图书名称
		getBookName:function(){
			this.BookName=this.getQueryString("BookName");
			//this.BookName=decodeURIComponent(this.BookName);
		},

		//从url中找到对应键 所对应的值
		getQueryString:function(name){
			var reg = new RegExp(""+name+"/([a-zA-z0-9]|[^\u4e00-\u9fa5])*");//查找
			var r = window.location.href;//获取url地址
			var Kv=r.match(reg)[0];
			var res=Kv.split('/')[1];//从找出的键值对当中找到值。切割字符串
			//console.log(r);
			return decodeURIComponent(res);
		},

		//获取对应图书的章节列表
		getBookChapter($index,$id){
			let that=this;
			this.$http.get(config.urls.getChapter,{
				params:{
					id:$id
				}
			}).then((res)=>{
				let red=eval(res);
				that.setChapterList(red.data);
			})
			this.switchModule(1,$index);
		}

	}
}
	
</script>


<style>

	::-webkit-scrollbar{
	  display:none;
	} 
	/*
	隐藏滚动条
	 */
	.module-title{
		height: 60px;
		width: 100%;
		background-color: #fff;
		border-bottom: 2px solid #eee;
		text-align: center;
	}
	.module-title div{
		width: 100%;
		height: 60px;
		font-size: 16px;
		cursor: pointer;
	}
	.module-title div a{
		text-decoration: none
	}
	.createDoc{
		padding: 10px 15px;
		background-color: #eee;
	}
	.createDoc:hover{
		background-color: #337AB7;
		color:#fff;
	}
	.createDocItem{
		margin: 0;
		padding: 0;
		border-radius: 0;
	}
	.createDocItem li{
		color:#000;
		padding: 10px 20px;
		width: 100%;
	}
	.createDocItem li:hover{
		background-color: #337AB7;
		color:#fff;
	}
	.setting{
		width: 150px;
		color:#fff;
		background-color: red;
	}
	.angle-down{
	}


	.rename{
		color:#000;
	}
	.rename input{
		padding: 0;
		margin:0;
		height: 25px;
		width: 60%
	}


	.col-md-2 .list-group-item{ -webkit-border-radius: 0;
		-moz-border-radius: 0;
		border-radius: 0;
		border: none;
		height: 50px;
		line-height: 30px;
	}
	.sider-bar{padding:0; 
		background-color: #fff;
		overflow-x:hidden;
		border-right: 2px solid #eee;
	}
	.sider-bar-ul{background-color: #fff;
		overflow-y:auto;
		overflow-x:hidden;
	}
	.new-doc a{
		padding-left: 40px;
	}
</style>