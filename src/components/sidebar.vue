<template>
	<div class="container" style="padding: 0;width: 100%; margin-top: -20px" id="app">
		<div class="row" style="padding: 0;margin: 0">
			<div class="col-md-1 list" style="padding:0; background-color: #eee">
				<div class="list-ul">
					<a href="javascript:;" :class="isModuleActive[0]?'list-group-item active noBR':'list-group-item noBR'" @click="switchModule('chapter-list',0)">
						<i class="glyphicon glyphicon-list">
						</i>
						&nbsp;章节列表
					</a>
					<a href="javascript:;" 
					:class="isModuleActive[1]?'list-group-item active noBR':'list-group-item noBR'" @click="switchModule('chapter-add',1)">
					<i class="glyphicon glyphicon-plus"></i>&nbsp;新增
					</a>
					<a href="javascript:;" :class="isModuleActive[2]?'list-group-item active noBR':'list-group-item noBR'" @click="switchModule('chapter-alter',2)">
						<i class="glyphicon glyphicon-edit"></i>&nbsp;修改
					</a>
					<a href="javascript:;" :class="isModuleActive[3]?'list-group-item active noBR':'list-group-item noBR'" @click="switchModule('chapter-del',3)">
						<i class="glyphicon glyphicon-trash"></i>&nbsp;删除
					</a>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
function getUrlValue(name){
	var reg = new RegExp(""+name+"/([a-zA-z0-9]|[^\u4e00-\u9fa5])*$");
	var r = window.location.href;
	var Kv=r.match(reg);
	var res="";
	if(Kv!=null){
		Kv=Kv[0];
		res=Kv.split('/')[1];//从找出的键值对当中找到值。切割字符串
		//console.log(r);
		return decodeURIComponent(res);
	}else{
		console.log("error!没找到书名");
		return false;
	}
}
function heightSyn(){
	$('.list').css('height',$(window).height()-50);
}


export default{
	data(){
		return {
			isModuleActive:[true,false,false,false],
			moduleName:"chapter-list",
			BookName:"没有指定图书",
		}
	},

	created:function(){
		heightSyn();
	},
	mounted:function(){
		
	},
	updated:function(){
		
	},

	methods:{
		switchModule:function(){
			if(arguments.length==1){
				this.moduleName=arguments[0];
			}else if(arguments.length==2){
				for(var i=0;i<this.isModuleActive.length;i++){
					this.$set(this.isModuleActive,i,false);
				}
				this.$set(this.isModuleActive,arguments[1],true);
				this.moduleName=arguments[0];
			}
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
.container .row .col-md-1 .noBR{ -webkit-border-radius: 0;
	-moz-border-radius: 0;
	border-radius: 0;
	border: none;
}
.list-group-item{border-left: none;border-right: none;}
.list-ul{background-color: #eee}
#cke_1_contents{height: 500px;}
</style>