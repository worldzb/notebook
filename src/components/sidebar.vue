<template>
	<div :class="siderBarClass">
		<div class="sider-bar-ul">
			<div class="module-title">
				<div>
					<br>
					<i class="fa fa-plus"></i>
					<a href="javascript:;" title="">新建文档</a>
				</div>
			</div>


			<a href="javascript:;" :class="isModuleActive[0].self?'list-group-item active':'list-group-item'" @click="switchModule(0)">
				<i class="fa fa-newspaper-o">
				</i>
				&nbsp;&nbsp;最新文档
			</a>
			<div class="new-doc">
				<a href="javascript:;" class="list-group-item doc-list" title="">
					<i class="fa fa-file-text"></i>&nbsp;
					text-doc
				</a>
				<a href="javascript:;" class="list-group-item doc-list" title="">
					<i class="fa fa-file-text"></i>&nbsp;
					text-doc
				</a>
			</div>


			<a href="javascript:;" 
			:class="isModuleActive[1].self?'list-group-item active':'list-group-item'" @click="switchModule(1)">
			<i class="fa fa-book"></i>&nbsp;&nbsp;我的图书 <i v-show="isload.mybook" class="fa fa-spinner fa-pulse"></i>
			</a>

			<div class="new-doc" v-if=''>
				<a href="javascript:;" 
				:class="isModuleActive[1].child[index]?'list-group-item doc-list active':'list-group-item doc-list'" 
				title="" 
				v-for="(item,index) in bookList" 
				@click='selectBook(index)'>

					<i class="fa fa-book"></i>&nbsp;
					{{item.BookName}}

				</a>
			</div>


			<a href="javascript:;" :class="isModuleActive[2].self?'list-group-item active':'list-group-item'" @click="switchModule(2)">
				<i class="glyphicon glyphicon-edit"></i>&nbsp;&nbsp;修改
			</a>
			<a href="javascript:;" :class="isModuleActive[3].self?'list-group-item active':'list-group-item'" @click="switchModule(3)">
				<i class="glyphicon glyphicon-trash"></i>&nbsp;&nbsp;回收站
			</a>
			
		</div>
	</div>
</template>


<script>
import VueResource from 'vue-resource';
import {mapGetters,mapActions,mapMutations} from 'vuex';
import GlobalFunc from '../lib/globalFunc.js';
Vue.use(VueResource);

export default{
	data(){
		return {
			isload:{
				mybook:false,
			},
			siderBarClass:"col-md-2 sider-bar",
			isModuleActive:[{self:true},{self:false},{self:false},{self:false}],
			switchList:{},
			bookList:'',
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
	computed:mapGetters(['gBooklist']),
	watch:{
		gBooklist:()=>{
			/*let arr=[];
			alert(this.gBooklist);
			for (var i = 0; i < this.gBooklist.length; i++) {
				arr[i]=false;
			}
			this.isModuleActive[1].child=arr;*/
		}
	},
	/**
	 * 方法列表
	 * @type {Object}
	 */
	methods:{
		/*
		...mapActions(['asynBookList']),*/
		...mapMutations(['asynBookList']),
		getMyBook(){
			let that=this;
			this.isload.mybook=true;
			this.$http.get('http://localhost:80/www/lt/index.php/BookApi/getBookList',{
			}).then((res)=>{
				let red=eval(res);
				that.bookList=red.data.list;
				that.isload.mybook=false;
				that.asynBookList(red.data.list);

				let arr=[];
				for(let i=0;i<that.bookList.length;i++){
					arr[i]=false;
				}
				this.isModuleActive[1].child=arr;
			});
		},
		getNewDoc(){

		},
		switchModule:function(index){
			for(let i=0;i<this.isModuleActive.length;i++){
				this.$set(this.isModuleActive,i,{self:false,child:[]});
			}
			this.$set(this.isModuleActive,index,{self:true});
			switch(index){
				case 0:
					this.getNewDoc();
					break;
				case 1:
					this.getMyBook();
				break;
			}
		},
		
		selectBook(index){
			for(let i=0;i<this.isModuleActive.length;i++){
				this.$set(this.isModuleActive,i,{self:false,child:[]});
			}
			for(let i=0;i<this.isModuleActive[1].child.length;i++){
				this.$set(this.isModuleActive[1].child,i,false);
			}
			this.$set(this.isModuleActive[1].child,index,true);//只是child局部更新
			this.$set(this.isModuleActive,1,{self:false,child:this.isModuleActive[1].child});//inmoduleActive 整体更新
			console.log(this.isModuleActive[1].child)
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
	border-bottom: 2px solid #eee;
	text-align: center;
}
.module-title div{
	width: 100%;
	height: 60px;
	font-size: 18px;
	cursor: pointer;
}
.module-title div a:hover{
	color: red;
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
.doc-list{
}
</style>