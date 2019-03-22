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
import DomeSeting from '@/view/domeseting/domeseting_w'//DomeSeting
//DomeSeting 例子
import Timeline from '@/view/domeseting/timeline/timeline'// timeline 时间轴
import Collapse from '@/view/domeseting/collapse/collapse'// collapse 折叠面板
import Carousel from '@/view/domeseting/carousel/carousel'// carousel 走马灯 轮播
import Card from '@/view/domeseting/card/card'// card 卡片化
import Popover from '@/view/domeseting/popover/popover'// card 弹框框
import Tooltip from '@/view/domeseting/tooltip/tooltip'// tooltip 文字提示
import Steps from '@/view/domeseting/steps/steps'// steps 步骤条
import Dropdown from '@/view/domeseting/dropdown/dropdown'// dropdown 下拉菜单
import Breadcrumb from '@/view/domeseting/breadcrumb/breadcrumb'// breadcrumb 面包屑
import Tabs from '@/view/domeseting/tabs/tabs'// tabs 标签页
import badgeTagProgress from '@/view/domeseting/badge-add-tag-add-progress/badge-add-tag-add-progress'//badge-add-tag-add-progress 标记和标签和进度条




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
				{
					path: '/main/domeseting',
					name: 'DomeSeting',
					meta:{auth:true,keepAlive: false},
					component: DomeSeting,
				},
				{
					path: '/main/domeseting/timeline',
					name: 'Timeline',
					meta:{auth:true,keepAlive: false},
					component: Timeline,
				},
				{
					path: '/main/domeseting/collapse',
					name: 'Collapse',
					meta:{auth:true,keepAlive: false},
					component: Collapse,
				},
				{
					path: '/main/domeseting/carousel',
					name: 'Carousel',
					meta:{auth:true,keepAlive: false},
					component: Carousel,
				},
				{
					path: '/main/domeseting/card',
					name: 'Card',
					meta:{auth:true,keepAlive: false},
					component: Card,
				},
				{
					path: '/main/domeseting/popover',
					name: 'Popover',
					meta:{auth:true,keepAlive: false},
					component: Popover,
				},
				{
					path: '/main/domeseting/tooltip',
					name: 'Tooltip',
					meta:{auth:true,keepAlive: false},
					component: Tooltip,
				},
				{
					path: '/main/domeseting/steps',
					name: 'Steps',
					meta:{auth:true,keepAlive: false},
					component: Steps,
				},
				{
					path: '/main/domeseting/dropdown',
					name: 'Dropdown',
					meta:{auth:true,keepAlive: false},
					component: Dropdown,
				},
				{
					path: '/main/domeseting/breadcrumb',
					name: 'Breadcrumb',
					meta:{auth:true,keepAlive: false},
					component: Breadcrumb,
				},
				{
					path: '/main/domeseting/tabs',
					name: 'Tabs',
					meta:{auth:true,keepAlive: false},
					component: Tabs,
				},
				{
					path: '/main/domeseting/badgeTagProgress',
					name: 'badgeTagProgress',
					meta:{auth:true,keepAlive: false},
					component: badgeTagProgress,
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
