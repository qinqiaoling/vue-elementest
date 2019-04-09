<template>
	<div class="echartsdome">
		<div class="echarts" id="myChart"></div>
		<div class="echarts" id="myChart_a"></div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:"echartsdome",
		data () {
			return {
				xdata:["2019-04-01", "2019-04-02", "2019-04-03", "2019-04-04"]
			}
		},
		computed:{
	    	
	    },
	    mounted(){
	    	this.drawLine();
	    	this.bar();
	    },
	    methods:{
	    	drawLine() {
				// 基于准备好的dom，初始化echarts实例
				var fontSize = $('html').css('fontSize').replace('px', '');
				let myChart_a = this.$echarts.init(document.getElementById('myChart_a'));
				//或者使用class获取div
				//var myChart = this.$echarts.init($('.chart').get(0));
				// 绘制图表
				let option = {
		    		title: { 
		    			text: 'ECharts K线图' ,
		    			textStyle:{
			                color:'#4d4d4d',
			                fontSize: fontSize*0.8,//动态改变字体大小
			            },
		    		},
					tooltip: {},
					xAxis: {
					  	data: this.xdata
					},
					yAxis: {},
					series: [{
					  	name: 'k线图',
					  	type: 'k',
					  	itemStyle:{
					  		normal:{
					  			color: '#f00',//阳线填充色
					  			color0:'blue',//阴线填充色
					  			lineStyle:{
					  				width: 5,
					  				color:'#000',
					  				color0:'yellow'
					  			},
					  		}
					  	},
					  	markPoint : {
			                symbol: 'star',
			                symbolSize:1,
			                itemStyle:{
			                    normal:{
			                    	label:{
			                    		position:'top',
			                    		textStyle:{
			                    			fontSize:14,
			                    			color:'#000'
			                    		}
			                    	}
			                    }
			                },
			                data : this.markp(),
			            },
					  	data: this.updataKline(),//每个数组【开盘，收盘，最低，最高】
					}]
		    	}
		    	//更新数据
		    	option.title.text = "ECharts";
			    console.log(option) 
				myChart_a.setOption(option,true);
				window.onresize = function(){
				    myChart_a.resize();    //若有多个图表变动，可多写
				}
		    },
		    bar(){
		    	let myChart = this.$echarts.init(document.getElementById('myChart'));
		    	myChart.setOption({
					title: { text: 'ECharts 入门示例' },
					tooltip: {},
					xAxis: {
					  	data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
					},
					yAxis: {},
					series: [{
					  	name: '销量',
					  	type: 'bar',
					  	data: [5, 20, 36, 10, 10, 20]
					}]
				},true);
				window.onresize = myChart.resize;
		    },
		    updataKline(){
		    	let a = [20,10,-50,60,10];
	    		let c0 = [];//二维数组第一列单个数组
	    		let c1 = [];//二维数组第二列单个数组
	    		let d = a[0];//单个数组的第一个数
	    		let e = 0;//单个数组的第二个数
	    		for(let i = 0;i < a.length - 1;i ++ ){
	    			d = d + a[i + 1];
	    			c1.push(d);
	    		}
	    		for(let j = 0;j < a.length - 1;j ++ ){
    				e = e + a[j];
    				c0.push(e);
    			}
    			//map,多个一维数组可以合并成一个多维数组
    			c0 = c0.map((key, value, index, item) => [key, c1[value], key>c1[value]?c1[value]:key, key>c1[value]?key:c1[value]]);
    			console.log(c0,c1);
    			return c0;
		    },
		    markp(){
		    	let markpdata = [];
	    		let markpobj = {};
	    		this.updataKline().forEach((item,index) => {
	    			markpobj = {};
	    			markpobj.xAxis = this.xdata[index];
	    			markpobj.yAxis = Math.max.apply(Math,item);
	    			markpobj.value = Math.max.apply(Math,item) - Math.min.apply(Math,item);
	    			markpdata.push(markpobj);
	    			console.log(markpobj);
	    		});
	    		return markpdata;
		    }
	    },
	    watch:{
	    	
	    }
	}
</script>
<style type="text/css" lang="scss" scoped="scoped">
	/deep/.echartsdome{
		.echarts{
			width: 100%;
			height:-moz-calc((100vh - 100px)/2);
    		height:-webkit-calc((100vh - 100px)/2);
    		height: calc((100vh - 100px)/2);
		}
	}
</style>