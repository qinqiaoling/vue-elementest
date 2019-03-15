<template>
	<div class="ExamineEreview" ref="ExamineEreview">
		<div class="exam_tab" ref="exam_tabh">
			<span 
				v-for="(exam_tab,index) in exam_tabs" 
				:key="index" 
				:class="index==NO?'on':''"
				@click="changetabs(index)">
				{{exam_tab.text}}
			</span>
		</div>
		<div class="exam_table">
			<el-table
			    :data="exam_tableData"
			    style="width: 100%"
			    border
			    class="tabledata"
			    :max-height="maxHeight">
			    <el-table-column
				    fixed
				    prop="date"
				    label="日期"
				    width="150">
			    </el-table-column>
			    <el-table-column
				    prop="name"
				    label="姓名"
				    width="120">
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
			    <el-table-column
			    	fixed="right"
			    	label="操作"
			    	width="120">
					<template slot-scope="scope">
						<el-button
						  	@click.native.prevent="Rowsh(scope.$index, exam_tableData, scope.row, scope.row.name)"
						  	type="text"
						  	size="small"
						  	v-if="NO==0">
						  	审核
						</el-button>
						<el-button
						  	@click.native.prevent="Rowck(scope.$index, exam_tableData, scope.row, scope.row.name)"
						  	type="text"
						  	size="small"
						  	v-if="NO==1">
						  	查看
						</el-button>
					</template>
			    </el-table-column>
			  </el-table>
		</div>
		<div class="fy" ref=fyh>
			<el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="currentPage"
		      :page-sizes="[10, 20, 30, 40]"
		      :page-size="pagesize"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="pagetotal">
		    </el-pagination>
		</div>
		<!-- 弹窗 -->
		<!-- 把子组件的$emit绑定到父组件的eventName(onSubmit)事件上，父组件监听eventName(onSubmit事件)，
		当它被触发时，会调用父组件对应的parentFun()方法。 
		changetable是传给子组件监听的方法，子组件接收props:['changetable']
		exam_tableData是父组件里监听的值(exam_tableData=[])，
		parentFun是父组件里的方法parentFun(),
		onSubmit是子组件监听的事件this.$emit('onSubmit', changetable),changetable值可修改。 -->
		<exam-sh v-if='examshshow' ref="examsh" :changetable="exam_tableData" @onPass="parentFun"></exam-sh>
		<exam-ck v-if='examshshow_a' ref="examck"></exam-ck>
	</div>
</template>
<script type="text/javascript">
	import ExamSh from './examinee-review-sh'//审核
	import ExamCk from './examinee-review-ck'//查看
	export default {
		name : "ExamineEreview",
		data () {
			return {
				NO: 0,
				currentPage: 1,
				pagesize: 10,
				pagetotal: 0,
				exam_tabs:[{
					text: '待审核',
					index: 0,
				},{
					text: '已审核',
					index: 1,
				}],
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
		        status:0,//0审核状态没改变过，1数据状态改变过
			}
		},
		components:{
			ExamSh,
			ExamCk
	    },
	    computed:{

	    },
	    created(){
        },
	    mounted(){ 
	    	this.getdata(this.status,this.currentPage,this.pagesize);
	    	this.maxHeight_h();
	    }, 
	    methods:{
	    	changetabs(NO){
	    		this.NO = NO
	    		if(this.NO==0){
	    			this.getdata(this.status,this.currentPage,this.pagesize);
	    		}else if(this.NO==1){
	    			this.getdata(this.status,this.currentPage,this.pagesize);
	    		}
	    	},
	    	maxHeight_h(){
	    		//获取table最大高度
	    		let bh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
	    		let mainh = this.$refs.ExamineEreview.offsetHeight;
	    		let eh = this.$refs.exam_tabh.offsetHeight;
	    		let fyh = this.$refs.fyh.offsetHeight;
	    		let tableh = bh - (eh + fyh + 60 + 40 + 20+10);
	    		this.maxHeight = tableh
	    		// console.log(bh,this.maxHeight)
	    	},
	    	getdata(status,pageindex,pagesize){
	    		//请求数据
	    		if(status==0){
	    			let obj = {
		    			date: '2016-05-03',
				        name: '王小虎',
				        province: '上海',
				        city: '普陀区',
				        address: '上海市普陀区金沙江路 1518 弄',
				        zip: 200333
		    		}
		    		this.exam_tableData=[];
		    		for(let i = 0;i < 14;i ++ ){
		    			obj = {
			    			date: '2016-05-03',
					        name: '王小虎'+i,
					        province: '上海',
					        city: '普陀区',
					        address: '上海市普陀区金沙江路 1518 弄',
					        zip: 200333
			    		}
			    		obj.zip=i
			    		obj.address='上海市普陀区金沙江路 1518 弄'+i
		    			this.exam_tableData.push(obj);
		    		}
		    		this.maxHeight_h();
		    		this.pagetotal = this.exam_tableData.length
	    		}else{
	    			this.exam_tableData = this.exam_tableData
		    		this.maxHeight_h();
		    		this.pagetotal = this.exam_tableData.length
	    		}
	    		if(pageindex==1){
	    			this.exam_tableData=this.exam_tableData.slice(0,pagesize);
				}else{
					this.exam_tableData=this.exam_tableData.slice(pagesize,14);
				}
	    		console.log(this.exam_tableData.slice(0,pagesize),pageindex)
	    	},
	    	parentFun(msg){
	    		this.status = 1
	    		this.exam_tableData = msg
	    		this.maxHeight_h();
	    		this.pagetotal = this.exam_tableData.length
	    	},
	    	Rowsh(index,rows,row,name){
	    		let _this=this;
	    		// console.log(index,rows,row,name)
	    		_this.examshshow = true
	    		_this.$nextTick(() => {
		          	_this.$refs.examsh.init(row)
		        })
	    	},
	    	Rowck(index,rows,row,name){
	    		let _this=this;
	    		// console.log(index,rows,row,name)
	    		_this.examshshow_a = true
	    		_this.$nextTick(() => {
		          	_this.$refs.examck.init(row)
		        })
	    	},
	    	handleSizeChange(val) {
	    		//每页显示多少条
		        // console.log(`每页 ${val} 条`);
		        this.pagesize = val;
		        this.currentPage = 1;
		        this.getdata(this.status,this.currentPage,this.pagesize);
		    },
		    handleCurrentChange(val) {
		    	//当前显示第几页
		        // console.log(`当前页: ${val}`);
		        this.currentPage = val;
		        this.getdata(this.status,this.currentPage,this.pagesize);
		    }
	    },
	    watch:{
	    	if(to,from){
	    		this.maxHeight_h();
	    	}

	    }
	}
</script>
<style type="text/css" lang="scss">
	.ExamineEreview{
		.exam_tab{
			text-align:left;
			border:1px solid #ccc;
			background:#fff;
			height: 30px;
			line-height: 30px;
			font-size: 16px;
			span{
				cursor: pointer;
				border-right: 1px solid #ddd;
				padding: 0 10px;
				&.on{
					color: #409eff;
				}
				&:last-child{
					border-right:0;
				}
			}
		}
		.exam_table{
			margin: 10px 0;
			.tabledata{
				border:1px solid #ccc;
				border-collapse: collapse;
			}
		}
		.fy{
			border:1px solid #ccc;
			background: #fff;
			text-align: right;
		}
	}
</style>