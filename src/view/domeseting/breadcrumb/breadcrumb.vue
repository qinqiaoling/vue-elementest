<template>
	<div class="breadcrumb">
		<div class="goback">
			<el-button type="primary" @click="goback()" icon="el-icon-back">返回上一级</el-button>
		</div>
		<div class="carouseldome">
		  	<div class="radio1">面包屑：</div>
			<el-breadcrumb separator-class="el-icon-arrow-right" style="padding: 20px 0;">
				  <el-breadcrumb-item :to="{ path: '/main/domeseting' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item :to="{ path: '/main/domeseting/breadcrumb' }">活动管理</el-breadcrumb-item>
				  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
			</el-breadcrumb>
			<el-breadcrumb separator="/">
			  	<el-breadcrumb-item :to="{ path: '/main/domeseting/breadcrumb' }">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item><a href="/main/domeseting/breadcrumb">活动管理</a></el-breadcrumb-item>
			  	<el-breadcrumb-item>活动列表</el-breadcrumb-item>
			</el-breadcrumb>
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
		},
		watch:{
			
		}
	}
</script>
<style type="text/css" lang="scss" scoped="scoped">
	/deep/.breadcrumb{
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