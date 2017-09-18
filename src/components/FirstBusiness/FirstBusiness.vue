<template>
	<div class="FirstBusiness_container">
		<p class="FirstBusiness_text">
			<img src="../../assets/imgs/arrow (1).png" class="goback" @click=goback>
			<span>首营企业与产品自检</span>
		</p>
		<div class="main">
			<p class="title">供货企业合规信息登记表</p>
			<el-form :label-position="labelPosition" label-width="95px">
			  <el-form-item label="许可查验人:">
			    <el-input v-model="xkcyr"></el-input>
			  </el-form-item>
			  <el-form-item label="许可查验日期:">
			    <el-input v-model="xkcydate"></el-input>
			  </el-form-item>
			  <el-form-item label="ANO:">
			    <el-input v-model="ANO"></el-input>
			  </el-form-item>
			  <el-form-item label="类别:">
			    <el-input v-model="lb"></el-input>
			  </el-form-item>
			  <el-form-item label="供货企业名称:">
			    <el-input v-model="ghqymc"></el-input>
			  </el-form-item>
			</el-form>
			<span class="yy">营业执照:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic1"
			  :auto-upload="false">
			  <img v-if="imageUrl" :src="imageUrl" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">化妆品生产企业卫生许可证:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic2"
			  :auto-upload="false">
			  <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<mt-button type="primary" class="search" @click = "tijiao">{{text}}</mt-button>
		</div>
	</div>
</template>

<script type="text/javascript">
	// import './FirstBusiness.scss'
	export default {
		data(){
			return {
				labelPosition:'right',
				// FirstBusiness:[['许可查验人:',xkcyr:''],
		  //       		       ['许可查验日期:','xkcydate'],
		  //       		       ['ANO:','ANO'],
		  //       		       ['类别:','lb'],
		  //       		       ['供货企业名称:','ghqymc']],
		        xkcyr:'',
		        xkcydate:'',
		        ANO:'',
		        lb:'',
		        ghqymc:'',
        		file1:'',
        		file2:'',
        		imageUrl: '',
        		imageUrl1: '',
        		data:'',
        		text:'提交'
			}
		},
		created(){
			if (this.data !== '') {
				this.text = '添加产品';
			}
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
			tijiao(){
				if (this.data !== '') {
					this.$router.push({name:'Incomplete'})
				}else if(this.data === ''){
					//发送提交请求
				}
			},
			handleRemove(file) {
	        	console.log(file);
	      	},
	      	handlePictureCardPreview(file) {
	        	this.dialogImageUrl = file.url;
	        	this.dialogVisible = true;
	      	},
	      	getpic1(file) {
		        this.imageUrl = URL.createObjectURL(file.raw);
		        console.log(file.raw,this.imageUrl)
		        this.file1 = file.raw;
		    },
		    getpic2(file) {
		        this.imageUrl1 = URL.createObjectURL(file.raw);
		        this.file2 = file.raw;
		    },
		}
	}
</script>
<style lang="scss" src="./FirstBusiness.scss"></style>