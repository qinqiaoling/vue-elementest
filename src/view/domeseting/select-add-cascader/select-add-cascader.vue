<template>
	<div class="select-add-cascader">
		<div class="goback">
			<el-button type="primary" @click="goback()" icon="el-icon-back">返回上一级</el-button>
		</div>
		<div class="carouseldome">
			<div class="radio2">select：选择器</div>
			multiple 支持多选 boolean
			clearable 将选择器清空 只适合单选 boolean
			collapse-tags 多选时是否将选中值按文字的形式展示	boolean
			multiple-limit 多选时用户最多可以选择的项目数，为 0 则不限制	number
			filterable 可搜索
			<div class="block">
				<el-select 
					v-model="value3"
				 	clearable 
				 	filterable 
				 	placeholder="可搜索选择">
				    <el-option
				      	v-for="item in options2"
				      	:key="item.value"
				      	:label="item.label"
				      	:value="item.value">
				    </el-option>
				</el-select>
			</div>
			<div class="block">
				<el-select 
					v-model="value1" 
					clearable 
					multiple 
					:multiple-limit="multiplelimit"
					placeholder="请选择,最多选3个">
			      	<el-option
				        v-for="item in options2"
				        :key="item.value"
				        :label="item.label"
				        :value="item.value">
				        <span style="float: left">{{ item.label }}</span>
  						<!-- <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span> -->
			      	</el-option>
				</el-select>
			</div>
			<div class="block">
				<el-select 
					v-model="value2" 
					clearable 
					multiple 
					collapse-tags
					:multiple-limit="multiplelimit"
					placeholder="请选择collapse-tags">
				    <el-option-group
				      	v-for="group in options1"
				      	:key="group.label"
				      	:label="group.label">
				      	<el-option
					        v-for="item in group.options"
					        :key="item.value"
					        :label="item.label"
					        :value="item.value"
					        :disabled="item.disabled">
					        <span style="float: left">{{ item.label }}</span>
      						<!-- <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span> -->
				      	</el-option>
				    </el-option-group>
				</el-select>
			</div>
			<div class="block">
				<el-select 
					v-model="value4" 
					clearable 
					placeholder="请选择自定义模板">
				    <el-option-group
				      	v-for="group in options1"
				      	:key="group.label"
				      	:label="group.label">
				      	<el-option
					        v-for="item in group.options"
					        :key="item.value"
					        :label="item.label"
					        :value="item.value"
					        :disabled="item.disabled">
					        <span style="float: left">{{ item.label }}</span>
      						<span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
				      	</el-option>
				    </el-option-group>
				</el-select>
			</div>
			<div class="block">
				<el-select
					v-model="value5"
					multiple
    				filterable
    				remote
    				:remote-method="remoteMethod"
    				reserve-keyword
    				placeholder="请输入关键词"
    				:loading="loading">
					<el-option
						v-for="item in options3"
					    :key="item.value"
					    :label="item.label"
					    :value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="radio2">Cascader：级联选择器</div>
			<div class="block">
				change-on-select	是否允许选择任意一级的选项	boolean
				show-all-levels	输入框中是否显示选中值的完整路径	boolean
				selectedOptions3: ['zujian', 'basic', 'layout']  默认选择
				filterable 可搜索
				placeholder="试试搜索：指南"   占位符
				<span class="demonstration">默认 click 触发子菜单</span>
				<el-cascader
				    :options="options4"
				    v-model="selectedOptions1"
				    @change="handleChange">
				</el-cascader>
			</div>
			<div class="block">
			  	<span class="demonstration">hover 触发子菜单</span>
			  	<el-cascader
				    expand-trigger="hover"
				    :options="options4"
				    placeholder="试试搜索：指南"
				    filterable
				    change-on-select
				    v-model="selectedOptions2"
				    @change="handleChange">
			  	</el-cascader>
			</div>
			<div class="block">
				<span class="demonstration">仅显示最后一级和默认选项</span>
				<el-cascader
				  	:options="options4"
				  	v-model="selectedOptions3"
				  	:show-all-levels="false">
				</el-cascader>
			</div>
			<div class="block">
				<span class="demonstration">动态加载次级选项</span>
				<el-cascader
				  	:options="options5"
				  	@active-item-change="handleItemChange"
				  	:props="propsval"
				  	:show-all-levels="false">
				</el-cascader>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'',
		data (){
			return {
				cardimg: '../../../static/images/no_img.jpg',
				options1: [{
		          	label: '热门城市',
		          	options: [{
		            	value: 'Shanghai',
		            	label: '上海'
		          	}, {
		            	value: 'Beijing',
		            	label: '北京'
		          	}]
		        }, {
		          	label: '城市名',
		          	options: [{
		            	value: 'Chengdu',
		            	label: '成都'
		          	}, {
		            	value: 'Shenzhen',
		            	label: '深圳',
		            	disabled: true,
		          	}, {
		            	value: 'Guangzhou',
		            	label: '广州'
		          	}, {
		            	value: 'Dalian',
		            	label: '大连'
		          	}, {
		            	value: 'WuHan',
		            	label: '武汉'
		          	}]
		        }],
		        options2: [{
		          	value: '选项1',
		          	label: '黄金糕'
		        }, {
		          	value: '选项2',
		          	label: '双皮奶'
		        }, {
		          	value: '选项3',
		          	label: '蚵仔煎'
		        }, {
		          	value: '选项4',
		          	label: '龙须面'
		        }, {
		          	value: '选项5',
		          	label: '北京烤鸭'
		        }],
		        options3: [],
		        value1: '',
		        value2: '',
		        value3: '',
		        value4: '',
		        value5: '',
		        loading: false,
		        multiplelimit: 3,
		        list: [],
		        states: [
		        	"Alabama", "Alaska", "Arizona",
			        "Arkansas", "California", "Colorado",
			        "Connecticut", "Delaware", "Florida",
			        "Georgia", "Hawaii", "Idaho", "Illinois",
			        "Indiana", "Iowa", "Kansas", "Kentucky",
			        "Louisiana", "Maine", "Maryland",
			        "Massachusetts", "Michigan", "Minnesota",
			        "Mississippi", "Missouri", "Montana",
			        "Nebraska", "Nevada", "New Hampshire",
			        "New Jersey", "New Mexico", "New York",
			        "North Carolina", "North Dakota", "Ohio",
			        "Oklahoma", "Oregon", "Pennsylvania",
			        "Rhode Island", "South Carolina",
			        "South Dakota", "Tennessee", "Texas",
			        "Utah", "Vermont", "Virginia",
			        "Washington", "West Virginia", "Wisconsin",
			        "Wyoming"
			    ],
			    selectedOptions1: [],
        		selectedOptions2: [],
        		selectedOptions3: ['zujian', 'basic', 'layout'],
        		options4: [
        			{
		          		value: 'zhinan',
		          		label: '指南',
				        children: [{
				            value: 'shejiyuanze',
				            label: '设计原则',
				            children: [{
				              	value: 'yizhi',
				              	label: '一致'
				            }, {
				              	value: 'kekong',
				              	label: '可控'
				            }]
				        }, {
				            value: 'daohang',
				            label: '导航',
				            children: [{
				              	value: 'cexiangdaohang',
				              	label: '侧向导航'
				            }, {
				              	value: 'dingbudaohang',
				              	label: '顶部导航',
				              	disabled: true,
				            }]
				        }]
		        	}, 
		        	{
		          		value: 'zujian',
		          		label: '组件',
			          	children: [{
				            value: 'basic',
				            label: 'Basic',
				            children: [{
				              value: 'layout',
				              label: 'Layout 布局'
				            }, {
				              value: 'button',
				              label: 'Button 按钮'
				            }]
			          	}, {
				            value: 'form',
				            label: 'Form',
				            children: [{
				              value: 'radio',
				              label: 'Radio 单选框'
				            }, {
				              value: 'checkbox',
				              label: 'Checkbox 多选框'
				            }, {
				              value: 'form',
				              label: 'Form 表单'
				            }]
			          	}]
		        	}, 
		        	{
			          	value: 'ziyuan',
			          	label: '资源',
			          	children: [{
				            value: 'axure',
				            label: 'Axure Components'
				        }, {
				            value: 'jiaohu',
				            label: '组件交互文档'
				        }]
		        	}
        		],
        		options5: [{
		          	label: '江苏',
		          	cities: []
		        }, {
		          	label: '浙江',
		          	cities: []
		        }],
		        propsval: {
		          value: 'label',
		          children: 'cities'
		        },
		    }
		},
		mounted(){
			this.list = this.states.map(item => {
        		return { value: item, label: item };
      		});
		},
		computed: {
		    
		},
		methods:{
			goback(){
				this.$router.push('/main/domeseting');
			},
			remoteMethod(query){
				if (query !== '') {
		          	this.loading = true;
		          	setTimeout(() => {
		            	this.loading = false;
		            	this.options3 = this.list.filter(item => {
		              		return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
		            	});
		          	}, 200);
		        } else {
		          	this.options3 = [];
		        }
			},
			handleChange(value) {
		        console.log(value);
		    },
		    handleItemChange(val){
		    	console.log('active item:', val);
		    	setTimeout(_ => {
		          	if (val.indexOf('江苏') > -1 && !this.options5[0].cities.length) {
		            	this.options5[0].cities = [{
		              		label: '南京'
		            	}];
		          	} else if (val.indexOf('浙江') > -1 && !this.options5[1].cities.length) {
		            	this.options5[1].cities = [{
		              		label: '杭州'
		            	}];
		          	}
		        }, 300);
		    },
		},
		watch:{
			
		}
	}
</script>
<style type="text/css" lang="scss" scoped="scoped">
	/deep/.select-add-cascader{
		.goback{
			text-align: left;
		}
		.radio1{
			padding:20px 0;
		}
		.radio2{
			padding:20px 0;
			color: #69c;
		}
		.carouseldome{
			text-align: left;
			background: #fff;
			padding: 20px;
		}
	}
</style>