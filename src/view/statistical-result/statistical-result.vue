<template>
	<div class="statisresult">
		<div class="exportdata" ref="exportdata">
			<el-button type="primary" plain size="small" @click="exportData()">导出数据</el-button>
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
	</div>
</template>
<script type="text/javascript">
	export default {
		name : "StatisticalResult",
		data () {
			return {
				currentPage: 1,
				pagesize: 10,
				pagetotal: 0,
				exam_tableData: [{
		          date: '2016-05-03',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄',
		          zip: 200333
		        }],
		        maxHeight: 1000,
			}
		},
		components:{
	    },
	    mounted:function() { 
	    	this.getdata(1);
	    	this.maxHeight_h();
	    }, 
	    methods:{
	    	maxHeight_h(){
	    		//获取table最大高度
	    		let bh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
	    		let eh = this.$refs.exportdata.offsetHeight;
	    		let fyh = this.$refs.fyh.offsetHeight;
	    		let tableh = bh - (eh + fyh + 60 + 40 + 20+10);
	    		this.maxHeight = tableh
	    		// console.log(bh,this.maxHeight)
	    	},
	    	getdata(pageindex){
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
	    		for(let i = 0;i < 20;i ++ ){
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
	    			this.exam_tableData.push(obj);
	    		}
	    		this.maxHeight_h();
	    		this.pagetotal=this.exam_tableData.length
	    	},
	    	exportData(){
				/* generate workbook object from table */
				//注意：XLSX.uitls.table_to_book( 放入的是table 的DOM 节点 ) ，hhaha.xlsx 即为导出表格的名字，可修改！
				var wb = this.XLSX.utils.table_to_book(document.querySelector('#outtabledata'))
				// 导出table数据时，table不能用fixed，否则一个fixed使用会多导出一个table数据
				/* get binary string as output */
				var wbout = this.XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
				try {
				  	this.FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'sheetjs'+new Date().getTime()+'.xlsx')
				} catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
				return wbout
	    	},
	    	handleSizeChange(val) {
	    		//每页显示多少条
		        console.log(`每页 ${val} 条`);
		        this.pagesize = val;
		        this.currentPage = 1;
		        this.getdata(this.currentPage);
		    },
		    handleCurrentChange(val) {
		    	//当前显示第几页
		        console.log(`当前页: ${val}`);
		        this.currentPage = val;
		        this.getdata(this.currentPage);
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
	.statisresult{
		.exportdata{
			text-align: right;
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