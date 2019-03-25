<template>
	<div class="domeseting_w">
		<div class="key_filter">
			<el-input
			  	placeholder="输入关键数字进行过滤"
			  	prefix-icon="el-icon-search"
			  	v-model.number="filterText">
			</el-input>
		</div>
		<div class="tree_node">
			<el-tree
			  	class="filter-tree"
			  	:data="data2"
			  	:props="defaultProps"
			  	node-key="id"
			  	accordion
			  	:filter-node-method="filterNode"
			  	ref="filterTree">
			  	<!-- 以下自定义树节点 -->
			  	<span class="custom-tree-node" slot-scope="{ node, data }">
			  		<!-- 树节点三角形后面加图标 -->
			  		<i :class="data.className" class="custom_icon_path">
			  			<img :src="'../../../static/images/'+data.className+'.png'">
			  		</i>
			  		<!-- 树节点label的值 -->
			        <span>{{ node.label }}</span>
			        <!-- 树节点增加操作 -->
			        <span>
			          	<el-button
				            type="text"
				            class="next_return"
				            @click="() => next(node,data)">
				            点击进入子集
			          	</el-button>
			          	<i class="reversal"></i>
			        </span>
			    </span>
			</el-tree>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'DomeSeting',
		data () {
			return {
				filterText: '',
		        data2: [
			        {
			          	id: 1,
			          	label: 'Timeline 时间线 1',
			            className:'NO1',
			            nextpath:'/main/domeseting/timeline',
			        }, 
			        {
			          	id: 2,
			          	label: 'collapse 折叠板 2',
			          	className:'NO1',
			          	nextpath:'/main/domeseting/collapse',
			        }, 
			        {
			          	id: 3,
			          	label: 'carousel 走马灯 3',
			          	className:'NO1',
			          	nextpath:'/main/domeseting/carousel',
			        }, 
			        {
			          	id: 4,
			          	label: 'card 卡片 4',
			          	className:'NO1',
			          	nextpath:'/main/domeseting/card',
			        }, 
			        {
			          	id: 5,
			          	label: 'popover 弹出框 5',
			          	className:'NO1',
			          	nextpath:'/main/domeseting/popover',
			        }, 
			        {
			          	id: 6,
			          	label: 'tooltip 文字提示 6',
			          	className:'NO1',
			          	nextpath:'/main/domeseting/tooltip',
			        },
			        {
			          	id: 7,
			          	label: 'steps 步骤条 7',
			          	className:'NO1',
			          	nextpath:'/main/domeseting/steps',
			        },
			        {
			          	id: 8,
			          	label: 'dropdown 下拉菜单 8',
			          	className:'NO1',
			          	nextpath:'/main/domeseting/dropdown',
			        },
			        {
			          	id: 9,
			          	label: 'breadcrumb 面包屑 9',
			          	className:'NO1',
			          	nextpath:'/main/domeseting/breadcrumb',
			        },
			        {
			          	id: 10,
			          	label: 'tabs 标签页 10',
			          	className:'NO1',
			          	nextpath:'/main/domeseting/tabs',
			        },
			        {
			          	id: 11,
			          	label: 'badgeTagProgress 标记和标签和进度条 11',
			          	className:'NO1',
			          	nextpath:'/main/domeseting/badgeTagProgress',
			        },
			        {
			          	id: 12,
			          	label: 'rate-colorpicker 评分 12',
			          	className:'NO1',
			          	nextpath:'/main/domeseting/rate-colorpicker',
			        },
			        {
			          	id: 13,
			          	label: 'transfer 穿梭框 13',
			          	className:'NO1',
			          	nextpath:'/main/domeseting/transfer',
			        },
			        {
			          	id: 14,
			          	label: 'upload 穿梭框 14',
			          	className:'NO1',
			          	nextpath:'/main/domeseting/upload',
			        },
			        {
			          	id: 1111111111,
			          	label: '一级菜单 1-1',
			          	className:'NO1',
			          	nextpath:'/main/domeseting/timeline',
			          	children: [{
			            	id: 22222222222,
			            	label: '二级菜单 2-1',
			            	className:'NO2',
			            	nextpath:'/main/domeseting/collapse',
			            	children: [{
				            	id: 33333333333,
				            	label: '三级菜单 3-1',
				            	className:'NO3',
				            	nextpath:'/main/domeseting/collapse',
				          	}]
			          	}]
			        }
		        ],
		        defaultProps: {
		          	children: 'children',
		          	label: 'label',
		          	id: 'id',
		        },
			}
		},
		components:{
	    },
		methods: {
	      	filterNode(value, data) {
	      		console.log(value, data)
	      		console.log(data.label)
	        	if (!value) return true;
	        	return data.label.indexOf(value) !== -1;
	      	},
	      	remove(node, data){
	      		const parent = node.parent;
		        const children = parent.data.children || parent.data;
		        const index = children.findIndex(d => d.id === data.id);
		        // children.splice(index, 1);
		        console.log(node, data)
	      	},
	      	next(node, data){
	      		this.$router.push(data.nextpath);
	      	},
	    },
		watch: {
	      	filterText(val) {
	      		// console.log(val)
	      		// 对筛选条件进行过滤
	        	this.$refs.filterTree.filter(val);
	      	}
	    },
	}
</script>
<style type="text/css" lang="scss" scoped="scoped">
	.domeseting_w{
		font-size: 16px;
		.custom_icon_path{
			display: inline-block;
			vertical-align: text-bottom;
			img{
				width: 16px;
				height: 16px;
			}
		}
		.reversal{
			background:url('../../../static/images/shoushidianji0-copy.png') no-repeat 0 50%;
			background-size:100% 100%;
			width: 18px;
			height: 18px;
			display: inline-block;
			vertical-align: text-bottom;
		}
	}
</style>