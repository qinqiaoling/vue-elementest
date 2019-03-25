<template>
	<div class="transfer">
		<div class="goback">
			<el-button type="primary" @click="goback()" icon="el-icon-back">返回上一级</el-button>
		</div>
		<div class="carouseldome">
		  	<div class="radio1">穿梭框：</div>
			<p style="margin: 0 0 20px">使用 render-content 自定义数据项</p>
			<div>
				<!-- titles	自定义列表标题	array
				button-texts	自定义按钮文案	array
				format	列表顶部勾选状态文案	object{noChecked, hasChecked}	—	{ noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }
				left-default-checked	初始状态下左侧列表的已勾选项的 key 数组	array
				right-default-checked	初始状态下右侧列表的已勾选项的 key 数组	array -->
			    <el-transfer
			      	v-model="value3"
			      	filterable
			      	:left-default-checked="[2, 3]"
			      	:right-default-checked="[1]"
			      	:render-content="renderFunc"
			      	:titles="['Source', 'Target']"
			      	:button-texts="['到左边', '到右边']"
			      	:format="{
			        	noChecked: '${total}',
			        	hasChecked: '${checked}/${total}'
			      	}"
			      	@change="handleChange"
			      	:data="data1">
			      	<el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
			      	<el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
			    </el-transfer>
			</div>
			<p style="margin: 50px 0 20px">使用 scoped-slot 自定义数据项</p>
			<div>
				<!-- // render-content	自定义数据项渲染函数	function(h, option) -->
				<el-transfer
				  	v-model="value4"
				  	filterable
				  	:left-default-checked="[2, 3]"
				  	:right-default-checked="[1]"
				  	:titles="['Source', 'Target']"
				  	:button-texts="['到左边', '到右边']"
				  	:format="{
				    	noChecked: '${total}',
				    	hasChecked: '${checked}/${total}'
				  	}"
				  	@change="handleChange"
				  	:data="data1">
				  	<span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
				  	<el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
				  	<el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
				</el-transfer>
			</div>
			<div>
				<template>
					<!-- props	数据源的字段别名	object{key, label, disabled} -->
					<!-- filterable	是否可搜索	boolean
					filter-placeholder	搜索框占位符	string
					filter-method	自定义搜索方法	function -->
					<!-- data	Transfer 的数据源	array[{ key, label, disabled }]
					value / v-model	绑定值	array -->
				  	<el-transfer
					    filterable
					    :filter-method="filterMethod"
					    filter-placeholder="请输入城市拼音"
					    :props="{
					      key:'value',
					      label:'desc'
					    }"
					    v-model="value2"
					    :data="data2">
				  	</el-transfer>
				</template>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'',
		data (){
			const generateData = _ => {
		        const dataobj = [];
		        for (let i = 1; i <= 15; i++) {
		          	dataobj.push({
		            	key: i,
		            	label: `备选项 ${ i }`,
		            	disabled: i % 4 === 0
		          	});
		        }
		        return dataobj;
		    };
		    const generateData2 = _ => {
		    	const dataobj2 = [];
		    	const citys = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
		    	const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
		    	citys.forEach((item, index) =>{
		    		dataobj2.push({
		    			value:index,
		    			desc:item,
		    			pinyin: pinyin[index]
		    		});
		    	});
		    	return dataobj2;
		    };
			return {
				cardimg: '../../../static/images/no_img.jpg',
				data1: generateData(),
		        value3: [1],
		        value4: [1],
		        data2: generateData2(),
        		value2: [],
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
			handleChange(value, direction, movedKeys) {
		        console.log(value, direction, movedKeys);
		    },
		    filterMethod(query, item) {
	          	return item.pinyin.indexOf(query) > -1;
	        },
		    renderFunc(h, option) {
		        var _this = this;
		        return h(
		          	'span', {
			            attrs: {
			              	id: option.key
			            },
			            domProps: {
			              	innerHTML: option.key+option.label
			            },
			            on: {
			              	click: function () {
			                	console.log(option.key)
			              	}
			            }
		          	}
		        );
		    },
		},
		watch:{
			
		}
	}
</script>
<style type="text/css" lang="scss" scoped="scoped">
	/deep/.transfer{
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