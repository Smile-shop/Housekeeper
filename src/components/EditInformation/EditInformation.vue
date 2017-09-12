<template>
	<div class="EditInformation_container">
		<p class="EditInformation_text">
			<img src="../../assets/imgs/arrow (1).png" class="EditInformationback" @click=goback>
			<span>修改企业信息</span>
		</p>
		<label for="companyname" class="q">企业名称：</label>
		<input type="text" id="companyname" placeholder="" class="companyname" v-model="companyname"><br>
		<label for="jnumber" class="j">经营许可证号：</label>
		<input type="text" id="jnumber" placeholder="" class="jnumber" v-model="jnumber"><br>
		<label for="fname" class="f">法人：</label>
		<input type="text" id="fname" placeholder="" class="fname" v-model="fname">
		<label for="fphonenumber" class="sj">手机号码：</label>
		<input type="text" id="fphonenumber" placeholder="" class="fphonenumber" v-model="fphonenumber"><br>
		<label for="zname" class="z">质量负责人：</label>
		<input type="text" id="zname" placeholder="" class="zname" v-model="zname">
		<label for="zphonenumber" class="s">手机号码：</label>
		<input type="text" id="zphonenumber" placeholder="" class="zphonenumber" v-model="zphonenumber"><br>
		<label for="dadress" class="d">地址：</label>
		<input type="text" id="dadress" placeholder="" class="dadress" v-model="dadress"><br>
		<div class="order">  
		   <span style="white-space:pre">   </span><span class="line" ></span>  
		   <span style="white-space:pre">   </span><span class="txt">附件</span>  
		   <span style="white-space:pre">   </span><span class="line"></span>  
		</div>  
		<a href="javascript:;" class="y">点击上传营业执照
			<input id="fileId1" type="file" accept="image/gif,image/jpeg,image/jpg,image/png" name="file" @change="onChange"/>
		</a>
		<a href="javascript:;" class="w">点击上传卫生许可证
			<input id="fileId2" type="file" accept="image/gif,image/jpeg,image/jpg,image/png" name="file" @change="onChange1"/>
		</a>
		<mt-button type="primary" class="EditInformationbtn" @click=EditInformation>提交</mt-button>
	</div>
</template>

<script type="text/javascript">
	//import './EditInformation.scss'
	export default {
		data(){
			return {
				companyname:'',
				jnumber:'',
				fname:'',
				fphonenumber:'',
				zname:'',
				zphonenumber:'',
				dadress:'',
				file1:'',
				file2:''
			}
		},
		created(){
			this.$http({
              url: baseUrl+'/findStore',
              method:'GET',
              }).then((res)=>{
              	console.log(res)
              	if(res.data.retCode === 0){
					this.companyname = res.data.data.full_name;
					this.jnumber = res.data.data.code;
					this.fname = res.data.data.property.legal_person;
					this.zname = res.data.data.property.quality_controller;
					this.dadress = res.data.data.address;
					this.fphonenumber = res.data.data.property.legal_mobile
					this.zphonenumber = res.data.data.property.quality_mobile
              	}else{
              		this.$messagebox.alert(res.data.retMessage);
              	}
	          },(err)=>{
	              console.log('failed');
	              this.$messagebox.alert("获取信息错误!");
	          });
		},
		methods:{
			onChange(event){
				this.file1 = event.target.files[0];
				console.log(this.file1)
			},
			onChange1(event){
				this.file2 = event.target.files[0];
				console.log(this.file2)
			},
			EditInformation(){
				console.log(this.phone,this.password)
				switch (''){
					case this.companyname:
						this.$messagebox.alert('企业名称不能为空！');
						return;
					case this.jnumber:
							this.$messagebox.alert('经营许可证号不能为空！');
							return;	
					case this.fname:
							this.$messagebox.alert('法人名称不能为空！');
							return;
					case this.fphonenumber:
						this.$messagebox.alert('法人手机号不能为空！');
						return;	
					case this.zname:
						this.$messagebox.alert('质量负责人名称不能为空！');
						return;	
					case this.zphonenumber:
						this.$messagebox.alert('质量负责人手机号不能为空！');
						return;
					case this.dadress:
						this.$messagebox.alert('地址不能为空！');
						return;			
				}
				if(!/^1[34578]\d{9}$/.test(this.fphonenumber)){
					this.$messagebox.alert('请输入正确的法人手机号');
					return;
				}
				if(!/^1[34578]\d{9}$/.test(this.zphonenumber)){
					this.$messagebox.alert('请输入正确的质量负责人手机号');
					return;
				}
				event.preventDefault();
	            let formData = new FormData();
	            formData.append('full_name', this.companyname);
	            formData.append('code', this.jnumber);
	            formData.append('legal_person', this.fname);
	            formData.append('legal_mobile', this.fphonenumber);
	            formData.append('quality_controller', this.zname);
	            formData.append('quality_mobile', this.zphonenumber);
	            formData.append('address', this.dadress);
	            formData.append('scid_img', this.file1);
	            formData.append('health_permit_img', this.file2);
	 			
	            let config = {
	              headers: {
	                'Content-Type': 'multipart/form-data'
	              }
	            }
	            this.$http.post(baseUrl+'/updateStore',formData,config).then((res)=>{
		              	console.log(res)
		              	if(res.data.retCode === 0){
		              		this.$messagebox.alert('修改成功!').then(action => {
		              			this.$router.push({name:'housekeeper'})
 							});
		              	}else{
		              		this.$messagebox.alert(res.data.retMessage);
		              	}
			          },function(err){
			              console.log('failed');
			              this.$messagebox.alert('修改失败,请稍后再试!');
			          });
			},
			goback(){
				this.$router.go(-1);
				console.log(123)
			}

		}
	
	}
</script>
<style lang="scss" src="./EditInformation.scss"></style>