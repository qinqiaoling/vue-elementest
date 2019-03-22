<template>
	<div class="badge-add-tag-add-progress">
		<div class="goback">
			<el-button type="primary" @click="goback()" icon="el-icon-back">返回上一级</el-button>
		</div>
		<div class="carouseldome">
		  	<div class="radio1">标记：</div>
			<el-badge :value="121" class="item" :max="66">
			  	<el-button size="small">评论</el-button>
			</el-badge>
			<el-badge :value="3" class="item">
			  	<el-button size="small">回复</el-button>
			</el-badge>
			<el-badge :value="1" class="item" type="primary">
			  	<el-button size="small">评论</el-button>
			</el-badge>
			<el-badge :value="2" class="item" type="warning">
			  	<el-button size="small">回复</el-button>
			</el-badge>
			<el-badge value="hot" class="item">
			  	<el-button size="small">回复</el-button>
			</el-badge>
			<el-badge is-dot class="item">数据查询</el-badge>
			<el-badge is-dot class="item">
			  	<el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
			</el-badge>
			<div class="radio1">进度条：</div>
			<div class="progress">
				<el-progress :percentage="0"></el-progress>
				<el-progress :percentage="70"></el-progress>
				<el-progress :percentage="80" color="#8e71c7"></el-progress>
				<el-progress :percentage="percentage_p" status="success"></el-progress>
				<el-progress :percentage="50" status="exception"></el-progress>
				<el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
				<el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
				<el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>
				<el-progress :text-inside="true" :stroke-width="18" :percentage="percentage_p" status="success"></el-progress>
				<el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
				<el-progress type="circle" :percentage="0"></el-progress>
				<el-progress type="circle" :percentage="25"></el-progress>
				<el-progress type="circle" :percentage="percentage_p" color="#8e71c7"></el-progress>
				<el-progress type="circle" :percentage="100" status="success"></el-progress>
				<el-progress type="circle" :percentage="50" status="exception"></el-progress>
				<el-progress type="circle" :percentage="100" status="text">Done</el-progress>
			</div>
			<div class="radio1">标签：</div>
			<div class="tag">
				<el-tag
				  	:key="tag"
				  	v-for="tag in dynamicTags"
				  	closable
				  	:disable-transitions="false"
				  	@close="handleClose(tag)">
				  	{{tag}}
				</el-tag>
				<el-input
				  	class="input-new-tag"
				  	v-if="inputVisible"
				  	v-model="inputValue"
				  	ref="saveTagInput"
				  	size="small"
				  	@keyup.enter.native="handleInputConfirm"
				  	@blur="handleInputConfirm">
				</el-input>
				<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
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
				dynamicTags: ['标签一', '标签二', '标签三'],
        		inputVisible: false,
        		inputValue: '',
        		percentage_p:0,
		    }
		},
		mounted(){
			this.percentage_pr();
		},
		computed: {
		    
		},
		methods:{
			goback(){
				this.$router.push('/main/domeseting');
			},
			handleClose(tag) {
		        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
		    },
		    showInput() {
		        this.inputVisible = true;
		        this.$nextTick(_ => {
		          	this.$refs.saveTagInput.$refs.input.focus();
		        });
		    },
		    handleInputConfirm() {
		        let inputValue = this.inputValue;
		        if (inputValue) {
		          	this.dynamicTags.push(inputValue);
		        }
		        this.inputVisible = false;
		        this.inputValue = '';
		    },
		    percentage_pr(){
		    	for(var i=0;i<100;i++){
		    		setTimeout(() => {
			          	this.percentage_p ++
			          	// console.log(this.percentage_p)
			        }, 2000);
		    	}
		    }
		},
		watch:{
			
		}
	}
</script>
<style type="text/css" lang="scss" scoped="scoped">
	/deep/.badge-add-tag-add-progress{
		.goback{
			text-align: left;
		}
		.carouseldome{
			text-align: left;
			background: #fff;
			padding: 20px;
		}
		.item{
			margin: 10px;
		}
		.progress{
			.el-progress{
				margin: 10px;
			}
		}
		.tag{
			margin: 20px;
		}
	}
</style>