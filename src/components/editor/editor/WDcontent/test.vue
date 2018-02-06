<template>
	<div id="test">
		{{bb}}
	</div>
</template>

<script>
	import Vue from 'vue';
	import {mapGetters,mapActions} from 'vuex';
	export default{
		data(){
			return {
				aa:0,
			}
		},
		computed:mapGetters({
				bb:'getEditorContent'
			}),

	}
</script>
