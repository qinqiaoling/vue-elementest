<template>
	<div class="change_user_dialog">
		<el-dialog title="账户信息修改" :visible.sync="dialogformchangevisible" center width="300px">
			<el-form :model="changeuserform" ref="changeuserform" :rules="rules_change_user" status-icon>
			    <el-form-item label="账号" :label-width="formLabelWidth" prop="change_username">
			      	<el-input v-model="changeuserform.change_username" autocomplete="off"></el-input>
			    </el-form-item>
			    <el-form-item label="手机号" :label-width="formLabelWidth" prop="iphone">
			      	<el-input v-model="changeuserform.iphone" autocomplete="off"></el-input>
			    </el-form-item>
			</el-form>
		  	<div slot="footer" class="dialog-footer">
		    	<el-button type="primary" @click="dialogformchangevisible_true('changeuserform')">确 定</el-button>
		    	<el-button @click="dialogformchangevisible=false">取 消</el-button>
		  	</div>
		</el-dialog>
	</div>
</template>
<script>
	export default {
		name:'ChangeUserDialog',
	    data() {
	    	var username_a = (rule, value, callback) => {
	    		// console.log(rule)
		        if (value === '') {
		          	callback(new Error('请输入账户'));
		        } else {
		          	if (this.changeuserform.iphone !== '') {
		            	this.$refs.changeuserform.validateField('iphone');
		          	}
		          	callback();
		        }
		    };
		    var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/ ;
		    var validatePhone = (rule, value, callback) => {
		      	if (!value) {
		        	return callback(new Error('手机号不能为空!!'))
		      	}
		      	setTimeout(() => {
			        if (!phoneReg.test(value)) {
			          	callback(new Error('手机号格式有误'))
			        } else {
			          	callback()
			        }
		      	}, 1000)
		    };
	      	return {
		        changeuserform: {
		          	change_username: '',
		          	iphone: '',
		        },
		        rules_change_user: {
					change_username: [
						{ validator: username_a, trigger: 'blur' },
						{type: 'string', min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur'}
					],
					iphone: [
						{ validator: validatePhone, trigger: 'blur' }
					],
		        },
		        formLabelWidth: '100px',
		        dialogformchangevisible:false
	      	};
	    },
	    computed:{
	    	
	    },
	    mounted(){
	    },
	    methods:{
	    	// 初始化
	      	init () {
		        this.dialogformchangevisible = true
		        this.$nextTick(() => {
		          this.$refs['changeuserform'].resetFields()
		        })
	      	},
	    	dialogformchangevisible_true(formName_a){
	    		this.$refs[formName_a].validate((valid) => {
					if (valid) {
						alert('submit!');
						let password_json=JSON.parse(sessionStorage.getItem('watchStorage')).password;
						let changeuserform_a={
							'username':this.changeuserform.change_username,
							'password':password_json,
							'iphone':this.changeuserform.iphone
						};
						this.GLOBAL.resetSetItem('watchStorage', JSON.stringify(changeuserform_a));
						this.dialogformchangevisible=false
					} else {
						alert('error submit!!');
					}
		        });
	    	}
	    },
  	};
</script>
<style type="text/css" lang="scss">
	.change_user_dialog{
		.el-form-item__label{
			text-align-last: justify;
		}
	}
</style>