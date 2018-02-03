<template>
	<div :class="contentClass">
		<div class="content-ul">
			<div class="module-title">
				<div>
					<div class="docTitle">
						<input type="text" name="" placeholder="请输入标题">
						<span>
							<span class="btn save"><i class="fa fa-save"></i> 保存</span>
							<span class="btn more">
								<i class="fa fa-play-circle"></i>
								<i class="fa fa-play-circle"></i>
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



export default{
	data(){
		return {
			contentClass:"col-md-8 content",
		}
	},
	created:function(){
		
	},
	mounted:function(){
		GlobalFunc.heightSyn('.content-ul','#header');
	},
	updated:function(){
		
	},
	computed:mapGetters(['booklist']),
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
	border-right: 10px solid #eee
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
}
.save{
	background-color: #eee;
}
.save:hover{
	color:white;
	background-color: #337AB7;
}
.more{
	font-size:20px;
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