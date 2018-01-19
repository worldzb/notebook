<template>
	<div :class="siderBarClass">
		<div class="chapter-list-ul">
			<div class="module-title">
				<div>
					
				</div>
			</div>
			<a href="javascript:;" :class="isModuleActive[0]?'list-group-item active':'list-group-item'">
				<i class="fa fa-newspaper-o">
				</i>
				&nbsp;{{download}}
			</a>
		</div>
	</div>
</template>


<script>

import {mapGetters,mapActions} from 'vuex';
import GlobalFunc from '../lib/globalFunc.js';


export default{
	data(){
		return {
			siderBarClass:'col-md-2 chapter-list',
			isModuleActive:[true]
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
	computed:mapGetters(['download']),
	methods:{
		
	}
}
	
</script>


<style>


/*
隐藏滚动条
 */

.col-md-2 .list-group-item{ -webkit-border-radius: 0;
	-moz-border-radius: 0;
	border-radius: 0;
	border: none;
}
.chapter-list{padding:0; 
	background-color: #eee;
	overflow-x:hidden;
	
}
.chapter-list-ul{
	background-color: #eee;
	margin: 0;
	width: 100%;
	padding: 0;
	overflow-y:auto;
	overflow-x:hidden;
	border-right: 2px solid #eee

}
</style>