<template>
	<div class="tabs">
		<div class="goback">
			<el-button type="primary" @click="goback()" icon="el-icon-back">返回上一级</el-button>
		</div>
		<div class="carouseldome">
		  	<div class="radio1">标签页：
			    <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
				    <el-radio-button label="top">top</el-radio-button>
				    <el-radio-button label="right">right</el-radio-button>
				    <el-radio-button label="bottom">bottom</el-radio-button>
				    <el-radio-button label="left">left</el-radio-button>
				</el-radio-group>
		  	</div>
		  	<div class="radio1">风格类型:
		  		<el-radio-group v-model="tabType" style="margin-bottom: 30px;">
				    <el-radio-button label="card">card 选项卡样式</el-radio-button>
				    <el-radio-button label="border-card">border-card 卡片化</el-radio-button>
				    <el-radio-button label="">无</el-radio-button>
				</el-radio-group>
		  	</div>
			<el-tabs 
				:tab-position="tabPosition" 
				style="height: 200px;" 
				:type="tabType" 
				v-model="editableTabsValue"
				@edit="handleTabsEdit"
				editable>
				<el-tab-pane
				    v-for="(item, index) in editableTabs"
				    :key="item.name"
				    :label="item.title"
				    :name="item.name">
				    <span slot="label" v-if="index=='1'"><i class="el-icon-date"></i>用户管理</span>
				    {{item.content}}
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'',
		data (){
			return {
				cardimg:'../../../static/images/no_img.jpg',
				tabPosition: 'top',
				tabType:'',
				editableTabsValue:'2',
				editableTabs: [{
		          	title: '用户管理',
		          	name: '1',
		          	content: '用户管理'
		        }, {
		          	title: '配置管理',
		          	name: '2',
		          	content: '配置管理'
		        },{
		          	title: '角色管理',
		          	name: '3',
		          	content: '角色管理'
		        },{
		          	title: '定时任务补偿',
		          	name: '4',
		          	content: '定时任务补偿'
		        }],
		        tabIndex: 2
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
			handleTabsEdit(targetName, action) {
		        if (action === 'add') {
			        let newTabName = ++this.tabIndex + '';
			        this.editableTabs.push({
			            title: 'New Tab',
			            name: newTabName,
			            content: 'New Tab content'
		          	});
		          	this.editableTabsValue = newTabName;
		        }
		        if (action === 'remove') {
		          	let tabs = this.editableTabs;
		          	let activeName = this.editableTabsValue;
		          	if (activeName === targetName) {
		            	tabs.forEach((tab, index) => {
			              	if (tab.name === targetName) {
			                	let nextTab = tabs[index + 1] || tabs[index - 1];
			                	if (nextTab) {
			                  		activeName = nextTab.name;
			                	}
			              	}
		            	});
		          	}
		          	this.editableTabsValue = activeName;
		          	this.editableTabs = tabs.filter(tab => tab.name !== targetName);
		        }
		    },
		},
		watch:{
			
		}
	}
</script>
<style type="text/css" lang="scss" scoped="scoped">
	/deep/.tabs{
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