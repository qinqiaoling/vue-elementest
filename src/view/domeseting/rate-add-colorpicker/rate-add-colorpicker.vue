<template>
	<div class="rate">
		<div class="goback">
			<el-button type="primary" @click="goback()" icon="el-icon-back">返回上一级</el-button>
		</div>
		<div class="carouseldome">
		  	<div class="radio1">评分：</div>
			<div class="block">
			  	<span class="demonstration">默认不区分颜色</span>
			  	<el-rate v-model="value3"></el-rate>
			</div>
			<div class="block">
			  	<span class="demonstration">区分颜色</span>
			  	<el-rate
			    	v-model="value3"
			    	:colors="['#99A9BF', '#F7BA2A', '#FF9900']">
			  	</el-rate>
			</div>
			<div class="block">
				<span class="demonstration">默认辅助文字</span>
				<el-rate
				  	v-model="value3"
				  	show-text>
				</el-rate>
			</div>
			<div class="block">
				<span class="demonstration">区分辅助文字</span>
				<el-rate
				  	v-model="value3"
				  	:texts="['丑','宁可单身', '一般','漂亮', '娶回家']"
				  	:icon-classes="['el-icon-view', 'el-icon-service', 'el-icon-bell']"
					void-icon-class="el-icon-star-off"
					:colors="['#99A9BF', '#F7BA2A', '#FF9900']"
				  	show-text>
				</el-rate>
			</div>
			<div class="block">
				<span class="demonstration">只读</span>
				<!-- score-template   分数显示模板 -->
				<!-- show-score	是否显示当前分数，show-score 和 show-text 不能同时为真 -->
				<el-rate
				  	v-model="value5"
				  	disabled
				  	show-score
				  	text-color="#ff9900"
				  	score-template="{value}">
				</el-rate>
			</div>
			<div class="block">
			  	<span class="demonstration">预定义颜色</span>
			  	<!-- show-alpha 是否支持透明度 -->
			  	<!-- predefine 预定义颜色 -->
			  	<!-- popper-class color picker 预定义颜色 -->
			  	<el-color-picker
				  	v-model="color5"
				  	show-alpha
				  	size="small"
				  	popper-class="colorpicker"
				  	:predefine="predefineColors">
				</el-color-picker>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'',
		data (){
			return {
				cardimg:'../../../static/images/no_img.jpg',
				value3:null,
				value5:3.7,
				color5: 'rgba(255, 69, 0, 0.68)',
		        predefineColors: [
		          	'#ff4500',
		          	'#ff8c00',
		          	'#ffd700',
		          	'#90ee90',
		          	'#00ced1',
		          	'#1e90ff',
		          	'#c71585',
		          	'rgba(255, 69, 0, 0.68)',
		          	'rgb(255, 120, 0)',
		          	'hsv(51, 100, 98)',
		          	'hsva(120, 40, 94, 0.5)',
		          	'hsl(181, 100%, 37%)',
		          	'hsla(209, 100%, 56%, 0.73)',
		          	'#c7158577'
		        ]
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
	/deep/.rate{
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