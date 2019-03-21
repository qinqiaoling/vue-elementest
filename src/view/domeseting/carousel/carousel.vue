<template>
	<div class="carousel">
		<div class="goback">
			<el-button type="primary" @click="goback()" icon="el-icon-back">返回上一级</el-button>
		</div>
		<div class="carouseldome">
			<div class="radio">排序：
			    <el-radio-group v-model="indicatorPosition">
			      	<el-radio label="outside">指示器在外面</el-radio>
			      	<el-radio label="">指示器在里面</el-radio>
			      	<el-radio label="none">没有指示器</el-radio>
			    </el-radio-group>
		  	</div>
		  	<div class="radio">走马灯的类型：
			    <el-radio-group v-model="carouseltype">
			      	<el-radio label="card">card</el-radio>
			      	<el-radio label="">no card</el-radio>
			    </el-radio-group>
		  	</div>
		  	<div class="radio">切换箭头的显示时机：
			    <el-radio-group v-model="carouselarrow">
			      	<el-radio label="hover">hover 才在</el-radio>
			      	<el-radio label="always">always 一直在</el-radio>
			      	<el-radio label="never">never 没有</el-radio>
			    </el-radio-group>
		  	</div>
		  	<el-carousel 
		  		:interval="40000" 
		  		:type="carouseltype" 
		  		:arrow="carouselarrow" 
		  		height="200px" 
		  		@change="setActiveItem"
		  		ref="carouselclick"
		  		:indicator-position="indicatorPosition">
			    <el-carousel-item 
			    	:name="'item'"
			    	:label="item"
			    	v-for="item in 6" 
			    	:key="item">
			      	<h3>{{ item }}</h3>
			    </el-carousel-item>
			</el-carousel>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'Carousel',
		data (){
			return {
				indicatorPosition:'outside',
				carouseltype:'card',
				carouselarrow:'hover',
			}
		},
		mounted(){

		},
		methods:{
			goback(){
				this.$router.push('/main/domeseting');
			},
			setActiveItem(val){
				console.log(val)
			},
		},
		watch:{

		}
	}
</script>
<style type="text/css" lang="scss" scoped="scoped">
	/deep/.carousel{
		.goback{
			text-align: left;
		}
		.carouseldome{
			text-align: left;
			background:#fff;
			padding: 10px;
			.el-carousel__item h3 {
			    color: #475669;
			    font-size: 14px;
			    opacity: 0.8;
			    line-height: 200px;
			    margin: 0;
			}
			.el-carousel__item:nth-child(2n) {
			    background-color: #99a9bf;
			}
			.el-carousel__item:nth-child(2n+1) {
			    background-color: #d3dce6;
			}
			.el-carousel__button{
				background:#f00;
			}
		}
	}
</style>