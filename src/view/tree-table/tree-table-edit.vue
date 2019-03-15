<template>
	<div class="tree-table-edit">
		<el-dialog title="编辑信息" :visible.sync="editdialogformchangevisible" center>
			<el-form :model="editform" ref="editform" :rules="rules_change_edit" status-icon>
			    <el-form-item label="编辑内容" prop="desc">
			      	<el-input type="textarea" v-model="editform.desc" :autosize="{ minRows: 4, maxRows: 6}"></el-input>
			    </el-form-item>
			</el-form>
		  	<div slot="footer" class="dialog-footer">
		    	<el-button @click="editdialogformchangevisible=false">取 消</el-button>
		    	<el-button type="primary" @click="dialogformchangevisible_true('editform')">确 定</el-button>
		  	</div>
		</el-dialog>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				editform:{
					desc:''
				},
				rules_change_edit:{
					desc: [
			            { required: true, message: '请填写编辑内容', trigger: 'blur' }
			        ]
				},
				editdialogformchangevisible:false,
				ids:'',
			}
		},
		mounted(){

		},
		props:['messagedata'],
		methods:{
			init(id){
				this.editdialogformchangevisible = true
				this.$nextTick(() => {
		          	this.$refs['editform'].resetFields()
		          	this.ids = id
		        })
		        console.log(id)
			},
			dialogformchangevisible_true(val){
				this.$refs[val].validate((valid) => {
					if (valid) {
						alert('submit!');
						let messagedata={
							text:this.editform.desc,
							id:this.ids
						}
						this.$emit('bindtextarea',messagedata);
						this.editdialogformchangevisible = false
					} else {
						alert('error submit!!');
						this.editdialogformchangevisible = false
					}
		        });
			}
		},
		watch:{

		}
	}
</script>
<style type="text/css" lang="scss" scoped="scoped">
	.tree-table-edit{

	}
</style>