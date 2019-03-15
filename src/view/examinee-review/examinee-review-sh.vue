<template>
	<div class="audit">
		<el-dialog title="考生信息审核" :visible.sync="dialogFormVisible_sh" center width="54%">
			<div class="exam_table_sh">
				<el-table
				    :data="exam_tableData_sh"
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
		    	<el-button @click="dialogFormVisible_sh_pass()">通 过</el-button>
		    	<el-button type="primary" @click="dialogFormVisible_sh = false">拒 绝</el-button>
		  	</div>
		</el-dialog>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'exam_tableData_sh',
	    data() {
	      	return {
		        dialogFormVisible_sh: false,
		        exam_tableData_sh:[{
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
	    props:['changetable'],
	    methods:{
	    	init(row){
	    		this.dialogFormVisible_sh = true
		        this.$nextTick(() => {
		        	this.exam_tableData_sh = [];
		          	this.exam_tableData_sh.push(row);
		          	// console.log(row,this.exam_tableData_sh)
		        })
	    	},
	    	dialogFormVisible_sh_pass(){
	    		// changetable是props接收的值，需要重新定义数据类型
	    		let changetable=[]
	    		let obj = {
	    			date: '2016-05-03',
			        name: '王小虎',
			        province: '上海',
			        city: '普陀区',
			        address: '上海市普陀区金沙江路 1518 弄',
			        zip: 200333
	    		}
	    		for(let i = 0;i < 14;i ++ ){
	    			obj = {
		    			date: '2016-05-03'+i,
				        name: '王小虎'+i,
				        province: '上海'+i,
				        city: '普陀区'+i,
				        address: '上海市普陀区金沙江路 1518 弄'+i,
				        zip: 200333+i
		    		}
	    			changetable.push(obj);
	    		}
	    		console.log(changetable)
	    		// childByValue是在父组件on监听的方法
		        // 第二个参数this.childValue是需要传的值
		        this.$emit('onPass', changetable)
	    		this.dialogFormVisible_sh = false
	    	}
	    }
	};
</script>
<style type="text/css" lang="scss">
	.audit{

	}
</style>