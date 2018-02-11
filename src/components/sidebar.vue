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


			<a href="javascript:;" :class="isModuleActive[0].self?'list-group-item active':'list-group-item'" @click="switchModule(0,null)">
				<i class="fa fa-newspaper-o">
				</i>
				&nbsp;&nbsp;最新文档
				<i v-show="isload.newDoc" class="fa fa-spinner fa-pulse"></i>
			</a>

			<!-- 最近文档 -->
			<div class="new-doc">
				<a href="javascript:;" 
					:class="isModuleActive[0].child[index]?'list-group-item doc-list active':'list-group-item doc-list'" 
					title="" 
					v-for="(item,index) in newDocList"
					@click="switchModule(0,index)">
					<i class="fa fa-file-text"></i>&nbsp;
					{{item.doc_title}}
				</a>
			</div>
			
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
				@click='switchModule(1,index)'>

					<i class="fa fa-book"></i>&nbsp;
					{{item.bookName}}
				</a>
			</div>

			

			<a href="javascript:;" :class="isModuleActive[2].self?'list-group-item active':'list-group-item'" @click="switchModule(2,null)">
				<i class="glyphicon glyphicon-edit"></i>&nbsp;&nbsp;修改
			</a>
			<a href="javascript:;" :class="isModuleActive[3].self?'list-group-item active':'list-group-item'" @click="switchModule(3,null)">
				<i class="glyphicon glyphicon-trash"></i>&nbsp;&nbsp;回收站
			</a>
			
		</div>
	</div>
</template>


<script>
import VueResource from 'vue-resource';
import {mapGetters,mapActions,mapMutations} from 'vuex';
import GlobalFunc from '../lib/globalFunc.js';
import config from '../config/config.js'
Vue.use(VueResource);

export default{
	data(){
		return {
			isload:{
				mybook:false,
				newDoc:false,
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
	 */
	methods:{
		/*
		...mapActions(['asynBookList']),*/
		...mapMutations(['asynBookList']),

		//获取最近文档
		getNewDoc(){
			let that=this;
			this.isload.newDoc=true;//加载动画开启
			this.$http.get(config.urls.getNewDoc,{
				params:{

				}
			}).then((res)=>{ 
				let red=eval(res);
				that.newDocList=red.data.body;
				that.asynBookList(red.data.body);
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
				that.asynBookList(red.data.list);

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