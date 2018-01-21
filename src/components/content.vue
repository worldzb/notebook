<template>
	<div :class="contentClass">
		<div class="content-ul">
			<div class="module-title">
				<div>
					
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
</style>