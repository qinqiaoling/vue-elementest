<template>
	<div class="interviewManagement">
		<div class="interview_button" ref="interview_button">
			<el-button type="primary" plain size="small" @click="inter_set()">面试设置</el-button>
			<el-button type="primary" plain size="small" @click="inter_next('nextset')">下一组</el-button>
			<el-button type="primary" plain size="small" @click="inter_start()">开始考试</el-button>
		</div>
		<div class="exam_table">
			<el-table
			    :data="exam_tableData"
			    style="width: 100%"
			    border
			    class="tabledata"
			    id="outtabledata"
			    :max-height="maxHeight">
			    <el-table-column
				    prop="date"
				    label="日期"
				    width="250">
			    </el-table-column>
			    <el-table-column label="配送信息">
			    	<el-table-column
					    prop="name"
					    label="姓名"
					    width="220">
				    </el-table-column>
				    <el-table-column
				      	prop="province"
				      	label="省份"
				      	width="120">
				    </el-table-column>
				    <el-table-column
				      	prop="city"
				      	label="市区"
				      	width="120">
				    </el-table-column>
				    <el-table-column
				      	prop="address"
				      	label="地址"
				      	width="500">
				    </el-table-column>
				    <el-table-column
				      	prop="zip"
				      	label="邮编"
				      	width="120">
				    </el-table-column>
			    </el-table-column>
			</el-table>
		</div>
		<!-- 弹窗 -->
		<InterviewSeting v-if='examshshow' ref="Interview_Seting" :changearray="exam_tableData" @onChange_a="changefunc"></InterviewSeting>
		<InterviewStart v-if='examshshow_a' ref="Interview_Start"></InterviewStart>
	</div>
</template>
<script type="text/javascript">
	import InterviewSeting from './interview-seting'//面试设置
	import InterviewStart from './interview-start'//开始考试
	export default {
		name : "InterviewManagement",
		data () {
			return {
				exam_tableData: [{
		          date: '2016-05-03',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄',
		          zip: 200333
		        }],
		        maxHeight: 1000,
		        examshshow:false,
		        examshshow_a:false,
			}
		},
		components:{
			InterviewSeting,
			InterviewStart
	    },
	    mounted:function() { 
	    	this.getdata('',1);
	    	this.maxHeight_h();
	    }, 
	    methods:{
	    	maxHeight_h(){
	    		//获取table最大高度
	    		let bh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
	    		let eh = this.$refs.interview_button.offsetHeight;
	    		// let fyh = this.$refs.fyh.offsetHeight;
	    		let tableh = bh - (eh + 0 + 60 + 40 + 20+10);
	    		this.maxHeight = tableh
	    		// console.log(bh,this.maxHeight)
	    	},
	    	getdata(next,pageindex){
	    		//请求数据
	    		let obj = {
	    			date: '2016-05-03',
			        name: '王小虎',
			        province: '上海',
			        city: '普陀区',
			        address: '上海市普陀区金沙江路 1518 弄',
			        zip: 200333
	    		}
	    		this.exam_tableData=[];
	    		for(let i = 0;i < 12;i ++ ){
	    			obj = {
		    			date: '2016-05-03',
				        name: '王小虎',
				        province: '上海',
				        city: '普陀区',
				        address: '上海市普陀区金沙江路 1518 弄',
				        zip: 200333
		    		}
		    		obj.zip=i
		    		obj.address='上海市普陀区金沙江路 1518 弄'+i
		    		if(next=='nextset'){
		    			obj.date = new Date().getTime()
		    		}
	    			this.exam_tableData.push(obj);
	    		}
	    		this.maxHeight_h();
	    		this.pagetotal=this.exam_tableData.length
	    	},
	    	changefunc(num){
	    		this.exam_tableData = this.exam_tableData.slice(0,num);
	    	},
	    	inter_set(){
	    		let _this=this;
	    		_this.examshshow = true
	    		_this.$nextTick(() => {
		          	_this.$refs.Interview_Seting.init()
		        })
	    	},
	    	inter_next(next){
	    		this.getdata(next,1);
	    	},
	    	inter_start(){
	    		let _this=this;
	    		_this.examshshow_a = true
	    		_this.$nextTick(() => {
		          	_this.$refs.Interview_Start.init(this.exam_tableData)
		        })
	    	},
	    },
	    watch:{

	    }
	}
</script>
<style type="text/css" lang="scss">
	.interviewManagement{
		.interview_button{
			text-align: right;
		}
		.exam_table{
			margin: 10px 0;
			.tabledata{
				border:1px solid #ccc;
				border-collapse: collapse;
			}
		}
	}
</style>