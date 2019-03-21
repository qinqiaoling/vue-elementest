<template>
	<div class="timeline">
		<div class="goback">
			<el-button type="primary" @click="goback()" icon="el-icon-back">返回上一级</el-button>
		</div>
		<div class="timelinedome">
			<div class="radio">排序：
			    <el-radio-group v-model="reverse">
			      	<el-radio :label="true">倒序</el-radio>
			      	<el-radio :label="false">正序</el-radio>
			    </el-radio-group>
		  	</div>
		  	<el-timeline :reverse="reverse">
		    	<el-timeline-item
			      	v-for="(activity, index) in activities"
			      	:key="index"
			      	:icon="activity.icon"
					:type="activity.type"
					:color="activity.color"
					:size="activity.size"
					placement="top"
			      	:timestamp="activity.timestamp">
			      	{{activity.content}}
			      	<el-card>
				        <h4>更新 Github 模板</h4>
				        <p>王小虎 提交于 2018/4/12 20:46</p>
				    </el-card>
		    	</el-timeline-item>
		  	</el-timeline>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'Timeline',
		data (){
			return {
				reverse: true,
		        activities: [{
		          content: '活动按期开始',
		          timestamp: '2018-04-15',
		          content: '支持使用图标',
		          size: 'large',
		          type: 'primary',
		          icon: 'el-icon-more'
		        }, {
		          content: '支持自定义颜色',
		          color: '#0bbd87',
		          timestamp: '2018-04-13'
		        }, {
		          content: '支持自定义尺寸',
		          timestamp: '2018-04-03 20:46',
		          size: 'large',
		          color: '#f00',
		        }, {
		          content: '创建成功',
		          timestamp: '2018-04-11',
		          color: '#2d05dc',
		        }]
			}
		},
		mounted(){

		},
		methods:{
			goback(){
				this.$router.push('/main/domeseting');
			}
		},
		watch:{

		}
	}
</script>
<style type="text/css" lang="scss" scoped="scoped">
	/deep/.timeline{
		.goback{
			text-align: left;
		}
		.timelinedome{
			text-align: left;
			background:#fff;
			padding: 10px;
			.radio{
				margin-bottom: 20px;
			}
		}
	}
</style>