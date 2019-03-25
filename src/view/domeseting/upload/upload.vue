<template>
	<div class="upload">
		<div class="goback">
			<el-button type="primary" @click="goback()" icon="el-icon-back">返回上一级</el-button>
		</div>
		<div class="carouseldome">
			<div class="radio1">上传组件：</div>
			<el-upload
				class="upload-demo"
				action="https://jsonplaceholder.typicode.com/posts/"
				:on-preview="handlePreview"
				:on-remove="handleRemove"
				:before-remove="beforeRemove"
				multiple
				:limit="3"
				:on-exceed="handleExceed"
				:file-list="fileList1">
				<el-button size="small" type="primary">点击上传</el-button>
				<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
			</el-upload>
			<div class="radio1">图片缩略图：</div>
			<div class="block">
				<el-upload
					class="upload-demo"
					action="https://jsonplaceholder.typicode.com/posts/"
					:on-preview="handlePreview"
					:on-remove="handleRemove"
					:file-list="fileList2"
					list-type="picture">
					<el-button size="small" type="primary">点击上传</el-button>
					<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
			</div>
			<div class="radio1">照片墙：</div>
			<!-- 使用 list-type 属性来设置文件列表的样式。 -->
			<div class="block">
				<el-upload
				  	action="https://jsonplaceholder.typicode.com/posts/"
				  	list-type="picture-card"
				  	:on-preview="handlePictureCardPreview"
				  	:on-remove="handleRemove">
				  	<i class="el-icon-plus"></i>
				</el-upload>
				<el-dialog :visible.sync="dialogVisible">
				  	<img width="100%" :src="dialogImageUrl" alt="">
				</el-dialog>
			</div>
			<div class="radio1">用户头像上传：</div>
			<!-- 使用 before-upload 限制用户上传的图片格式和大小。 -->
			<div class="block">
				<el-upload
					class="avatar-uploader"
					action="https://jsonplaceholder.typicode.com/posts/"
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload">
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</div>
			<div class="radio1">上传文件列表控制：</div>
			<!-- 通过 on-change 钩子函数来对列表进行控制 -->
			<div class="block">
				<el-upload
					class="upload-demo"
					action="https://jsonplaceholder.typicode.com/posts/"
					:on-change="handleChange"
					:file-list="fileList3">
					<el-button size="small" type="primary">点击上传</el-button>
					<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
			</div>
			<div class="radio1">拖拽上传：</div>
			<div class="block">
				<el-upload
					class="upload-demo"
					drag
					action="https://jsonplaceholder.typicode.com/posts/"
					multiple>
					<i class="el-icon-upload"></i>
					<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
					<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
			</div>
			<div class="radio1">手动上传：</div>
			<div class="block">
				<el-upload
					class="upload-demo"
					ref="upload"
					action="https://jsonplaceholder.typicode.com/posts/"
					:on-preview="handlePreview"
					:on-remove="handleRemove"
					:file-list="fileList4"
					:auto-upload="false">
					<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
					<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
					<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'',
		data (){
			return {
				cardimg: '../../../static/images/no_img.jpg',
				dialogVisible: false,
				dialogImageUrl: null,
				imageUrl: '',
        		fileList1: [
        			{
        				name: 'food.jpeg', 
        				url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        			}, 
        			{
        				name: 'food2.jpeg', 
        				url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        			}
        		],
        		fileList2: [
        			{
        				name: 'food.jpeg', 
        				url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        			}, 
        			{
        				name: 'food2.jpeg', 
        				url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        			}
        		],
        		fileList3: [
        			{
        				name: 'food.jpeg', 
        				url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        			}, 
        			{
        				name: 'food2.jpeg', 
        				url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        			}
        		],
        		fileList4: [
        			{
        				name: 'food.jpeg', 
        				url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        			}, 
        			{
        				name: 'food2.jpeg', 
        				url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        			}
        		]
		    }
		},
		mounted(){
			
		},
		computed: {
		    
		},
		methods:{
			goback(){
				this.$router.push('/main/domeseting');
			},
			handleRemove(file, fileList) {
		        console.log(file, fileList);
		    },
		    handlePreview(file) {
		        console.log(file);
		    },
		    handleExceed(files, fileList) {
		        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
		    },
		    handlePictureCardPreview(file) {
		        this.dialogImageUrl = file.url;
		        this.dialogVisible = true;
		    },
		    handleAvatarSuccess(res, file) {
		        this.imageUrl = URL.createObjectURL(file.raw);
		    },
		    beforeRemove(file, fileList) {
		        return this.$confirm(`确定移除 ${ file.name }？`);
		    },
		    handleChange(file, fileList) {
		        this.fileList = fileList.slice(-3);
		    },
		    beforeAvatarUpload(file) {
		        const isJPG = file.type === 'image/jpeg';
		        const isLt2M = file.size / 1024 / 1024 < 2;
		        if (!isJPG) {
		          	this.$message.error('上传头像图片只能是 JPG 格式!');
		        }
		        if (!isLt2M) {
		          	this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isJPG && isLt2M;
		    },
		    submitUpload() {
		        this.$refs.upload.submit();
		    },
		},
		watch:{
			
		}
	}
</script>
<style type="text/css" lang="scss" scoped="scoped">
	/deep/.upload{
		.goback{
			text-align: left;
		}
		.radio1{
			padding:20px 0;
		}
		.carouseldome{
			text-align: left;
			background: #fff;
			padding: 20px;
		}
		.avatar-uploader .el-upload {
			border: 1px dashed #d9d9d9;
			border-radius: 6px;
			cursor: pointer;
			position: relative;
			overflow: hidden;
		}
		.avatar-uploader .el-upload:hover {
			border-color: #409EFF;
		}
		.avatar-uploader-icon {
			font-size: 28px;
			color: #8c939d;
			width: 178px;
			height: 178px;
			line-height: 178px;
			text-align: center;
		}
		.avatar {
			width: 178px;
			height: 178px;
			display: block;
		}
	}
</style>