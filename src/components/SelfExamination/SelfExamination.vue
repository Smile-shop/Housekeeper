<template>
	<div class="checkForm_container">
		<p class="checkForm_text">
			<img src="../../assets/imgs/arrow (1).png" class="checkFormback" @click=goback>
			<span>企业主体责任履约自查表单</span>
		</p>
		<label for="companyname1" class="q">岗位：</label>
		<input type="text" id="companyname1" placeholder="" class="companyname" v-model="companyname"><br>
		<label for="companyname2" class="j">表单：</label>
		<input type="text" id="companyname2" placeholder="" class="companyname" v-model="companyname"><br>
		<label for="" class="f">频率：</label>
		<el-select v-model="formInline.region" placeholder="请选择时间" >
			<el-option v-for="arr in time" :label="arr[0]" :value="arr[0]"></el-option>
		</el-select>
		<div class="xian"></div>
		<p class="ctips">系统默认提醒时间为每周/次,特殊产品需更改的<br>请查询后更改</p>
	</div>
</template>

<script type="text/javascript">
	// import './checkForm.scss'
	export default {
		data(){
			return {
				companyname:'',
				formInline: {
		          user: '',
		          region: ''
		        },
				time:[['每周/次'],['每月/次']]
			}
		},
		created(){
			this.$indicator.close('加载中...'); 
		},
		methods:{
			checkForm(){
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
			},
			goback(){
				this.$router.go(-1);
				console.log(123)
			}

		}
	
	}
</script>
<style lang="scss" src="./checkForm.scss"></style>