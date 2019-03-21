<template>
	<div class="tooltip">
		<div class="goback">
			<el-button type="primary" @click="goback()" icon="el-icon-back">返回上一级</el-button>
		</div>
		<div class="carouseldome">
		  	<div class="radio1">出现位置：
			    <el-radio-group v-model="popoverplacement" @change="radiochange">
			      	<el-radio label="top">top 上</el-radio>
			      	<el-radio label="right">right 右</el-radio>
			      	<el-radio label="bottom">bottom 底</el-radio>
			      	<el-radio label="left">left 左</el-radio>
			    </el-radio-group>
		  	</div>
			<el-tooltip placement="bottom">
			  	<div slot="content">多行信息<br/>第二行信息</div>
			  	<el-button>Top center</el-button>
			</el-tooltip>
			<el-tooltip class="item" effect="dark" content="Top Center 提示文字" :placement="popoverplacement">
		      	<el-button>右边</el-button>
		    </el-tooltip>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'',
		data (){
			return {
				popoverplacement:'right',
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
			radiochange(val){
				this.popoverplacement = val;
				console.log(val,this.popoverplacement);
			},
		},
		watch:{
			popoverplacement(val){
				this.popoverplacement = val;
				console.log(val,this.popoverplacement);
			}
		}
	}
</script>
<style type="text/css" lang="scss" scoped="scoped">
	/deep/.tooltip{
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