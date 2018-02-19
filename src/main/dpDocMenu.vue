<template>
	<span class="pull-right" v-if="isModuleActive[1].child[index]">
		<span class="angle-down dropdown-toggle more" data-toggle="dropdown">
			<i class="fa fa-angle-down"></i>
		</span>
		<ul class="dropdown-menu createDocItem" role="menu" style='width:150px;'>
			<li>
				<i class="fa fa-file-text-o"></i> &nbsp;
				新建文档
			</li>
			<li>
				<i>m</i> &nbsp;
				Markdown
			</li>
			<li>
				<i class="fa fa-refresh"></i> &nbsp;
				重命名
			</li>
			<li>
				<i class="fa fa-long-arrow-right"></i> &nbsp;
				移动到
			</li>
			<li>
				<i class="fa fa-trash-o"></i> &nbsp;
				删除
			</li>

		</ul>
	</span>
</template>

<script>
	export default{

	}
</script>
