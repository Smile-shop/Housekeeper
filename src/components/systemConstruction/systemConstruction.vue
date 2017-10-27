<template>
	<div class="systemConstruction_container">
		<p class="systemConstruction_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click="goback">
			<span>制度建设</span>
		</p>
		<div class="main">
			<el-form :label-position="labelPosition" label-width="115px">
				  <el-form-item label="企业名称:">
				    <el-input v-model="full_name" :disabled="true"></el-input>
				  </el-form-item>
				  <el-form-item label="经营许可证号:">
				    <el-input v-model="code" :disabled="true"></el-input>
				  </el-form-item>
				  <el-form-item label="法人:">
				    <el-input v-model="legal_person" :disabled="true"></el-input>
				  </el-form-item>
				  <el-form-item label="质量负责人:">
				    <el-input v-model="quality_controller" :disabled="true"></el-input>
				  </el-form-item>
				  <el-form-item label="地址:">
				    <el-input type="textarea" v-model="address" :disabled="true"></el-input>
				  </el-form-item>
				  <el-form-item label="制度批准人:">
				    <el-input v-model="legal_person" :disabled="true"></el-input>
				  </el-form-item>
			</el-form>	  
			<mt-button type="primary" class="yijianbtn" @click="yijian">{{text}}</mt-button>
		</div>
	</div>
</template>

<script type="text/javascript">
	//import './systemConstruction.scss'
	export default {
		data(){
			return {
				labelPosition:'right',
				full_name:'',
				code:'',
				legal_person:'',
				quality_controller:'',
				address:'',
				data:'',
				id:'',
				text:'',
				status:''
			}
		},
		created(){
			this.$http.get(baseUrl+'/findStore').then((res)=>{
	              	console.log(res)
	              	if(res.data.retCode === 0){
	              		this.id = res.data.data.id;
						this.full_name = res.data.data.full_name;
						this.code = res.data.data.code;
						this.legal_person = res.data.data.property.legal_person;
						this.quality_controller = res.data.data.property.quality_controller;
						this.address = res.data.data.address;
						this.status = res.data.data.status
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
	              	if (res.data.data.status === 1) {
	              		this.text = '查看制度'
	              	}else if(res.data.data.status === 2){
	              		this.text = '一键制度'
	              	}
		          },(err)=>{
		             console.log(err)
		          });
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
			yijian(){
				if(this.status == 1){
					this.$http.get(baseUrl+'/findRegularFile').then((res)=>{
	              	console.log(res)
	              	if(res.data.retCode === 0){
	              		this.data = res.data.data;
	              		let data = JSON.stringify({data:this.data})
						sessionStorage.setItem('data',data)
	              		this.$router.push({name:'rules'});
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
	              	
		          },(err)=>{
		             console.log(err)
		          });
				}else if(this.status == 2){
					this.$http.get(baseUrl+'/buildRegularFile').then((res)=>{
	              	console.log(res)
	              	if(res.data.retCode === 0){
	              		this.data = res.data.data;
	              		let data = JSON.stringify({data:this.data})
						sessionStorage.setItem('data',data)
	              		this.$messagebox.alert("操作成功！");
	              		this.$router.push({name:'rules'});
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
	              	
		          },(err)=>{
		             console.log(err)
		          });
				}
			}
		}
	}
</script>
<style lang="scss" src="./systemConstruction.scss"></style>