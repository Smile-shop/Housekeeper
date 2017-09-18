<template>
	<div class="EditJobInformation_container">
		<p class="EditJobInformation_text">
			<img src="../../assets/imgs/arrow (1).png" class="goback" @click=goback>
			<span>岗位人员信息管理</span>
		</p>
		<div class="editjod">
			<label for="scompanyname" class="qymc" >岗位人员姓名：</label>
			<input type="text" id="scompanyname" class="scompanyname" :disabled="true" v-model= full_name><br>
			<label for="jyxkzhname" class="jyxkzh">手机号码：</label>
			<input type="text" id="jyxkzhname" class="jyxkzhname" :disabled="true" v-model= mobile><br>
			<p><span class="ggg">岗位：</span><br>
				<span :class="{'spanActive':dz1}" @click = dz class = "gwei">店长
					<input type="checkbox" class = "a1" v-model="checkedNames" value= "店长">
				</span>
				<span :class="{'spanActive':jh1}" @click = jh class = "gwei">进货岗
					<input type="checkbox" class = "a1" v-model="checkedNames" value= "进货岗">
				</span>
				<span :class="{'spanActive':xs1}" @click = xs class = "gwei">销售岗
					<input type="checkbox" class = "a1" v-model="checkedNames" value= "销售岗">
				</span>
				<span :class="{'spanActive':fz1}" @click = fz class = "gwei">质量安全负责岗
					<input type="checkbox" class = "a1" v-model="checkedNames" value= "质量安全负责岗">
				</span>
				<span :class="{'spanActive':zz1}" @click = zz class = "gwei">质量安全追踪岗
					<input type="checkbox" class = "a1" v-model="checkedNames" value= "质量安全追踪岗">
				</span>
			</p>
			<mt-button type="primary" class="qedit" @click="sub">确认修改</mt-button><br>	
		</div>
	</div>
</template>

<script type="text/javascript">
	// import './EditJobInformation.scss'
	export default {
		data(){
			return {
				checkedNames:[],
		        dz1:false,
		        jh1:false,
		        xs1:false,
		        fz1:false,
		        zz1:false,
		        full_name:'',
		        mobile:'',
		        data:''
			}
		},
		mounted(){
			this.data = this.$route.params.a;
			console.log(this.data)
			this.full_name = this.data.user_name;
			this.mobile = this.data.mobile;
			this.checkedNames = this.data.role_ids;
	     	if(this.checkedNames.indexOf("店长")!==-1){
	     		this.dz1 = true
	     	}
	     	if(this.checkedNames.indexOf("进货岗")!==-1){
	     		this.jh1 = true
	     	}
	     	if(this.checkedNames.indexOf("销售岗")!==-1){
	     		this.xs1 = true
	     	}
	     	if(this.checkedNames.indexOf("质量安全负责岗")!==-1){
	     		this.fz1 = true
	     	}
	     	if(this.checkedNames.indexOf("质量安全追踪岗")!==-1){
	     		this.zz1 = true
	     	}
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
			dz(){
				this.dz1 = !this.dz1
			},
			jh(){
				this.jh1 = !this.jh1 
 			},
			xs(){
				this.xs1 = !this.xs1 
 			},
			fz(){
				this.fz1 = !this.fz1 
 			},
			zz(){
				this.zz1 = !this.zz1 
 			},
 			sub(){
 				let obj = {role_ids:this.checkedNames,id:this.data.id}
 				console.log(obj)
 				this.$http.post(baseUrl+'/updateUser',obj).then((res)=>{
	              	console.log(res)
	              	if(res.data.retCode === 0){
	              		this.$messagebox.alert('修改成功!').then(action => {
		              			this.$router.push({name:'jobManagement'})
		              		});
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		             this.$messagebox.alert('修改失败,请稍后再试!');
		          });
 			},
		}
	}
</script>
<style lang="scss" src="./EditJobInformation.scss"></style>