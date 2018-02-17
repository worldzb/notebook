<template>
	<div id="editor">
		<WDmenu value="haha"></WDmenu>
		<WDcontent></WDcontent>
	</div>
</template>
<script type="text/javascript">
	import WDmenu from "./WDmenu/WDmenu.vue";
	import WDcontent from './WDcontent/WDcontent.vue';
	export default{
		mounted(){
			//console.log(this.$store);
		},
		components:{
			WDmenu:WDmenu,
			WDcontent:WDcontent,
		}
	}

</script>