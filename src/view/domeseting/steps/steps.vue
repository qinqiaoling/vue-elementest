<template>
	<div class="steps">
		<div class="goback">
			<el-button type="primary" @click="goback()" icon="el-icon-back">返回上一级</el-button>
		</div>
		<div class="carouseldome" style="height: 300px;">
		  	<div class="radio1">出现位置：
			    <el-radio-group v-model="stepsdirection" @change="stepsspace">
			      	<el-radio label="vertical">vertical</el-radio>
			      	<el-radio label="horizontal">horizontal</el-radio>
			    </el-radio-group>
		  	</div>
			<el-steps :active="active" :finish-status="finishstatus" align-center :direction="stepsdirection" :space="stepspace">
			  	<el-step title="步骤 1" description="这是一段很长很长很长的描述性文字" :icon="step1"></el-step>
			  	<el-step title="步骤 2" description="这是一段很长很长很长的描述性文字" :icon="step2"></el-step>
			  	<el-step title="步骤 3" description="这是一段很长很长很长的描述性文字" :icon="step3"></el-step>
			</el-steps>
			<el-button style="margin-top: 12px;" @click="next">下一步</el-button>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'',
		data (){
			return {
				stepsdirection:'vertical',
				cardimg:'../../../static/images/no_img.jpg',
				active:0,
				stepspace:'',
				step1:'el-icon-edit',
				step2:'el-icon-upload',
				step3:'el-icon-picture',
				finishstatus:'',
			}
		},
		mounted(){
			this.stepsspace('vertical')
		},
		computed: {
		    
		},
		methods:{
			goback(){
				this.$router.push('/main/domeseting');
			},
			next() {
				this.step1 = '';
				this.step2 = '';
				this.step3 = '';
				this.finishstatus = 'success';
		        if (this.active++ > 2) this.active = 0;
		    },
		    stepsspace(val){
		    	console.log(val)
		    	if(val=='vertical'){
		    		this.stepspace = '40'
		    		this.step1 = '';
					this.step2 = '';
					this.step3 = '';
		    	}else{
		    		this.step1 = 'el-icon-edit';
					this.step2 = 'el-icon-upload';
					this.step3 = 'el-icon-picture';
		    	}
		    },
		},
		watch:{
			
		}
	}
</script>
<style type="text/css" lang="scss" scoped="scoped">
	/deep/.steps{
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