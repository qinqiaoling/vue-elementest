<template>
	<div class="popover">
		<div class="goback">
			<el-button type="primary" @click="goback()" icon="el-icon-back">返回上一级</el-button>
		</div>
		<div class="carouseldome">
		  	<div class="radio">出现位置：
			    <el-radio-group v-model="popoverplacement">
			      	<el-radio label="top">top 上</el-radio>
			      	<el-radio label="right">right 右</el-radio>
			      	<el-radio label="bottom">bottom 底</el-radio>
			      	<el-radio label="left">left 左</el-radio>
			    </el-radio-group>
		  	</div>
		  	<div class="radio">触发方式：
			    <el-radio-group v-model="popovertrigger">
			      	<el-radio label="hover">hover 才在</el-radio>
			      	<el-radio label="click">click 才在</el-radio>
			      	<el-radio label="focus">focus 才在</el-radio>
			      	<el-radio label="manual">manual 才在</el-radio>
			    </el-radio-group>
		  	</div>
		  	<el-popover
			  	:placement="popoverplacement"
			  	width="400"
			  	title="标题"
			  	:trigger="popovertrigger"
			  	content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
			  	<el-button slot="reference">激活</el-button>
			</el-popover>
			<el-popover
			    ref="popover"
			    placement="bottom"
			    title="标题"
			    width="200"
			    trigger="focus">
			    <el-table :data="gridData">
				    <el-table-column width="150" property="date" label="日期"></el-table-column>
				    <el-table-column width="100" property="name" label="姓名"></el-table-column>
				    <el-table-column width="300" property="address" label="地址"></el-table-column>
			  	</el-table>
			</el-popover>
			<el-button v-popover:popover>focus 激活</el-button>
			<el-popover
			    placement="bottom"
			    title="标题"
			    width="200"
			    trigger="manual"
			    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
			    v-model="visible">
			    <el-button slot="reference" @click="visible = !visible">手动激活</el-button>
			</el-popover>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'',
		data (){
			return {
				popovertrigger:'hover',
				popoverplacement:'top',
				visible: false,
				cardimg:'../../../static/images/no_img.jpg',
				gridData: [{
		          	date: '2016-05-02',
		          	name: '王小虎',
		          	address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          	date: '2016-05-03',
		          	name: '王小虎',
		          	address: '上海市普陀区金沙江路 1518 弄'
		        }]
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
	/deep/.popover{
		.goback{
			text-align: left;
		}
		.carouseldome{
			text-align: left;
			background: #fff;
			padding: 20px;
		}
		.cardimg{
			width: 60px;
			height: 60px;
		}
	}
</style>