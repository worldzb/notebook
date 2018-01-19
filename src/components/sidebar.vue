<template>
	<div :class="siderBarClass">
		<div class="sider-bar-ul">
			<div class="module-title">
				<div>
					<br>
					<i class="fa fa-plus"></i>
					新建文档
				</div>
			</div>
			<a href="javascript:;" :class="isModuleActive[0]?'list-group-item active':'list-group-item'" @click="switchModule(0)">
				<i class="fa fa-newspaper-o">
				</i>
				&nbsp;最新文档
			</a>
			<div class="new-doc">
				<a href="javascript:;" class="list-group-item doc-list" title="">
					<i class="fa fa-file-text"></i>&nbsp;
					text-doc
				</a>
			</div>
			<a href="javascript:;" 
			:class="isModuleActive[1]?'list-group-item active':'list-group-item'" @click="switchModule(1)">
			<i class="glyphicon glyphicon-plus"></i>&nbsp;我的图书
			</a>
			<a href="javascript:;" :class="isModuleActive[2]?'list-group-item active':'list-group-item'" @click="switchModule(2)">
				<i class="glyphicon glyphicon-edit"></i>&nbsp;修改
			</a>
			<a href="javascript:;" :class="isModuleActive[3]?'list-group-item active':'list-group-item'" @click="switchModule(3)">
				<i class="glyphicon glyphicon-trash"></i>&nbsp;回收站
			</a>
			

			<br><br><br><br><br><br><br><br><br><br><br><br><br><br>
			<br><br><br><br><br><br><br><br><br><br><br><br><br><br>
			<br><br><br><br><br><br><br><br><br><br><br><br><br><br>
			<br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		</div>
	</div>
</template>


<script>

import {mapActions} from 'vuex';
import GlobalFunc from '../lib/globalFunc.js';


export default{
	data(){
		return {
			siderBarClass:"col-md-2 sider-bar",
			isModuleActive:[true,false,false,false],
			moduleName:"chapter-list",
			BookName:"没有指定图书",
		}
	},
	created:function(){
		
	},
	mounted:function(){
		GlobalFunc.heightSyn('.sider-bar','#header');
		console.log();
	},
	updated:function(){
		
	},
	methods:{
		...mapActions(['incre']),
		switchModule:function(index){
			for(var i=0;i<this.isModuleActive.length;i++){
					this.$set(this.isModuleActive,i,false);
				}
			this.$set(this.isModuleActive,index,true);
			this.incre(index);
		},
		getBookName:function(){
			this.BookName=this.getQueryString("BookName");
			//this.BookName=decodeURIComponent(this.BookName);
		},
		getQueryString:function(name){
			var reg = new RegExp(""+name+"/([a-zA-z0-9]|[^\u4e00-\u9fa5])*");
			var r = window.location.href;
			var Kv=r.match(reg)[0];
			var res=Kv.split('/')[1];//从找出的键值对当中找到值。切割字符串
			//console.log(r);
			return decodeURIComponent(res);
		},
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
	border-bottom: 2px solid #ccc;
	text-align: center;
}
.module-title div{
	width: 100%;
	height: 60px;
	font-size: 18px;
	cursor: pointer;
}
.module-title div:hover{
	background:#ddd ;
}


.col-md-2 .list-group-item{ -webkit-border-radius: 0;
	-moz-border-radius: 0;
	border-radius: 0;
	border: none;
	height: 50px;
	line-height: 30px
}
.sider-bar{padding:0; 
	background-color: #eee;
	overflow-x:hidden;
}
.sider-bar-ul{background-color: #ddd;
	overflow-y:auto;
	overflow-x:hidden;
}

.new-doc a{
	padding-left: 30px
}
.doc-list{
	height: 30px;
	background: #eee;
}
</style>