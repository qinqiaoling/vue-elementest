<template>
	<div class="interviewStart">
		<el-dialog title="面试评分" :visible.sync="dialogformmspfvisible" center width="54%">
			<div class="exam_table_sh">
				<el-table
				    :data="exam_tableData_set"
				    style="width: 100%"
				    border
				    max-height="360"
				    class="tabledata">
				    <el-table-column
					    label="面试人员信息">
					    <el-table-column label="评分">
					    	<el-table-column 
					    		fixed
					    		label="日期" 
					    		prop="date"
					    		width="120">
				    		</el-table-column>
				    	</el-table-column>
				    </el-table-column>
				    <el-table-column label="信息">
				    	<el-table-column label="优(X>80),良(60<=X<=80),低(X<60)">
				    		<el-table-column
							    prop="name"
							    label="姓名"
							    width="80">
						    </el-table-column>
						    <el-table-column
						      	prop="province"
						      	label="省份"
						      	width="80">
						    </el-table-column>
						    <el-table-column
						      	prop="city"
						      	label="市区"
						      	width="80">
						    </el-table-column>
						    <el-table-column
						      	prop="address"
						      	label="地址"
						      	width="150"
						      	>
						    </el-table-column>
						    <el-table-column
						      	prop="zip"
						      	label="邮编"
						      	width="80">
						    </el-table-column>
						</el-table-column>
				    </el-table-column>
				    <el-table-column label="打分">
				    	<template slot-scope="scope">
				    		<el-input v-model.number="scope.row.scroce" autocomplete="off"></el-input>
				    	</template>
				    </el-table-column>
				    <el-table-column label="结果" fixed="right">
				    	<template slot-scope="scope">
				    		<el-tag type="success" v-if="scope.row.scroce>80">优</el-tag>
							<el-tag type="warning" v-if="scope.row.scroce>=60&&scope.row.scroce<=80">良</el-tag>
							<el-tag type="danger" v-if="scope.row.scroce<60">低</el-tag>
				    	</template>
				    </el-table-column>
				</el-table>
			</div>
		  	<div slot="footer" class="dialog-footer">
		    	<el-button type="primary" @click="dialogformchangevisible_true()">提 交</el-button>
		    	<el-button @click="dialogformmspfvisible = false">取 消</el-button>
		  	</div>
		</el-dialog>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'interviewStart',
	    data() {
	      	return {
		        dialogformmspfvisible:false,
		        exam_tableData_set:[{
		        	date: '2016-05-03',
			        name: '王小虎',
			        province: '上海',
			        city: '普陀区',
			        address: '上海市普陀区金沙江路 1518 弄',
			        zip: 200333
		        }]
	      	};
	    },
	    computed:{
	    	
	    },
	    mounted(){
	    },
	    methods:{
	    	// 初始化
	      	init (row) {
		        this.dialogformmspfvisible = true
		        this.$nextTick(() => {
		        	this.exam_tableData_set = []
		        	this.exam_tableData_set = row
		        	// console.log(row)
		        })
	      	},
	    	dialogformchangevisible_true(){
	    		this.dialogformmspfvisible = false
	    	}
	    },
  	};
</script>
<style type="text/css" lang="scss">
	.interviewStart{
		.el-form-item__label{
			text-align-last: justify;
		}
	}
</style>