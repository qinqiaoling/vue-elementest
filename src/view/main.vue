<template>
	<div class="main_wrap">
		<el-container>
			<el-aside width="200px">
				<main-aside></main-aside>
			</el-aside>
			<el-container>
				<el-header>
					<div class="log-out">
						<span @click="loginout()" class="loginout"><i class="el-icon-setting"></i>退出登录</span>
					</div>
				</el-header>
				<el-main>
					<router-view/>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script>
	//./这是相对路径的意思。
	// @/这是webpack设置的路径别名。一般代表src文件夹路径
	import MainAside from './main-aside'
	export default {
		name : "Main",
		data () {
			return {

			}
		},
		components:{
	        MainAside
	    },
	    mounted:function() { 
	    }, 
	    methods:{
	    	loginout(){
	    		this.$confirm('此操作将退出登录, 是否继续?', '提示', {
		          	confirmButtonText: '确定',
		          	cancelButtonText: '取消',
		          	type: 'warning',
		          	center: true
		        }).then(() => {
		          	this.$message({
		            	type: 'success',
		            	message: '退出登录成功!'
		          	});
		          	sessionStorage.clear();
	    			this.$router.push('/login');
		        }).catch(() => {
		          	this.$message({
		            	type: 'info',
		            	message: '已取消退出登录'
		          	});
		        });
	    	}
	    },
	    watch:{

	    }
	}
</script>
<style type="text/css" lang="scss">
	body > .el-container {
		margin-bottom: 40px;
	}
	.main_wrap{
		.el-header, .el-footer {
		    background-color: #B3C0D1;
		    color: #333;
		    text-align: center;
		    line-height: 60px;
		}
		.el-aside {
			background-color: #2f4050;
			color: #333;
			text-align: center;
		}
		.el-main {
			background-color: #E9EEF3;
			color: #333;
			text-align: center;
		}
		.el-container{
			height: 100vh;
		}
		.el-container:nth-child(5) .el-aside,
		.el-container:nth-child(6) .el-aside {
			// line-height: 260px;
		}
	  
		.el-container:nth-child(7) .el-aside {
			// line-height: 320px;
		}
		.log-out{
			text-align: right;
			.loginout{
				cursor: pointer;
			}
		}
	}
</style>