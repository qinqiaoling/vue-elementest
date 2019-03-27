<template>
	<div class="slider-add-switch-add-inputnumber">
		<div class="goback">
			<el-button type="primary" @click="goback()" icon="el-icon-back">返回上一级</el-button>
		</div>
		<div class="carouseldome">
			<div class="radio2">Slider：滑块</div>
			<div class="block">
				<div class="block">
					<!-- step	步长	 number
					show-input	是否显示输入框，仅在非范围选择时有效	boolean
					show-stops	是否显示间断点	boolean
					value / v-model	绑定值	number -->
				    <span class="demonstration">默认</span>
				    <el-slider 
				    	v-model="value1" 
				    	:step="10" 
				    	show-stops
				    	show-input
				    	tooltip-class="sliderclass"
				    	@change="sliderchange">
				    </el-slider>
				</div>
				<div class="block">
					<!-- show-stops	是否显示间断点	boolean
					range	是否为范围选择	boolean
					min	最小值	number
					max	最大值	number -->
				    <span class="demonstration">自定义初始值</span>
				    <el-slider 
					    v-model="value2" 
					    range
	      				show-stops
	      				:max="10"
	      				:min="1">
      				</el-slider>
				</div>
				<div class="block">
				    <span class="demonstration">隐藏 Tooltip</span>
				    <el-slider v-model="value3" :show-tooltip="false"></el-slider>
				</div>
				<div class="block">
					<!-- vertical 是否竖向模式
					format-tooltip	格式化 tooltip message	function(value) -->
				    <span class="demonstration">格式化 Tooltip</span>
				    <el-slider 
				    	v-model="value4" 
				    	:format-tooltip="formatTooltip" 
				    	vertical 
				    	height="100px" 
				    	style="padding: 20px;">
				    </el-slider>
				</div>
				<div class="block">
				    <span class="demonstration">禁用</span>
				    <el-slider v-model="value5" disabled></el-slider>
				</div>
			</div>
			<div class="radio2">Switch：开关</div>
			<div class="block">
				<!-- active-icon-class	switch 打开时所显示图标的类名，设置此项会忽略 active-text	string
				inactive-icon-class	switch 关闭时所显示图标的类名，设置此项会忽略 inactive-text	string
				active-text	switch 打开时的文字描述	string
				inactive-text	switch 关闭时的文字描述	string
				active-value	switch 打开时的值	boolean / string / number	—	true
				inactive-value	switch 关闭时的值	boolean / string / number	—	false
				active-color	switch 打开时的背景色	string	—	#409EFF
				inactive-color	switch 关闭时的背景色	string	—	#C0CCDA -->
				<el-switch
				  	style="display: block"
				  	v-model="value6"
				  	active-color="#13ce66"
				  	inactive-color="#ff4949"
				  	active-text="按月付费"
				  	inactive-text="按年付费">
				</el-switch>
				<el-switch
				  	style="display: block"
				  	v-model="value8"
				  	active-color="#13ce66"
				  	inactive-color="#ff4949"
				  	active-icon-class="el-icon-circle-check"
				  	inactive-icon-class="el-icon-circle-close"
				  	active-text="按月付费"
				  	inactive-text="按年付费">
				</el-switch>
				<el-tooltip :content="'Switch value: ' + value7" placement="top">
				  	<el-switch
					    v-model="value7"
					    active-color="#13ce66"
					    inactive-color="#ff4949"
					    active-value="100"
					    inactive-value="0"
					    active-text="按月付费"
				  		inactive-text="按年付费">
				  	</el-switch>
				</el-tooltip>
			</div>
			<div class="radio2">Inputnumber:计数器</div>
			<div class="block">
				<!-- label	输入框关联的label文字
				controls-position	控制按钮位置	string	right
				step	计数器步长	number
				precision	数值精度	number -->
				<el-input-number 
					v-model="num1" 
					@change="handleChange" 
					:min="1" 
					:max="10" 
					:step="2"
					:precision="2"
					label="描述文字">
				</el-input-number>
				<el-input-number 
					v-model="num2" 
					controls-position="right" 
					@change="handleChange" 
					:min="1" 
					:max="10">
				</el-input-number>
			</div>
			<div class="radio2">Input:输入框</div>
			<div class="block">
				<el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
				    <el-select v-model="select" slot="prepend" placeholder="请选择">
				      	<el-option label="餐厅名" value="1"></el-option>
				      	<el-option label="订单号" value="2"></el-option>
				      	<el-option label="用户电话" value="3"></el-option>
				    </el-select>
				    <el-button slot="append" icon="el-icon-search"></el-button>
				</el-input>
			</div>
			<div class="block">
				<div class="sub-title">激活即列出输入建议</div>
			    <el-autocomplete
					class="inline-input"
					v-model="state1"
					:fetch-suggestions="querySearch"
					placeholder="请输入内容"
					@select="handleSelect"
			    ></el-autocomplete>
			</div>
			<div class="block">
				<div class="sub-title">输入后匹配输入建议</div>
			    <el-autocomplete
					class="inline-input"
					v-model="state2"
					:fetch-suggestions="querySearch"
					placeholder="请输入内容"
					:trigger-on-focus="false"
					@select="handleSelect"
			    ></el-autocomplete>
			</div>
			<div class="block">
				<div class="sub-title">远程搜索----从服务端搜索数据</div>
			    <el-autocomplete
					class="inline-input"
					v-model="state4"
					:fetch-suggestions="querySearchAsync"
					placeholder="请输入内容"
					@select="handleSelect"
			    ></el-autocomplete>
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
				value1: 0,
		        value2: [4,9],
		        value3: 36,
		        value4: 48,
		        value5: 42,
		        value6: true,
		        value7: '100',
		        value8: true,
		        num1: 1,
		        num2: 1,
		        input5: '',
      			select: '',
      			restaurants: [],
		        state1: '',
		        state2: '',
		        state4: '',
        		timeout:  null,
		    }
		},
		mounted(){
			this.restaurants = this.loadAll();
		},
		computed: {
		    
		},
		methods:{
			goback(){
				this.$router.push('/main/domeseting');
			},
			formatTooltip(val){
				return val/100
			},
			sliderchange(val){
				console.log(val)
			},
			handleChange(value) {
		        console.log(value);
		    },
		    querySearch(queryString, cb) {
		        var restaurants = this.restaurants;
		        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
		        // 调用 callback 返回建议列表的数据
		        cb(results);
		    },
		    createFilter(queryString) {
		        return (restaurant) => {
		          	return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
		        };
		    },
		    handleSelect(item) {
		        console.log(item);
		    },
		    querySearchAsync(queryString, cb) {
				var restaurants = this.restaurants;
				var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;
				clearTimeout(this.timeout);
				this.timeout = setTimeout(() => {
			  		cb(results);
				}, 3000 * Math.random());
			},
			createStateFilter(queryString) {
				return (state) => {
			  		return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
				};
			},
		    loadAll(){
		    	return [
					{ "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
					{ "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
					{ "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
					{ "value": "泷千家(天山西路店)", "address": "天山西路438号" },
					{ "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
					{ "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
					{ "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
					{ "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
					{ "value": "阳阳麻辣烫", "address": "天山西路389号" },
					{ "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
		        ];
		    },
		},
		watch:{
			
		}
	}
</script>
<style type="text/css" lang="scss" scoped="scoped">
	/deep/.slider-add-switch-add-inputnumber{
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
<style type="text/css" lang="scss">
	.el-tooltip__popper.is-dark.sliderclass{
		background:hsla(0, 100%, 50%, 0.3);
		span{
			color: #2eb7ed;
			font-weight: bold;
			font-size: 18px;
		}
	} 
</style>