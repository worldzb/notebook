<template>
	<div :class="contentClass" id="contentBox">
		<div class="content-ul">
			<div class="module-title">
				<div>
					<div class="docTitle">
						<strong>
							<input type="text" name="" placeholder="请输入标题">
						</strong>
						<span>
							<span class="btn save" style="margin-top:-0px">
								<i class="fa fa-save"></i>&nbsp; 保存
							</span>
							<span class="btn save" style="margin-top:-0px">
								版本
							</span>
							<span class="more">
								<i class="fa fa-play-circle"></i>
								<i class="fa fa-share-alt"></i>
								<i class="fa fa-ellipsis-h"></i>
							</span>
						</span>
					</div>
				</div>
			</div>
			<wd-editor></wd-editor>
		</div>
	</div>
</template>


<script>

import {mapGetters,mapActions} from 'vuex';
import GlobalFunc from '../lib/globalFunc.js';

import Vue from 'vue';

export default{
	data(){
		return {
			contentClass:"col-md-8 content",
			test:''
		}
	},
	created:function(){
		
	},
	mounted:function(){
		//this.test=this.gBooklist
		GlobalFunc.heightSyn('.content-ul','#header');
	},
	updated:function(){
		
	},
	components:{
		
	},
	//computed:mapGetters(['gBooklist']),
	methods:{
		
	}
}
	
</script>


<style>
.col-md-8 .list-group-item{ -webkit-border-radius: 0;
	-moz-border-radius: 0;
	border-radius: 0;
	border: none;
}
.content{padding:0; 
	background-color: #eee;
	overflow-x:hidden;
}
.content-ul{background-color: #ddd;
	overflow-y:auto;
	overflow-x:hidden;
	border-right: 1px solid #eee
}

.docTitle{
	text-align: left;
}
.docTitle input{
	width: 70%;
	height: 99%;
	border: none;
	padding-left: 20px;
	outline: none;
	float: left;
}
.docTitle span span{
	height: 50%;
	margin-top: 20px;
	width: 80px;
	padding-top: 5px;
	display: inline-block;
}
.save{
	background-color: #eee;
}
.save:hover{
	color:white;
	background-color: #337AB7;
}
.more{
	display: inline-block;
	font-size: 16px;
}
.more i{
	opacity: 0.6;
	margin-left: 10px;
}
.more i:hover{
	opacity: 0.9;
	transform: scale(1.3);
}

</style>