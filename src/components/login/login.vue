<template>
	<div class="login_container">
		<img src="../../assets/imgs/loginBackground.png" alt="" class="login-background">
		<p class="login_text">登录</p>
		<div class="login_logo">
			<img src="../../assets/imgs/logo@3x.png" height="240" width="240" alt="logo">
		</div>
		<label for="phone" class="n">用户名：</label>
		<input type="text" id="phone" placeholder="请输入手机号" class="phone" v-model="phone" autocomplete="off"><br>
		<label for="password" class="m">密&nbsp;&nbsp;&nbsp;  码：</label>
		<input type="password" id="password" placeholder="请输入密码" class="password" v-model="password" autocomplete="off">
		<p class="tips">温馨提示:<br>初始密码为注册手机号码(法人手机号或者质量负责人手机号)的后6位</p>
		<mt-button type="primary" class="loginbtn" @click=login>登录</mt-button>
		<router-link to="regist">
			<mt-button type="primary" class="registbtn">企业注册</mt-button>
		</router-link>
	</div>
</template>

<script type="text/javascript">
	// import './login.scss'
	export default {
		data(){
			return {
				phone:'',
				password:'',
			}
		},
		created(){
			this.$indicator.close('加载中...'); 
		},
		methods:{
			login(){
				console.log(this.phone,this.password)
				if(this.phone==''){
					this.$messagebox.alert('手机号码不能为空！');
					return false;
				}else if(this.password==''){
					this.$messagebox.alert('密码不能为空！');
					return false;
				}
				if(this.phone && /^1[34578]\d{9}$/.test(this.phone)){
					sessionStorage.setItem('user',this.phone)
					this.$http({
		              url: baseUrl+'/login',
		              method:'GET',
		              params:{User:this.phone, Pwd:this.password},
		              }).then((res)=>{
		              	console.log(res)
		              	if(res.data.retCode === 0){
		              		sessionStorage.setItem('juese',JSON.stringify(res.data.data.role_ids))
		              		sessionStorage.setItem('name',res.data.data.realname)
		              		this.$router.push({name:'index'})
		              	}else{
		              		this.$messagebox.alert(res.data.retMessage);
		              	}
			          },(err)=>{
			              console.log('err');
			          });
				}else{
					this.$messagebox.alert('请输入正确的手机号码！');
				}
			},

		},
		mounted(){
			console.log(this.$route.params)
		}
	
	}
</script>
<style lang="scss" src="./login.scss"></style>