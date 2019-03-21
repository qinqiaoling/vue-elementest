<template>
	<div class="dropdown">
		<div class="goback">
			<el-button type="primary" @click="goback()" icon="el-icon-back">返回上一级</el-button>
		</div>
		<div class="carouseldome">
		  	<div class="radio1" style="padding-bottom: 20px">下拉菜单：</div>
			<el-dropdown @command="handleCommand">
			  	<!-- <span class="el-dropdown-link">
			    	下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
			  	</span> -->
			  	<el-button type="primary" class="el-dropdown-link">
				    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
				</el-button>
			  	<el-dropdown-menu slot="dropdown">
				    <el-dropdown-item command="a">黄金糕</el-dropdown-item>
				    <el-dropdown-item command="b">狮子头</el-dropdown-item>
				    <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
				    <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
				    <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
			  	</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'',
		data (){
			return {
				cardimg:'../../../static/images/no_img.jpg',
			}
		},
		mounted(){

		},
		computed: {
		    
		},
		methods:{
			goback(){
				this.$router.push('/main/domeseting');
			},
		    handleCommand(command) {
		        this.$message('click on item ' + command);
		    }
		},
		watch:{
			
		}
	}
</script>
<style type="text/css" lang="scss" scoped="scoped">
	/deep/.dropdown{
		.goback{
			text-align: left;
		}
		.carouseldome{
			text-align: left;
			background: #fff;
			padding: 20px;
		}
	}
</style>