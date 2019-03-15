<template>
	<div class="interviewSeting">
		<el-dialog title="面试设置" :visible.sync="dialogformsetvisible" center width="54%">
			<div class="exam_table_sh">
				<el-form :model="changesetform" ref="changesetform" :rules="rules_change_user" status-icon>
				    <el-form-item label="面试人数" :label-width="formLabelWidth" prop="person">
				      	<el-input v-model.number="changesetform.person" autocomplete="off"></el-input>
				    </el-form-item>
				    <el-form-item label="面试通过分数" :label-width="formLabelWidth" prop="scroce">
				      	<el-input v-model.number="changesetform.scroce" autocomplete="off"></el-input>
				    </el-form-item>
				</el-form>
			</div>
		  	<div slot="footer" class="dialog-footer">
		    	<el-button @click="dialogformchangevisible_true('changesetform')">设 置</el-button>
		    	<el-button type="primary" @click="dialogformsetvisible = false">取 消</el-button>
		  	</div>
		</el-dialog>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'interviewSeting',
	    data() {
	    	var person_a = (rule, value, callback) => {
	    		// console.log(rule)
		        if (value === '') {
		          	callback(new Error('请输入面试人数'));
		        } else {
		          	if (this.changesetform.scroce !== '') {
		            	this.$refs.changesetform.validateField('scroce');
		          	}
		          	callback();
		        }
		    };
		    var numReg = /^[1-9]\d*$/;
		    var scroce_a = (rule, value, callback) => {
		      	if (!value) {
		        	return callback(new Error('请输入分数!!'))
		      	}
		      	setTimeout(() => {
			        if (!numReg.test(value)) {
			          	callback(new Error('请输入正确分数'))
			        } else {
			          	callback()
			        }
		      	}, 1000)
		    };
	      	return {
		        changesetform: {
		          	person: '',
		          	scroce: '',
		        },
		        rules_change_user: {
					person: [
						{ validator: person_a, trigger: 'blur' },
						{type: 'number',  min: 1, max: 10, message: '人数必须在 1 - 10 之间', trigger: 'blur'}
					],
					scroce: [
						{ validator: scroce_a, trigger: 'blur' },
						{type: 'number', min: 0, max: 100, message: '分数必须在 1 - 100 之间', trigger: 'blur'}
					],
		        },
		        formLabelWidth: '100px',
		        dialogformsetvisible:false
	      	};
	    },
	    computed:{
	    	
	    },
	    mounted(){
	    },
	    props:['changearray'],
	    methods:{
	    	// 初始化
	      	init () {
		        this.dialogformsetvisible = true
		        this.$nextTick(() => {
		          this.$refs['changesetform'].resetFields()
		        })
	      	},
	    	dialogformchangevisible_true(formName_a){
	    		this.$refs[formName_a].validate((valid) => {
					if (valid) {
						alert('submit!');
						let changearray=0;
						changearray = this.changesetform.person
						this.$emit('onChange_a',changearray);
						this.dialogformsetvisible=false
					} else {
						alert('no submit!!');
					}
		        });
	    	}
	    },
  	};
</script>
<style type="text/css" lang="scss">
	.interviewSeting{
		.el-form-item__label{
			text-align-last: justify;
		}
	}
</style>