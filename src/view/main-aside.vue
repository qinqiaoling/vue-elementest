<template>
	<div class="main-aside">
		<div class="user">
			<div class="user_img"><img :src="user_img" @click="chnage_user()"></div>
			<div class="user_name">{{user_name}}</div>
			<div class="user_Administrator">{{user_Administrator}}</div>
		</div>
		<el-scrollbar>
			<el-menu 
				:default-openeds="openeds"
				background-color="#2f4050"
				text-color="#C9C9C9"
	      		active-text-color="#409eff"
	      		horizontal
	      		:default-active="$route.path"
	      		unique-opened
	      		@open="handleOpen"
	      		@close="handleClose"
	      		router>
				<el-submenu :index="sub.indexs" v-for="(sub,i) in submenu" :key="i">
					<template slot="title"><i class="el-icon-edit"></i>{{sub.text}}</template>
					<el-menu-item-group>
					  <el-menu-item :index="sub.urlpath">{{sub.text}}</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
		    </el-menu>
		</el-scrollbar>
		<ChnageUserDialog v-if="change_dialog" ref="change_users"></ChnageUserDialog>
	</div>
</template>
<script>
	import ChnageUserDialog from './change_user_dialog'
	export default {
		name : "MainAside",
		data () {
			return {
				user_img:'../../static/images/no_img.jpg',
				user_name:JSON.parse(sessionStorage.getItem('watchStorage')).username,
				user_Administrator:'系统管理员',
				change_dialog:false,
				openeds:['1'],
				submenu:[
					{
						indexs:'1',
						text:'考生审核',
						urlpath:'/main/examinee-review',
					},{
						indexs:'2',
						text:'面试管理',
						urlpath:'/main/interview-management',
					},{
						indexs:'3',
						text:'结果统计',
						urlpath:'/main/statistical-result',
					},{
						indexs:'4',
						text:'树形表格',
						urlpath:'/main/tree-table',
					}
				]
			}
		},
		components:{
			ChnageUserDialog
	    },
	    computed:{
	    	
	    },
	    created() {
			window.addEventListener('setItem', ()=> {
				this.user_name = JSON.parse(sessionStorage.getItem('watchStorage')).username;
			})
		},
	    mounted:function() { 
	    }, 
	    methods:{
	    	handleOpen(key, keyPath) {
	    		//打开右侧栏
		        console.log('打开：'+key, keyPath);
		        this.openeds=keyPath
		    },
		    handleClose(key, keyPath) {
		    	//关闭右侧栏
		        console.log('关闭：'+key, keyPath);
		    },
		    chnage_user(){
		    	this.change_dialog=true
		    	this.$nextTick(() => {
		          this.$refs.change_users.init()
		        })
		    }
	    },
	    watch:{
	    	
	    }
	}
</script>
<style type="text/css" lang="scss">
	.main-aside{
		.user{
			color: #C9C9C9;
			text-align: center;
			background:#263949;
			padding: 30px 0;
			border-right: solid 1px #e6e6e6;
			.user_img{
				img{
					width: 80px;
					height: 80px;
					border-radius: 50%;
					cursor: pointer;
				}
			}
			.user_name{
				font-size: 16px;
				color: #fff;
				padding:10px 0;
			}
		}
	}
</style>