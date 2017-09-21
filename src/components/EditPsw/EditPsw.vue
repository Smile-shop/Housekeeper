<template>
	<div class="EditPsw_container">
		<p class="EditPsw_text">
			<img src="../../assets/imgs/arrow (3).png" class="EditPswback" @click=goback>
			<span>修改密码</span>
		</p>
		<label for="companyname1" class="q">原密码：</label>
		<input type="text" id="companyname1" placeholder="" class="companyname" v-model="oldPsw"><br>
		<label for="companyname2" class="j">新密码：</label>
		<input type="text" id="companyname2" placeholder="" class="companyname" v-model="newPsw"><br>
		<mt-button type="primary" class="pedit" @click="EditPsw">提交</mt-button>
	</div>
</template>

<script type="text/javascript">
	// import './EditPsw.scss'
	export default {
		data(){
			return {
				oldPsw:'',
				newPsw:'',
			}
		},
		created(){
			
		},
		methods:{
			EditPsw(){
					let obj = {oldPwd:this.oldPsw,newPwd:this.newPsw}
					this.$http.post(baseUrl+'/changePassword',obj).then((res)=>{
		              	console.log(res)
		              	if(res.data.retCode === 0){
		              		this.$messagebox.alert("操作成功!").then(acton=>{
		              			this.oldPsw = '';
		              			this.newPsw = '';
		              		});
		              	}else{
		              		this.$messagebox.alert(res.data.retMessage);
		              	}
			        },(err)=>{
			             this.$messagebox.alert('操作失败,请稍后再试!');
			        });
				
			},
			goback(){
				this.$router.go(-1);
			}

		},
		watch:{

		}
	
	}

</script>
<style lang="scss" src="./EditPsw.scss"></style>