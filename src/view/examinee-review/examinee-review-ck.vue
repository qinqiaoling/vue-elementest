<template>
	<div class="audit">
		<el-dialog title="考生信息查看" :visible.sync="dialogFormVisible_ck" center width="54%">
			<div class="exam_table_ck">
				<el-table
				    :data="exam_tableData_ck"
				    style="width: 100%"
				    border
				    class="tabledata">
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
				      	width="120">
				    </el-table-column>
				    <el-table-column
				    	fixed="right"
				      	prop="zip"
				      	label="邮编"
				      	width="120">
				    </el-table-column>
				  </el-table>
			</div>
		  	<div slot="footer" class="dialog-footer">
		    	<!-- <el-button @click="dialogFormVisible_ck = false">通 过</el-button> -->
		    	<el-button @click="dialogFormVisible_ck = false">关 闭</el-button>
		  	</div>
		</el-dialog>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'exam_tableData_ck',
	    data() {
	      	return {
		        dialogFormVisible_ck: false,
		        exam_tableData_ck:[{
		        	date: '2016-05-03',
		          	name: '王小虎',
		          	province: '上海',
		          	city: '普陀区',
		          	address: '上海市普陀区金沙江路 1518 弄',
		          	zip: 200333
		        }]
		    };
	    },
	    mounted(){

	    },
	    methods:{
	    	init(row){
	    		this.dialogFormVisible_ck = true
		        this.$nextTick(() => {
		        	this.exam_tableData_ck = [];
		          	this.exam_tableData_ck.push(row);
		          	console.log(row,this.exam_tableData_ck)
		        })
	    	}
	    }
	};
</script>
<style type="text/css" lang="scss">
	.audit{

	}
</style>