import Vue from 'vue'
import Router from 'vue-router'
import No from '@/components/error'//访问错误页面
//页面配置
import Main from '@/view/main'//main页面
import Content from '@/components/content'//首页
import Login from '@/components/login'//登录
//main 右侧页面配置
import ExamineEreview from '@/view/examinee-review/examinee-review'//考生审核
import InterviewManagement from '@/view/interview-management/interview-management'//考生审核
import StatisticalResult from '@/view/statistical-result/statistical-result'//考生审核
import TreeTable from '@/view/tree-table/tree-table'//树形表格

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/error',
			name: 'No',
			meta:{auth:true,keepAlive: false},
			component: No
		},
		{
			path:'/',
			redirect:{
				name:'Login'
			}
		},
		{
			path: '/login',
			name: 'Login',
			meta:{auth:true,keepAlive: false},
			component: Login
		},
		{
			path: '/main',
			name: 'Main',
			meta:{auth:true,keepAlive: false},
			component: Main,
			children:[
				{
					path: '/main/examinee-review',
					name: 'ExamineEreview',
					meta:{auth:true,keepAlive: false},
					component: ExamineEreview
				},
				{
					path: '/main/interview-management',
					name: 'InterviewManagement',
					meta:{auth:true,keepAlive: false},
					component: InterviewManagement
				},
				{
					path: '/main/statistical-result',
					name: 'StatisticalResult',
					meta:{auth:true,keepAlive: false},
					component: StatisticalResult
				},
				{
					path: '/main/tree-table',
					name: 'TreeTable',
					meta:{auth:true,keepAlive: false},
					component: TreeTable
				},
			]
		},
		{
			path: '/content',
			name: 'Content',
			meta:{auth:true,keepAlive: false},
			component: Content
		},
	]
})
