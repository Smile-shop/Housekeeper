<template>
	<div class="FirstBusiness_container">
		<p class="FirstBusiness_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click=goback>
			<span>首营企业与产品自检</span>
		</p>
		<div class="main">
			<p class="title">供货企业合规信息登记表</p>
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			  <el-form-item label="企业名称:">
			    <el-input v-model="qymc"></el-input>
			  </el-form-item>
			  <span class="lx">企业类型:</span>
			  <el-select v-model="qylx" placeholder="请选择企业类型">
			      <el-option label="生产企业" value="1" ></el-option>
			      <el-option label="经营企业" value="2" ></el-option>
			  </el-select>
			  <el-form-item label="组织机构代码:">
			    <el-input v-model="zzjgdm"></el-input>
			  </el-form-item>
			  <el-form-item label="卫生许可证号:">
			    <el-input v-model="wsxkzh"></el-input>
			  </el-form-item>
			</el-form>
			<span class="yy">组织机构代码证(社会信用代码证）复印件（当年年检）:</span>
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
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			  <el-form-item label="检验结论:">
			    <el-input v-model="jyjl"></el-input>
			  </el-form-item>
			</el-form>
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
		        qymc:'',
		        qylx:'',
		        zzjgdm:'',
		        wsxkzh:'',
        		file1:'',
        		file2:'',
        		imageUrl: '',
        		imageUrl1: '',
        		data:'',
        		jyjl:'',
        		text:'提交'
			}
		},
		created(){
			
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
			tijiao(){
				let formData = new FormData();
	            formData.append('enterprise_name', this.qymc);
	            formData.append('enterprise_type', this.qylx);
	            formData.append('enterprise_scid', this.zzjgdm);
	            formData.append('health_permit', this.wsxkzh);
	            formData.append('conclusion', this.jyjl);
	            formData.append('enterprise_scid_img', this.file1);
	            formData.append('health_permit_img', this.file2);
	 			
	            let config = {
	              headers: {
	                'Content-Type': 'multipart/form-data'
	              }
	            }
	            this.$http.post(baseUrl+'/addSupplier',formData,config).then((res)=>{
		              	console.log(res)
		              	if(res.data.retCode === 0){
		              		this.$messagebox.alert('操作成功!').then(action => {
		              			this.$router.push({name:'Result2',params:{qymc:this.qymc}})
 							});
		              	}else{
		              		this.$messagebox.alert(res.data.retMessage);
		              	}
			          },(err)=>{
			              console.log(err)
			          });
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