<template>
	<div class="card">
		<div class="goback">
			<el-button type="primary" @click="goback()" icon="el-icon-back">返回上一级</el-button>
		</div>
		<div class="carouseldome">
		  	<div class="radio">卡片阴影：
			    <el-radio-group v-model="cardshadow">
			      	<el-radio label="hover">hover 才在</el-radio>
			      	<el-radio label="always">always 一直在</el-radio>
			      	<el-radio label="never">never 没有</el-radio>
			    </el-radio-group>
		  	</div>
		  	<el-card :shadow="cardshadow" :body-style="{ padding: '10px' }">
		  		<div slot="header" class="clearfix">
				    <span>卡片名称</span>
				    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
				</div>
		    	<img :src="cardimg" class="cardimg">
			    <div style="padding: 14px;">
			        <span>好吃的汉堡</span>
			        <div class="bottom clearfix">
			          	<time class="time">{{ currentDate }}</time>
			          	<el-button type="text" class="button">操作按钮</el-button>
			        </div>
			    </div>
		    </el-card>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'',
		data (){
			return {
				cardshadow:'hover',
				cardimg:'../../../static/images/no_img.jpg',
				currentDate:new Date()
			}
		},
		mounted(){

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
	/deep/.card{
		.goback{
			text-align: left;
		}
		.carouseldome{
			text-align: left;
			background: #fff;
			padding:20px;
		}
		.cardimg{
			width: 60px;
			height: 60px;
		}
	}
</style>