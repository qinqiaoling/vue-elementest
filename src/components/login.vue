<template>
	<div class="login" id="Login">
		<div class="login_bj">
			<div class="login_wrap">
				<div class="login_wrap_bj">
					<div class="login_title">登录</div>
					<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
						<el-form-item label="账号" prop="username">
							<el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item label="确认密码" prop="password">
							<el-input type="password" v-model="ruleForm2.password" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item class="submit_button">
							<el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
							<!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
						</el-form-item>
					</el-form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Login',
		data () {
			var username_a = (rule, value, callback) => {
		        if (value === '') {
		          	callback(new Error('请输入账户'));
		        } else {
		          	if (this.ruleForm2.password !== '') {
		            	this.$refs.ruleForm2.validateField('password');
		          	}
		          	callback();
		        }
		    };
		    var password_a = (rule, value, callback) => {
		        if (value === '') {
		         	 callback(new Error('请输入密码'));
		        } else {
		          	callback();
		        }
		    };
	        return {
	            ruleForm2: {
					username: '',
					password: '',
		        },
		        rules2: {
					username: [
						{ validator: username_a, trigger: 'blur' },
						{type: 'string', min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur'}
					],
					password: [
						{ validator: password_a, trigger: 'blur' },
						{type: 'string', min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur'}
					],
		        }
	        }
	    },
	    components:{
	        
	    },
	    mounted:function() { 
	    }, 
	    methods:{
	        submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
						this.GLOBAL.resetSetItem('watchStorage', JSON.stringify(this.ruleForm2));
						this.$store.commit('changeadmin',{
							username: this.ruleForm2.username,
							password: this.ruleForm2.password,
							iphone: this.$store.state.admin.iphone
						});
						this.$router.push('/main/examinee-review');
					} else {
						alert('error submit!!');
						return false;
					}
		        });
		    },
	    },
	    watch:{
	        // $route(to, from) {
	        //     //监听路由变化
	        //     // to , from 分别表示从哪跳转到哪，都是一个对象
	        //     // to.path  ( 表示的是要跳转到的路由的地址 eg: /home );
	        //     if(this.$route){
	        //     }
	        //     console.log(to);
	        //     console.log(from);
	        // }
	    }
	}
</script>
<style lang="scss">
	.login{
		position: relative;
		.login_bj{
			background: url('../../static/images/login_bj.png') no-repeat 50% 50%;
			background-size:cover;
			width: 100%;
    		height: 100vh;
    		.login_wrap{
    			display: box;
			    display: -webkit-box;
			    display: -moz-box;
			    display: -ms-flexbox;
			    display: -webkit-flex;
			    display: flex;
			    -webkit-box-pack: flex-end;
			    -webkit-justify-content: flex-end;
			    -moz-justify-content: flex-end;
			    -ms-justify-content: flex-end;
			    -o-justify-content: flex-end;
			    justify-content: flex-end;
			    -webkit-box-align: center;
			    -webkit-align-items: center;
			    -moz-align-items: center;
			    -ms-align-items: center;
			    -o-align-items: center;
			    align-items: center;
			    width: 100%;
			    height: 100%;
			    .login_wrap_bj{
			    	-webkit-box-shadow: 1px 0px 10px #666;
				    box-shadow: 1px 0px 10px #666;
				    border-radius: 10px;
				    width: 400px;
				    color: #333;
				    background: #fff;
				    margin-right: 60px;
				    .login_title{
				    	text-align: center;
					    height: 80px;
					    line-height: 80px;
					    border-bottom: 1px solid #eee;
					    letter-spacing: 2px;
					    font-weight: bold;
					    font-size: 26px;
					    color: #DE2010;
					    margin-bottom: 30px;
				    }
				    .demo-ruleForm{
				    	padding: 0 60px 20px 60px;
				    	.el-form-item__label{
				    		text-align-last: justify;
				    	}
				    	.submit_button{
				    		padding-top: 20px;
				    		.el-form-item__content{
					    		margin-left: 0!important;
					    		.el-button{
					    			width: 100%;
					    		}
					    	}
				    	}
				    }
			    }
    		}
		}
	}
</style>