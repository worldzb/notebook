<template>
<header id="header">
	<div class="container" style="width: 100%;padding: 0;margin:0;border-radius: none;border: 0">
		<div class="row" style="padding:0;margin: 0">
			<div class="col-md-12" style="padding: 0">	
				<nav class="navbar navbar-default" role="navigation">
					<div class="container-fluid">
                    	<div class="col-md-1">
							<img class="img-circle" src="http://bbs.worldzb.cn/www/lt/Public/images/logo.jpg" alt="" width="50" height="50">
						</div>	
                    	<div class="navbar-header">
                        	<a class="navbar-brand f-20" href="#">
                        		{{appName}}
								&nbsp;<small><small>{{version}}</small></small>
                        	</a>

                        </div>
                        <div>
                        <ul class="nav navbar-nav navbar-right">
							<li><a href="/www/lt/index.php/User/register"><span class="glyphicon glyphicon-user"></span> 注册</a></li>
							<li class="dropdown">
								<a class="dropdown-toggle"  data-toggle="dropdown" href="#">
								    <span class="glyphicon glyphicon-log-in"></span> 登录
								</a>
							</li>
						</ul>
                        </div>
                    </div>
				</nav>
			</div>
		</div>
	</div>
</header>
</template>

<script>
	
	import config from '../config/config.js';
	export default{
		name:"book-header",
		data(){
			return {
				appName:config.appName,
				version:config.version,
			}
		}
	}
</script>
	
<style>
	#header{
		margin-bottom: 0;padding: 0;
	}
</style>