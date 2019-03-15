<!-- 使用slot 具名卡槽 before和after -->
<template>
	<div class="tree-table">
		<tree-table 
			:datas="dataarraytable" 
			:columns="columnsdata" 
			border 
			ref="getmultipleTable" 
			v-on:handle="getHandleSelectionChange">
			<el-table-column width="50" align="center" type="selection" slot="before"></el-table-column>
			<template slot="after">
				<el-table-column label="编辑内容">
		            <template slot-scope="scope">
		                <el-input
		                    placeholder="请输入内容"
		                    v-model="scope.row.input"
		                    size="medium"
		                    clearable>
		                </el-input>
		            </template>
		        </el-table-column>
		        <el-table-column label="操作">
		            <template slot-scope="scope">
		                <el-button type="primary" icon="el-icon-edit" size="medium" @click.native.prevent="edits(scope.$index, scope.row,dataarraytable)"></el-button>
		                <el-button type="primary" icon="el-icon-delete" size="medium" @click.native.prevent="removes(scope.$index, scope.row,dataarraytable)"></el-button>
		            </template>
		        </el-table-column>
			</template>
		</tree-table>
		<tree-table-edit 
			v-if="treetableedit" 
			ref="treetableedit" 
			v-on:bindtextarea="bindtextarea_val">
		</tree-table-edit>
	</div>
</template>
<script type="text/javascript">
	import treeTable from '@/template/treeTable/treeTable'
	import treeTableEdit from './tree-table-edit'
	export default {
		name: "TreeTable",
		data (){
			return {
				columnsdata: [
			        {
			          	text: '事件',
			          	value: 'event',
			          	width: 200
			        },
			        {
			          	text: 'ID',
			          	value: 'id',
			          	width:100,
			        },
			        {
			          	text: '时间线',
			          	value: 'timeLine',
			          	width:100,
			        },
			        {
			          	text: '备注',
			          	value: 'comment',
			          	width:100,
			        },
			    ],
			    dataarraytable: [{
					id: 0,
					event: '事件1',
					timeLine: 50,
					comment: '无',
		        },{
			        id: 1,
					event: '事件1',
					timeLine: 100,
					comment: '无',
			        children: [{
		              	id: 2,
		              	event: '事件2',
		              	timeLine: 10,
		              	comment: '无'
		            },{
		              	id: 3,
		              	event: '事件3',
		              	timeLine: 90,
		              	comment: '无',
		              	children: [
			                {
			                  	id: 4,
			                  	event: '事件4',
			                  	timeLine: 5,
			                  	comment: '无'
			                },
			                {
			                  	id: 6,
			                  	event: '事件6',
			                  	timeLine: 75,
			                  	comment: '无',
			                  	children: [
				                    {
				                      	id: 7,
				                      	event: '事件7',
				                      	timeLine: 50,
				                      	comment: '无',
				                      	children: [
					                        {
					                          	id: 71,
				                          		event: '事件71',
					                          	timeLine: 25,
					                          	comment: 'xx'
					                        },
				                      	]
				                    },
				                    {
				                      	id: 8,
				                      	event: '事件8',
				                      	timeLine: 25,
				                      	comment: '无'
				                    }
			                  	]
			                }
		              	]
		            }]
			    }],
			    getmultipleTable:[],
			    num:[
				    {
						id: 0,
						comment: '无',
			        },
			        {
				        id: 1,
						comment: '无',
						children:[
							{
								id: 6,
			                  	event: '事件6',
			                  	timeLine: '75',
			                  	comment: '无',
			                  	children: [
				                    {
				                      	id: 7,
				                      	event: '事件7',
				                      	timeLine: '50',
				                      	comment: '无',
				                      	children: [
					                        {
					                          	id: 71,
				                          		event: '事件71',
					                          	timeLine: '25',
					                          	comment: 'xx',
					                        },
				                      	]
				                    },
				                    {
				                      	id: 8,
				                      	event: '事件8',
				                      	timeLine: '25',
				                      	comment: '无',
				                    }
			                  	]
							}
						]
				    }
			    ],
			    treetableedit:false,
			}
		},
		components: { 
			treeTable,
			treeTableEdit
		},
		mounted(){
			//必须把data传过来的值dataarraytable赋值给getmultipleTable才能对数组进行增删查改
			this.getmultipleTable = this.dataarraytable
			this.dg(this.num,71,0,'ssss')
			this.re_dg(this.num,0)
		},
		methods:{
			//子组件传值给父组件的事件,并监听数组变化
            getHandleSelectionChange(val){
                this.getmultipleTable = val;
                console.log(this.getmultipleTable)
            },
			//点击移除这一行
            removes(index, row, rows){
                // const rowdata = rows.splice(index,1)
                // this.getmultipleTable = rowdata
                this.re_dg(rows,row.id)
                console.log(index, row, rows)
            },
            //解析递归数据 arrs是递归数组,id是唯一可搜索的标识,也可以是某个key
            dg(arrs,ids,status,text){
            	var returnedItem;
		        var find = function(arr, id){
		            arr.forEach((item) => { 
		                 if(item.id==id){        
		                    returnedItem = item;
		                    if(status==0){
					        	//编辑按钮
					        	returnedItem.comment = text
					        }
		                    return item;
		                 }else{
		                 	if(typeof(item.children)=='undefined'){
		                 		console.log(item)
		                 	}else{
		                 		if(item.children.length > 0){
			                    	find(item.children, id);                        
			                 	} 
		                 	}
		             	}                
		            })
		        }
		        var item = find(arrs, ids, status, text);
		        console.log(arrs);//打印数组
		        console.log(returnedItem);//id所在的一组json
            },
            //根据id删除递归数组中的某一项
            re_dg(arr,tag){
            	call(arr,tag);
            	var returnReArr;
            	function call(arr,tag){
				  	for(var i = arr.length ; i > 0 ; i--){
					    if(arr[i-1].id == tag){
					        arr = arr.splice(i-1,1);
					        return arr
					    }else{
					        if(arr[i-1].children){
					          call(arr[i-1].children,tag)
					        }
					    }
				  	}
				}
				console.dir(arr)
            },
            //点击编辑这一行,弹窗显示，并传入当前行id
            edits(index, row){
            	this.treetableedit = true
            	this.$nextTick(() => {
		          	this.$refs.treetableedit.init(row.id)
		        })
                console.log(index, row)
            },
            //监听子组件传来的值，并修改table当前行comment的值
            bindtextarea_val(val){
            	this.dg(this.dataarraytable,val.id,0,val.text)
            	console.log(val)
            }
		},
		watch:{

		}
	}
</script>
<style type="text/css" lang="scss">
	.tree-table{

	}
</style>