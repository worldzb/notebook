<template>
	<div id="content">
		<div>
			<div class="mainBody" id="mb" contenteditable="true" :style="sty" v-html="content">
				
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">

	import GetCon from './getContent.js';
	import {mapGetters,mapMutations} from 'vuex';

	export default{
		data(){
			return{
				color:'',
			}
		},
		props:{
			width:{
				type:String,
				default:"100%"
			},
			height:{
				type:String,
				default:"200px"
			}
		},
		computed:{
			//body 样式计算
			...mapGetters(['getClearUpDoc','getEditorContent']),
			sty(){
				const fixedWidth = '100%';
				const fixedHeight = ($(window).height()-90)+'px';
				return {
					width:fixedWidth,
					height:fixedHeight,
				}
			},
			//内容
			content(){
				//console.log(this.$store);
				return this.getEditorContent;
			}
		},
		watch:{
			//监视 清理文档开关
			/*getClearUpDoc(val){
				if(val){
					let getContent=new GetCon({
						el:'#'
					});
					getContent.getCode();
				}
				this.setClearUpDoc(false);
			}*/
		},
		methods:{
			
			
		}
	}
</script>

<style type="text/css" scoped>
	::-webkit-scrollbar{
	  display:block;
	} 

	.mainBody{
		width: 100%;
		min-height: 400px;
		outline: none;
		background-color: #fff;
		border: 1px solid #fff;
		font-size: 14px;
		overflow-y: auto;
		padding-left: 20px;
		padding-right: 20px;
		display: inline-block;
	}
	.mainBody>pre{
		width: 100%;
		display: inline-block;
	}
	.btn-default{
		color:#88a;
	}
	
</style>