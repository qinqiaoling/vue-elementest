<template>
	<div class="datetimepicker">
		<div class="goback">
			<el-button type="primary" @click="goback()" icon="el-icon-back">返回上一级</el-button>
		</div>
		<div class="carouseldome">
			<div class="radio2">TimePicker：时间选择器</div>
			<div class="block">
				<p>固定时间点：{{value1}}</p>
				<el-time-select
					v-model="value1"
					:picker-options="{
						start: '08:30',
						step: '00:15',
						end: '18:30'
					}"
					placeholder="选择时间">
				</el-time-select>
				<p>任意时间点：</p>
				<!-- arrow-control	是否使用箭头进行时间选择，仅对<el-time-picker>有效,类型boolean,默认值false
				selectableRange	可选时间段，例如'18:30:00 - 20:30:00'或者传入数组['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']	string / array -->
				<el-time-picker
					v-model="value2"
					:picker-options="{
					  	selectableRange: '18:30:00 - 20:30:00'
					}"
					placeholder="任意时间点">
				</el-time-picker>
				<el-time-picker
					arrow-control
					v-model="value3"
					:picker-options="{
					  	selectableRange: '18:30:00 - 20:30:00'
					}"
					placeholder="任意时间点">
				</el-time-picker>
				<p>固定时间范围：</p>
				<!-- step	间隔时间	string
				minTime	最小时间，小于该时间的时间段将被禁用
				maxTime	最大时间，大于该时间的时间段将被禁用 -->
				<el-time-select
				    placeholder="起始时间"
				    v-model="startTime"
				    :picker-options="{
				      	start: '08:30',
				      	step: '00:15',
				      	end: '18:30'
				    }">
			  	</el-time-select>
			  	<el-time-select
				    placeholder="结束时间"
				    v-model="endTime"
				    :picker-options="{
				      	start: '08:30',
				      	step: '00:15',
				      	end: '18:30',
				      	minTime: startTime
				    }">
			  	</el-time-select>
			  	<p>任意时间范围：</p>
			  	<!-- popper-class	TimePicker 下拉框的类名	string
			  	range-separator	选择范围时的分隔符	string
			  	is-range	是否为时间范围选择，仅对<el-time-picker>有效	boolean false -->
			  	<el-time-picker
				    is-range
				    v-model="value4"
				    popper-class="whiletime"
				    range-separator="至"
				    start-placeholder="开始时间"
				    end-placeholder="结束时间"
				    placeholder="选择时间范围">
				</el-time-picker>
				<el-time-picker
				    is-range
				    arrow-control
				    @change="timepickerdome"
				    v-model="value5"
				    ref="timepickerdomeref"
				    range-separator="至"
				    start-placeholder="开始时间"
				    end-placeholder="结束时间"
				    placeholder="选择时间范围">
				</el-time-picker>
			</div>
			<div class="radio2">DatePicker：日期选择器</div>
			<div class="block">
				<p class="radio1">选择日</p>
				<div class="block">
					<span class="demonstration">默认</span>
				    <el-date-picker
				      	v-model="value11"
				      	type="date"
				      	placeholder="选择日期">
				    </el-date-picker>
				</div>
				<div class="block">
					<span class="demonstration">带快捷选项</span>
				    <el-date-picker
				      	v-model="value12"
				      	align="right"
				      	type="date"
				      	placeholder="选择日期"
				      	:picker-options="pickerOptions1">
				    </el-date-picker>
				</div>
				<p class="radio1">其他日期单位</p>
				<div class="container">
				  	<div class="block">
					    <span class="demonstration">周</span>
					    <el-date-picker
					      v-model="value13"
					      type="week"
					      format="yyyy 第 WW 周"
					      placeholder="选择周">
					    </el-date-picker>
				  	</div>
				  	<div class="block">
					    <span class="demonstration">月</span>
					    <el-date-picker
					      v-model="value14"
					      type="month"
					      placeholder="选择月">
					    </el-date-picker>
				  	</div>
				</div>
				<div class="container">
				  	<div class="block">
					    <span class="demonstration">年</span>
					    <el-date-picker
					      v-model="value15"
					      type="year"
					      placeholder="选择年">
					    </el-date-picker>
				  	</div>
				  	<div class="block">
					    <span class="demonstration">多个日期</span>
					    <el-date-picker
					      type="dates"
					      v-model="value16"
					      placeholder="选择一个或多个日期">
					    </el-date-picker>
				  	</div>
				</div>
				<p class="radio1">选择日期范围</p>
				<div class="block">
				    <span class="demonstration">默认</span>
				    <el-date-picker
				      	v-model="value17"
				      	type="daterange"
				      	range-separator="至"
				      	start-placeholder="开始日期"
				      	end-placeholder="结束日期">
				    </el-date-picker>
				</div>
				<div class="block">
				    <span class="demonstration">带快捷选项</span>
				    <el-date-picker
				      	v-model="value18"
				      	type="daterange"
				      	align="right"
				      	unlink-panels
				      	range-separator="至"
				      	start-placeholder="开始日期"
				      	end-placeholder="结束日期"
				      	:picker-options="pickerOptions2">
				    </el-date-picker>
				</div>
				<p>选择月份范围</p>
				<div class="block">
				    <span class="demonstration">默认</span>
				    <el-date-picker
				      	v-model="value19"
				      	type="month"
				      	range-separator="至"
				      	start-placeholder="开始月份"
				      	end-placeholder="结束月份">
				    </el-date-picker>
				</div>
				<div class="block">
				    <span class="demonstration">带快捷选项</span>
				    <el-date-picker
				      	v-model="value20"
				      	type="monthrange"
				      	align="right"
				      	unlink-panels
				      	range-separator="至"
				      	start-placeholder="开始月份"
				      	end-placeholder="结束月份"
				      	:picker-options="pickerOptions3">
				    </el-date-picker>
				</div>
				<p>日期格式</p>
				<div class="block">
				    <span class="demonstration">默认为 Date 对象</span>
				    <div class="demonstration">值：{{ value21 }}</div>
				    <el-date-picker
				      	v-model="value21"
				      	type="date"
				      	placeholder="选择日期"
				      	format="yyyy 年 MM 月 dd 日">
				    </el-date-picker>
				</div>
				<div class="block">
				    <span class="demonstration">使用 value-format</span>
				    <div class="demonstration">值：{{ value22 }}</div>
				    <el-date-picker
				      	v-model="value22"
				      	type="date"
				      	placeholder="选择日期"
				      	format="yyyy 年 MM 月 dd 日"
				      	value-format="yyyy-MM-dd">
				    </el-date-picker>
				</div>
				<div class="block">
				    <span class="demonstration">时间戳</span>
				    <div class="demonstration">值：{{ value23 }}</div>
				    <el-date-picker
				      	v-model="value23"
				      	type="date"
				      	placeholder="选择日期"
				      	format="yyyy 年 MM 月 dd 日"
				      	value-format="timestamp">
				    </el-date-picker>
				</div>
				<p>默认显示日期</p>
				<div class="block">
					<p>组件值：{{ value24 }}</p>
				    <el-date-picker
				      	v-model="value24"
				      	type="daterange"
				      	start-placeholder="开始日期"
				      	end-placeholder="结束日期"
				      	:default-time="['00:00:00', '23:59:59']">
				    </el-date-picker>
				</div>
			</div>
			<div class="radio2">DateTimePicker 日期时间选择器</div>
			<div class="block">
				<p class="radio1">日期和时间点</p>
				<div class="block">
				    <span class="demonstration">默认</span>
				    <el-date-picker
				      v-model="value29"
				      type="datetime"
				      placeholder="选择日期时间">
				    </el-date-picker>
				</div>
				<div class="block">
				    <span class="demonstration">带快捷选项</span>
				    <el-date-picker
				      v-model="value30"
				      type="datetime"
				      placeholder="选择日期时间"
				      align="right"
				      :picker-options="pickerOptions1">
				    </el-date-picker>
				</div>
				<div class="block">
				    <span class="demonstration">设置默认时间</span>
				    <el-date-picker
				      v-model="value31"
				      type="datetime"
				      placeholder="选择日期时间"
				      default-time="12:00:00">
				    </el-date-picker>
				</div>
				<p class="radio1">日期和时间范围</p>
				<div class="block">
				    <span class="demonstration">默认</span>
				    <el-date-picker
				      	v-model="value27"
				      	type="datetimerange"
				      	range-separator="至"
				      	start-placeholder="开始日期"
				      	end-placeholder="结束日期">
				    </el-date-picker>
				</div>
				<div class="block">
				    <span class="demonstration">带快捷选项</span>
				    <el-date-picker
				      	v-model="value28"
				      	type="datetimerange"
				      	:picker-options="pickerOptions2"
				      	range-separator="至"
				      	start-placeholder="开始日期"
				      	end-placeholder="结束日期"
				      	align="right">
				    </el-date-picker>
				</div>
				<p class="radio1">默认的起始与结束时刻</p>
				<div class="block">
				    <span class="demonstration">起始日期时刻为 12:00:00</span>
				    <el-date-picker
				      	v-model="value25"
				      	type="datetimerange"
				      	start-placeholder="开始日期"
				      	end-placeholder="结束日期"
				      	:default-time="['12:00:00']">
				    </el-date-picker>
				</div>
				<div class="block">
				    <span class="demonstration">起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</span>
				    <el-date-picker
				      	v-model="value26"
				      	type="datetimerange"
				      	align="right"
				      	start-placeholder="开始日期"
				      	end-placeholder="结束日期"
				      	:default-time="['12:00:00', '08:00:00']">
				    </el-date-picker>
				</div>
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
				value1: '',
				value2: new Date(2016, 9, 10, 18, 40),
				value3: new Date(2016, 9, 10, 18, 40),
				value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        		value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
				startTime:'',
				endTime:'',
				value11: '',
				value12: '',
				value13: '',
				value14: '',
				value15: '',
				value16: '',
				value17: '',
				value18: '',
				value19: '',
				value20: '',
				value21: '',
				value22: '',
				value23: '',
				value24: '',
				value25: '',
				value26: '',
				value27: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
				value28: '',
				value29: '',
				value30: '',
				value31: '',
				pickerOptions1: {
		          	disabledDate(time) {
		            	return time.getTime() > Date.now();
		          	},
		          	shortcuts: [{
			            text: '今天',
			            onClick(picker) {
			              	picker.$emit('pick', new Date());
			            }
		          	}, {
		            	text: '昨天',
			            onClick(picker) {
			              	const date = new Date();
			              	date.setTime(date.getTime() - 3600 * 1000 * 24);
			              	picker.$emit('pick', date);
			            }
		          	}, {
		            	text: '一周前',
			            onClick(picker) {
			              	const date = new Date();
			              	date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
			              	picker.$emit('pick', date);
			            }
		          	}]
		        },
		        pickerOptions2: {
		          	shortcuts: [{
			            text: '最近一周',
			            onClick(picker) {
			              	const end = new Date();
			              	const start = new Date();
			              	start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
			              	picker.$emit('pick', [start, end]);
			            }
		          	}, {
			            text: '最近一个月',
			            onClick(picker) {
			              	const end = new Date();
			              	const start = new Date();
			              	start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
			              	picker.$emit('pick', [start, end]);
			            }
		          	}, {
			            text: '最近三个月',
			            onClick(picker) {
			              	const end = new Date();
			              	const start = new Date();
			              	start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
			              	picker.$emit('pick', [start, end]);
			            }
		          	}]
		        },
		        pickerOptions3: {
		        	shortcuts: [{
			            text: '本月',
			            onClick(picker) {
			              	picker.$emit('pick', [new Date(), new Date()]);
			            }
			        }, {
			            text: '今年至今',
			            onClick(picker) {
			              	const end = new Date();
			              	const start = new Date(new Date().getFullYear(), 0);
			              	picker.$emit('pick', [start, end]);
			            }
			        }, {
			            text: '最近六个月',
			            onClick(picker) {
			              	const end = new Date();
			              	const start = new Date();
			              	start.setMonth(start.getMonth() - 6);
			              	picker.$emit('pick', [start, end]);
			            }
			        }]
		        },
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
			timepickerdome(val){
				console.log(val)
			},
		},
		watch:{
			
		}
	}
</script>
<style type="text/css" lang="scss" scoped="scoped">
	/deep/.datetimepicker{
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